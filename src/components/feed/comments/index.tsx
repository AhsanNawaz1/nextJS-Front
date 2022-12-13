import axios from 'axios';
import { useEffect, useState } from 'react';

import { NEXT_URL } from '@/config';
import { IComment } from '@/pages/feed';

import Comment from './Comment';
import WriteComment from './WriteComment';

interface IProps {
  postId: string;
}

const Comments = ({ postId }: IProps) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const loadComments = () => {
    axios
      .get<IComment[]>(
        `${NEXT_URL}/api/session/feed-post-comments/feed-post/${postId}`
      )
      .then(({ data }) => {
        setComments(data);
      });
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleDelete = (id: string) => {
    setComments((cmnts) => cmnts.filter((cmnt) => cmnt.id !== id));
  };

  return (
    <div>
      <WriteComment postId={postId} onSubmit={loadComments} />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onUpdate={loadComments}
          onDelete={() => handleDelete(comment.id)}
        />
      ))}
    </div>
  );
};

export default Comments;
