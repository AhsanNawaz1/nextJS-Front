import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

import NewPost from '@/components/feed/new-post';
import PostCard from '@/components/feed/post';
import RigthSideBar from '@/components/feed/right-sidebar';
import { Layout } from '@/components/layout';

import { API_URL, NEXT_URL } from '@/config';
import { parseCookies } from '@/helpers';

export interface IUser {
  _id: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    profilePicture: any;
  };
}

export interface IPOST {
  _id: string;
  text: string;
  media: any[];
  user: IUser;
  commentsCount: number;
  liked_by_users: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  id: string;
  text: string;
  user: IUser;
  feed_post: string;
  createdAt: string;
  updatedAt: string;
}

function Feed({ token }: any) {
  console.log({ token });

  const [posts, setPosts] = useState<IPOST[]>([]);

  const fetchFeedPostApi = () => {
    return axios(`${NEXT_URL}/api/session/feed-posts`);
  };

  const loadPosts = () => {
    fetchFeedPostApi().then(({ data }) => {
      setPosts(data as IPOST[]);
    });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleClickDelete = (id: string) => {
    return axios.delete(`${NEXT_URL}/api/session/feed-posts/${id}`).then(() => {
      setPosts((list) => list.filter((item) => item._id !== id));
    });
  };

  const handleLikesChangeOnPost = (postId: string, likedByUsers: string[]) => {
    setPosts((list) =>
      list.map((p) =>
        p._id === postId ? { ...p, liked_by_users: likedByUsers } : p
      )
    );
  };

  return (
    <Layout showLeftSidebar>
      <div
        className="block justify-between sm:flex"
        style={{ backgroundColor: '#F3F3F3' }}
      >
        {/* <LeftSideBar /> */}
        <div className="m-10 ml-4 w-4/6">
          <NewPost onSubmit={loadPosts} token={token} />

          {posts.map((post) => (
            <PostCard
              key={post._id}
              data={post}
              onDelete={() => handleClickDelete(post._id)}
              onLikesChange={(list) => handleLikesChangeOnPost(post._id, list)}
            />
          ))}
        </div>
        <RigthSideBar />
      </div>
    </Layout>
  );
}

export default Feed;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req);

  const user = await fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  if (!user?.error) {
    return {
      props: {
        token: token ? token : '',
      },
    };
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};
