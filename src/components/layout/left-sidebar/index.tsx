import {
  BellIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  CogIcon,
  GlobeIcon,
  LogoutIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import useUser from '@/hooks/useUser';

import Link from '@/components/Link';

import { useAuth } from '@/context/AuthContext';

import AccelerateIcon from './icons/AccelerateIcon';
import FindAdvisorIcon from './icons/FindAdvisorIcon';
import { useState } from 'react';

const GeneralMenuList = [
  { Icon: GlobeIcon, label: 'Explore', url: '/feed' },
  { Icon: ChatAltIcon, label: 'Discuss', url: '/discuss' },
  { Icon: FindAdvisorIcon, label: 'Find an Advisor', url: '/#' },
  { Icon: AccelerateIcon, label: 'Accelerate', url: '/accelerator' },
  { Icon: ChatAlt2Icon, label: 'Messages', url: '/messages' },
  { Icon: BellIcon, label: 'Notifications', url: '/notifications' },
];

const LeftSideBar = () => {

  const { user, mutate } = useUser();
  const { logout } = useAuth();
  const router = useRouter();

  const onClickLogout = async () => {
    const req = await logout();

    if (!req) {
      return toast.error('There was an error logging out.');
    }

    mutate(null);
    router.replace('/');
    toast('Logged out successfully');
    return;
  };

  const UserMenuList = [
    {
      Icon: UserIcon,
      label: 'Profile',
      url: `/profile/${user?.profile?.slug}`,
    },
    { Icon: CogIcon, label: 'Settings', url: '/settings/profile' },
  ];
  const [expand, setExpand] = useState(false);
  const expandFun = () => {
    if (!expand) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };
  return (
    <>
      <div className='mainLeft relative'>
        <div className='sm:hidden block absolute top-2 left-4'>
          <button onClick={() => expandFun()}> <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg></button>
        </div>
        <div className={expand ? 'chinin' : 'chinout'} style={{ height: "100%" }}>
          <div className="col-span-2 h-full bg-white py-5 px-5 md:w-[100%] xl:w-64">
            {GeneralMenuList.map(({ Icon, label, url }) => (
              <Link href={url} key={label}>
                <div
                  className={`flex h-12 cursor-pointer items-center gap-5 rounded-xl px-3 hover:bg-gray-100 ${router.asPath.includes(url) && 'active'
                    }`}
                >
                  <Icon className="h-4" /> <span>{label}</span>
                </div>
              </Link>
            ))}

            <div className="my-20" />
            {UserMenuList.map(({ Icon, label, url }) => (
              <Link href={url} key={label}>
                <div
                  className={`flex cursor-pointer items-center gap-5 rounded-xl py-4 px-3 hover:bg-gray-100 ${router.asPath.includes(url) && 'active'
                    }`}
                >
                  <Icon className="h-4" /> <span>{label}</span>
                </div>
              </Link>
            ))}

            <div
              className="flex cursor-pointer items-center  gap-5 rounded-xl py-4 px-3 hover:bg-gray-100"
              onClick={onClickLogout}
            >
              <LogoutIcon className="h-4" /> <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
