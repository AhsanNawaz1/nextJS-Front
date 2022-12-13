import { Menu, Transition } from '@headlessui/react';
import {
  ChatAltIcon,
  DotsHorizontalIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import axios from 'axios';
import moment from 'moment';
import Image from 'next/image';
import { Fragment, useState } from 'react';

import useUser from '@/hooks/useUser';

import { NEXT_URL } from '@/config';
import { IPOST } from '@/pages/feed';

import LikeButton from './LikeButton';
import Comments from '../comments';
import Modal from '../Modal';

interface IProps {
  data: IPOST;
  onDelete(): void;
  onLikesChange(likedByUsers: string[]): void;
}

const PostCard = ({
  data: postData,
  onDelete,
  onLikesChange,
}: IProps): JSX.Element => {
  const { user: loggedInUser } = useUser();

  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setDeleteConfirmationModalOpen] =
    useState(false);

  const {
    _id: id,
    text,
    media,
    createdAt,
    user,
    commentsCount,
    liked_by_users: likedByUsers,
  } = postData;

  const {
    profile: { firstName, lastName, profilePicture },
  } = user;

  const fullName = `${firstName} ${lastName}`;

  const handleClickDelete = () => {
    onDelete();
    setDeleteConfirmationModalOpen(false);
  };

  const handleClickLike = (likedByUser: boolean) => {
    axios
      .post<string[]>(`${NEXT_URL}/api/session/feed-posts/like-by-user/${id}`, {
        likedByUser,
      })
      .then(({ data }) => {
        console.log({ data });
        onLikesChange(data);
      });
  };

  return (
    <div className="mb-5 rounded-lg bg-white p-8 shadow">
      <div className="flex justify-between align-top">
        <div className="flex gap-5">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            {profilePicture.formats && (
              <Image
                src={profilePicture.formats?.thumbnail.url}
                alt="User"
                layout="fill"
              />
            )}
          </div>

          <div>
            <span className="block text-lg ">{fullName}</span>
            <small>{moment(createdAt).format('DD-MM-YYYY, hh:mm A')}</small>
          </div>
        </div>

        {loggedInUser?.id === user?._id && (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {/* <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'flex w-full gap-2 px-4 py-2 align-middle text-sm'
                        )}
                      >
                        <PencilIcon className="h-5 w-5" /> Edit
                      </button>
                    )}
                  </Menu.Item> */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setDeleteConfirmationModalOpen(true)}
                        className={`flex w-full gap-2 px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }
                     `}
                      >
                        <TrashIcon className="h-5 w-5" /> Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>

      <div className="my-5 w-full overflow-hidden">
        <p>{text}</p>
      </div>

      <div>
        {media &&
          media.map((item, index) =>
            item.mime.includes('image/') ? (
              <div className="relative h-fit rounded-lg" key={index}>
                <Image
                  src={item.url}
                  alt="Picture of the author"
                  layout="responsive"
                  width={2}
                  height={1}
                  objectFit="contain"
                />
              </div>
            ) : (
              <video
                key={item.url}
                src={item.url}
                controls
                height={300}
                className="rounded"
              />
            )
          )}
      </div>

      <div className="mt-5 flex justify-end gap-10 text-gray-500">
        {likedByUsers.length > 0 && <small>{likedByUsers.length} Likes</small>}
        {commentsCount > 0 && (
          <small
            className="cursor-pointer"
            onClick={() => setCommentSectionOpen(!isCommentSectionOpen)}
          >
            {commentsCount} Comments
          </small>
        )}
      </div>

      <div className="mt-5 flex gap-24 border-y-2 py-3">
        <LikeButton likedByUsers={likedByUsers} onClick={handleClickLike} />

        <button
          className="flex gap-2"
          onClick={() => setCommentSectionOpen(true)}
        >
          <ChatAltIcon className="h-6 w-6" color="#4E5D78" />
          Comment
        </button>

        <div />
      </div>

      {isCommentSectionOpen && <Comments postId={id} />}

      <Modal
        title="Delete Post"
        open={isDeleteConfirmationModalOpen}
        footer={
          <>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleClickDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setDeleteConfirmationModalOpen(false)}
            >
              Cancel
            </button>
          </>
        }
        onClose={() => setDeleteConfirmationModalOpen(false)}
      >
        <p className="text-sm text-gray-500">
          Are you sure you want to delete this post?
        </p>
      </Modal>
    </div>
  );
};

export default PostCard;
