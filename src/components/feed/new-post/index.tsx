import {
  PhotographIcon,
  VideoCameraIcon,
  XIcon,
} from '@heroicons/react/outline';
import axios from 'axios';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import useUser from '@/hooks/useUser';

import { API_URL, NEXT_URL } from '@/config';
import { IPOST } from '@/pages/feed';

interface IProps {
  token: string;
  onSubmit(): void;
}

const NewPost = ({ onSubmit, token }: IProps) => {
  const inputRef = useRef(null);
  const [newPostText, setNewPostText] = useState<string>('');
  const [posting, setPosting] = useState(false);
  const { user } = useUser();
  const profilePictureUrl = user?.profile.profilePicture.formats?.thumbnail.url;
  const [files, setFiles] = useState<{ file: File; preview: string }[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const filesList = Array.from(target.files).map((file) => ({
        preview: URL.createObjectURL(file),
        file,
      }));

      setFiles(filesList);
    }
  };

  const savePost = async () => {
    if (!newPostText) {
      return;
    }

    try {
      setPosting(true);

      const { data: responseData } = await axios.post<IPOST>(
        `${NEXT_URL}/api/session/feed-posts`,
        { text: newPostText }
      );

      if (files.length > 0) {
        let formData = new FormData();
        const data = { text: newPostText };
        formData.append('data', JSON.stringify(data));

        for (let i = 0; i < files.length; i++) {
          const file = files[i]?.file;
          if (file) {
            formData.append(`files`, file, file.name);
          }
        }

        formData.append('refId', responseData._id);
        formData.append('ref', 'feed-post');
        formData.append('field', 'media');

        await axios.post(`${API_URL}/upload`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        setFiles([]);
      }

      // toast('Posted');
      setNewPostText('');
      onSubmit();
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="mb-5 rounded-lg bg-white p-8 shadow">
      <div className="flex gap-5">
        {profilePictureUrl && (
          <div className="relative h-14 w-16 overflow-hidden rounded-full">
            <Image src={profilePictureUrl} alt="User" layout="fill" />
          </div>
        )}

        {/* <img
          className="h-14 w-16 rounded-full"
          src={profilePictureUrl}
          alt="profile"
        /> */}

        <input
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          className="w-full rounded-lg bg-gray-100 p-5 text-lg"
          placeholder="What's happening?"
        />
      </div>
      {files.length > 0 && (
        <div className="mt-10 flex flex-wrap">
          {files.map((file) => (
            <div
              key={file.preview}
              className="relative mr-5 mb-5 flex w-44 rounded border-2 p-1"
            >
              <span
                onClick={() => {
                  setFiles((fs) =>
                    fs.filter((f) => f.preview !== file.preview)
                  );
                }}
                className="absolute -top-3 -right-3 h-5 w-5 cursor-pointer rounded-full border bg-slate-200"
              >
                <XIcon />
              </span>
              {file.file.type.includes('image/') && (
                <img
                  src={file.preview}
                  alt="img"
                  className="w-full self-center"
                />
              )}

              {file.file.type.includes('video/') && (
                <video
                  src={file.preview}
                  controls
                  className="h-full w-full self-center"
                />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <label className="mt-3 cursor-pointer">
            <div className="flex gap-1 ">
              <PhotographIcon className="h-6 w-6" /> <span>Photo</span>
            </div>

            <input
              multiple
              ref={inputRef}
              onChange={(e) => handleFileChange(e)}
              type="file"
              className="hidden"
              accept="image/x-png,image/gif,image/jpeg"
            />
          </label>

          <label className="mt-3 cursor-pointer">
            <div className="flex gap-1">
              <VideoCameraIcon className="h-6 w-6" /> <span>Video</span>
            </div>

            <input
              multiple
              ref={inputRef}
              onChange={(e) => handleFileChange(e)}
              type="file"
              className="hidden"
              accept="video/mp4,video/x-m4v,video/*"
            />
          </label>
        </div>

        {posting ? (
          <div className="pt-3 pb-1">Posting...</div>
        ) : (
          <button
            className="rounded-md bg-blue-600 py-2 px-7 text-white"
            onClick={savePost}
            disabled={posting}
          >
            Post
          </button>
        )}
      </div>
    </div>
  );
};

export default NewPost;
