import { PaperAirplaneIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useState } from 'react';

import useUser from '@/hooks/useUser';

import { NEXT_URL } from '@/config';
import { IComment } from '@/pages/feed';

interface IProps {
  postId: string;
  isEditing?: boolean;
  commentId?: string;
  value?: string;
  onSubmit(data: IComment): void;
}

const WriteComment = ({
  postId,
  isEditing,
  value,
  commentId,
  onSubmit,
}: IProps) => {
  const { user: loggedInUser } = useUser();
  const profilePictureUrl =
    loggedInUser?.profile.profilePicture.formats.thumbnail.url;

  const [text, setText] = useState(value || '');

  const createComment = () => {
    return axios.post<IComment>(`${NEXT_URL}/api/session/feed-post-comments`, {
      text,
      feed_post: postId,
      user: loggedInUser.id,
    });
  };

  const updateComment = () => {
    return axios.put<IComment>(
      `${NEXT_URL}/api/session/feed-post-comments/${commentId}`,
      {
        text,
      }
    );
  };

  const handleSubmitComment = () => {
    if (text) {
      let promise = isEditing ? updateComment() : createComment();

      promise.then(({ data }) => {
        onSubmit(data);
        setText('');
      });
    }
  };

  return (
    <div className="mt-5 flex align-middle">
      <img
        className="mr-5 h-10 w-12 rounded-full"
        src={profilePictureUrl}
        alt="profile"
      />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mr-2 w-full rounded-lg bg-gray-100 py-1 px-5"
        placeholder="Write a comment"
      />
      <button
        className="rounded px-3 hover:bg-gray-50"
        onClick={handleSubmitComment}
      >
        <PaperAirplaneIcon className="h-5 rotate-90" color="#377DFF" />
      </button>
    </div>
  );
};

export default WriteComment;
