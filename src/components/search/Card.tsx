import { LinkIcon, MailIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

import ConnectModal from '@/components/connect/Modal';
import Link from '@/components/Link';
import MessageModal from '@/components/message/Modal';
import ProfilePicture from '@/components/ProfilePicture';

import { classNames } from '@/helpers/index';

export interface IProfileCardProps {
  profile: any;
}

export default function ProfileCard({ profile }: IProfileCardProps) {
  const [showConnect, setShowConnect] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  let lastActive = 'Active more than a month ago';
  let activeColor = 'bg-gray-400';
  if (profile?.lastLogin) {
    const lastActiveDate = new Date(profile?.lastLogin);
    const now = new Date();
    const diff = now.getTime() - lastActiveDate.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 8) {
      lastActive = `Active less than a week ago`;
      activeColor = 'bg-green-600';
    } else if (diffDays < 31) {
      lastActive = `Active less than a month ago`;
      activeColor = 'bg-orange-300';
    }
  }

  return (
    <>
      <div className="relative flex items-start gap-x-5 px-8 py-6">
        <div>
          <Link href={`/profile/${profile.slug}`} className="relative block">
            <div
              className={classNames(
                profile.cflTeam && 'ring-2 ring-red-500 ring-offset-4',
                profile.premium && 'ring-2 ring-orange-500 ring-offset-4',
                'mx-auto block h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-gray-200 transition delay-100 hover:ring-4 hover:ring-blue-400 hover:ring-offset-4'
              )}
            >
              <ProfilePicture profile={profile} />
            </div>
            <div className="group absolute bottom-0 right-0 flex flex-col items-center">
              <span
                className={classNames(
                  activeColor,
                  'block h-3 w-3 rounded-full ring-2 ring-white '
                )}
              ></span>
              <div className="absolute bottom-0 mb-6 hidden flex-col items-center group-hover:flex">
                <span className="whitespace-no-wrap relative z-10 w-40 bg-black p-3 text-sm leading-none text-white shadow-lg">
                  {lastActive}
                </span>
                <div className="-mt-2 h-3 w-3 rotate-45 bg-black"></div>
              </div>
            </div>
          </Link>
          <dt className="sr-only">Role</dt>
          <dd className="mt-1">
            <span className="rounded-full bg-[#F2F5FA] px-2 py-1 text-xs font-medium text-[#377DFF]">
              {profile.role}
            </span>
          </dd>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="mt-3 text-left text-base font-medium">
            <Link
              href={`/profile/${profile.slug}`}
              className="font-bold text-[#4E5D78] hover:text-blue-600"
            >
              {`${profile.firstName} ${profile.lastName}`}
            </Link>
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between text-left">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-[#4e5d7899]">{profile.tagline}</dd>
          </dl>
        </div>
      </div>
      <div className="border-none px-8">
        <div className="-mt-px flex gap-x-5 pb-6">
          <div className="-ml-px flex w-0 flex-1">
            <button
              onClick={() => setShowMessage(true)}
              className="w-full rounded-md border border-gray-400 py-1 px-4  text-gray-500 xl:py-2 xl:px-7"
            >
              <MailIcon className="sr-only h-5 w-5" aria-hidden="true" />
              <span className="text-xs text-[#92969E] xl:text-base">
                Message
              </span>
            </button>
          </div>
          <div className="flex w-0 flex-1">
            <button
              onClick={() => setShowConnect(true)}
              className="search-connect-btn w-full rounded-md py-1 px-4 text-center text-white xl:py-2 xl:px-7"
            >
              <LinkIcon className="sr-only h-5 w-5" aria-hidden="true" />
              <span className="text-xs xl:text-base">Connect</span>
            </button>
          </div>
        </div>
      </div>
      <ConnectModal
        open={showConnect}
        profile={profile}
        handleClose={() => setShowConnect(false)}
      />
      <MessageModal
        open={showMessage}
        profile={profile}
        handleClose={() => setShowMessage(false)}
      />
    </>
  );
}
