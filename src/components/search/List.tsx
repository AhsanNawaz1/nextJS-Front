import { useRouter } from 'next/router';
import qs from 'qs';
import useSWR from 'swr';

import ProfileCard from '@/components/search/Card';

import { sessionGet } from '@/helpers/fetchers';

const PAGE_SIZE = 12;

export default function SearchList({ children }: any) {
  const router = useRouter();
  const { page, ...params } = router.query;

  const offset = page ? (parseInt(page.toString()) - 1) * PAGE_SIZE : 0;
  let fetchUrl = `profiles/search?_sort=profilePicture:DESC,legacyProfilePicture:DESC,createdAt:DESC&_limit=${PAGE_SIZE}&_start=${offset}&${qs.stringify(
    params
  )}`;

  const { data: profiles, error } = useSWR(fetchUrl, sessionGet);

  if (!profiles && !error) {
    return (
      <>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {[...Array(6)].map((_, i: number) => (
            <li key={i} className="col-span-1">
              <div className="rounded-md border-2">
                <div className="flex h-full animate-pulse flex-col items-center justify-center space-y-8 py-6">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gray-300"></div>
                  <div className="space-y-3">
                    <div className="mx-auto h-6 w-24 rounded-md bg-gray-300"></div>
                    <div className="mx-auto h-6 w-36 rounded-md bg-gray-300"></div>
                  </div>
                  <div className="flex w-full flex-row justify-between">
                    <div className="mx-auto h-8 w-32 rounded-md bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (error) {
    return (
      <div className="p-20 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <h2 className="mt-2 text-lg font-medium text-gray-900">
          Error, please try again later
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Could not load results, please try a different search
        </p>
      </div>
    );
  }

  if (profiles.length <= 0) {
    return (
      <div className="p-20 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <h2 className="mt-2 text-lg font-medium text-gray-900">
          No profiles match your filters
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Don&apos;t get discouraged, try different filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {profiles.map((profile: any, i: number) => (
          <li
            key={profile.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <ProfileCard profile={profile} />
          </li>
        ))}
      </ul>
    </>
  );
}
