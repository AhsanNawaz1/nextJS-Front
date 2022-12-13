import { TrendingUpIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

import Link from '@/components/Link';

import { classNames } from '@/helpers/index';

export interface IDiscussNavigationProps {}

const navigation = [
  // { name: 'Home', href: '/discuss', icon: HomeIcon },
  { name: 'Trending', href: '/discuss', icon: TrendingUpIcon },
  // { name: 'Popular', href: '/discuss', icon: FireIcon },
  // { name: 'Mine', href: '/', icon: UserIcon },
];
const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
];

export default function DiscussNavigation({}: IDiscussNavigationProps) {
  const router = useRouter();

  return (
    <>
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="space-y-1 pb-8">
          <Link
            href="/discuss/new"
            className="mb-5 mt-2 block w-full rounded-md border border-transparent bg-blue-600 px-4 py-1.5 text-center text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Ask question
          </Link>
          {navigation.map((item) => {
            const current = router.pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  current
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50',
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
                )}
                aria-current={current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    current
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* TODO: topics you follow */}
        {/* <div className="pt-10">
          <p
            className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
            id="communities-headline"
          >
            Topics you follow
          </p>
          <div
            className="mt-3 space-y-2"
            aria-labelledby="communities-headline"
          >
            {communities.map((community) => (
              <a
                key={community.name}
                href={community.href}
                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
              >
                <span className="truncate">{community.name}</span>
              </a>
            ))}
          </div>
        </div> */}
      </nav>
    </>
  );
}
