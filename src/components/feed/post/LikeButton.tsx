import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';

import useUser from '@/hooks/useUser';

interface IProps {
  likedByUsers: string[];
  onClick(likedByUser: boolean): void;
}

const LikeButton = ({ likedByUsers, onClick }: IProps) => {
  const { user: loggedInUser } = useUser();

  const isAlreadyLiked = likedByUsers.some((id) => id === loggedInUser?.id);

  const handleClick = () => {
    onClick(!isAlreadyLiked);
  };

  return (
    <span className="flex cursor-pointer gap-2" onClick={handleClick}>
      {isAlreadyLiked ? (
        <HeartIconSolid className="h-6 w-6 text-red-600" />
      ) : (
        <HeartIconOutline className="h-6 w-6" color="#4E5D78" />
      )}{' '}
      {isAlreadyLiked ? 'Liked' : 'Like'}
    </span>
  );
};

export default LikeButton;
