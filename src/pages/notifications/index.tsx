import { CogIcon } from '@heroicons/react/outline';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import RigthSideBar from '@/components/feed/right-sidebar';
import { Layout } from '@/components/layout';
import Notification from '@/components/notifications/notification';

import { API_URL } from '@/config';
import { parseCookies } from '@/helpers';
import { sessionGet } from '@/helpers/fetchers';

import { IUser } from '../feed';

export type NotificationType = {
  id: string;
  action: string;
  userSender: IUser;
  userReceiver: IUser;
  references: {};
  published_at: string;
  isSeen: boolean;
};

function Notifications() {
  const { data, error } = useSWR<NotificationType[]>(
    'notifications/user',
    sessionGet
  );

  return (
    <Layout showLeftSidebar>
      <div
        className="flex justify-between"
        style={{ backgroundColor: '#F3F3F3' }}
      >
        <div className="m-10 ml-4 w-4/6">
          <div
            className="flex justify-between rounded-t-lg bg-white py-2 px-4"
            style={{ alignItems: 'center', height: '60px' }}
          >
            <div className="font-bold">Notifications</div>
            <CogIcon className="h-6 cursor-pointer " />
          </div>

          {data?.length === 0 && (
            <div className="mx-auto mt-7 w-64 rounded-lg bg-gray-400 p-4 text-center font-semibold text-white">
              Nothing new here
            </div>
          )}
          {data?.map((notification: NotificationType) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </div>
        <RigthSideBar />
      </div>
    </Layout>
  );
}

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

export default Notifications;
