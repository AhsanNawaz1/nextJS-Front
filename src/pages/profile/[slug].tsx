import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import Forbidden from '@/components/Forbidden';
import { Layout, Meta } from '@/components/layout';
import Link from '@/components/Link';
import Loading from '@/components/Loading';
import ProfileView from '@/components/profile/profileview';

import { API_URL } from '@/config/index';
import { apiFetcher } from '@/helpers/fetchers';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const courses = [
  {
    id: 1,
    title: 'Playbook To Launch Your Startup',
    href: 'https://learn.cofounderslab.com/p/playbook-to-launch-your-startup',
    preview:
      'Learn how to build a minimum viable product. Get certified. Launch your startup. Grow your business.',
  },
  // {
  //   id: 2,
  //   title: 'Growth Hacking Introduction',
  //   href: '/learn',
  //   preview:
  //     'Get a FREE introduction to the world of Growth Hacking. Learn useful tools to acquire new customers efficiently.',
  // },
  // {
  //   id: 3,
  //   title: 'Mastering The Fundraising Game',
  //   href: '/learn',
  //   preview:
  //     'Learn how to fundraise. Get certified. Close the deal. Grow your business.',
  // },
];

function ProfilePage({ slug }: any) {
  let routess = useRouter();
  console.log(routess.route, 'routess');
  const { data: profile } = useSWR(`/profiles/${slug}`, apiFetcher);

  if (!profile) return <Forbidden />;
  return (
    <Layout
      showLeftSidebar
      meta={
        <Meta
          title={`${profile.firstName} ${profile.lastName} - Entrepreneurs from ${profile?.city?.name} on CoFoundersLab`}
          description={`${profile.firstName} ${profile.lastName} ${profile.role} CoFoundersLab profile. The leading entrepreneurial network where like-minded entrepreneurs connect, meet and collaborate.`}
        />
      }
    >
      <div className="h-full border-t border-b border-gray-200">
        <div className="max-w-8xl mx-auto mt-10 px-4">
          <h1 className="sr-only">Profile</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5">
            {/* Left column */}

            <div className="grid grid-cols-1 gap-6 lg:col-span-3">
              <ProfileView profile={profile} />
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-6">
              {/* <section aria-labelledby="recent-hires-title">
              <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">
                  <h2
                    className="text-base font-bold text-gray-900"
                    id="recent-hires-title"
                  >
                    Similar profiles
                  </h2>
                  <div className="flow-root mt-6">
                    <ul
                      role="list"
                      className="-my-5 divide-y divide-gray-200"
                    >
                      {recentHires.map((person) => (
                        <li key={person.name} className="py-4">
                          <div className="relative flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <img
                                className="h-8 w-8 rounded-full"
                                src={person.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link
                                href={'/profile'}
                                className="text-sm font-medium text-gray-900 truncate hover:underline focus:outline-none"
                              >
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                                {person.name}
                              </Link>
                              <p
                                title={person.tagline}
                                className="text-sm text-gray-500 truncate"
                              >
                                {person.tagline}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section> */}

              {/* Announcements */}

              {/* {MY Communities} */}
              <section aria-labelledby="courses-title">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="">
                    <h2
                      className="border-b-2 border-slate-100 p-4 text-base font-bold text-[#4E5D78]"
                      id="courses-title"
                    >
                      MY Communities
                    </h2>
                    <div className="mt-2 flow-root p-4">
                      <div className="itemss mycommunity mb-4 flex items-center">
                        <div className="cominityHead">
                          <img
                            src="/assets/images/community.svg"
                            // src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NzooaJJVS7OwTBdjRr2p"

                            className="comunityImage object-cover "
                          ></img>
                        </div>
                        <div className="contentss block">
                          <h3 className="text-sm font-semibold text-[#4E5D78]">
                            Crypto King
                          </h3>
                          <p className="text-xs text-[#4E5D78]">
                            I am expert in crypto and blockchain
                          </p>
                        </div>
                      </div>
                      <div className="itemss mycommunity mb-4 flex items-center">
                        <div className="cominityHead">
                          <img
                            src="/assets/images/community.svg"
                            // src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NzooaJJVS7OwTBdjRr2p"

                            className="comunityImage object-cover "
                          ></img>
                        </div>
                        <div className="contentss block">
                          <h3 className="text-sm font-semibold text-[#4E5D78]">
                            Crypto King
                          </h3>
                          <p className="text-xs text-[#4E5D78]">
                            I am expert in crypto and blockchain
                          </p>
                        </div>
                      </div>
                      <div className="itemss mycommunity mb-4 flex items-center">
                        <div className="cominityHead">
                          <img
                            src="/assets/images/community.svg"
                            // src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NzooaJJVS7OwTBdjRr2p"

                            className="comunityImage object-cover "
                          ></img>
                        </div>
                        <div className="contentss block">
                          <h3 className="text-sm font-semibold text-[#4E5D78]">
                            Crypto King
                          </h3>
                          <p className="text-xs text-[#4E5D78]">
                            I am expert in crypto and blockchain
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* {MY Communities} */}
              {/* {preferences} */}
              <section aria-labelledby="courses-title">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="">
                    <h2
                      className="border-b-2 border-slate-100 p-4 text-base font-bold text-[#4E5D78]"
                      id="courses-title"
                    >
                      Prefrences
                    </h2>
                    <div className="mt-2 flow-root p-4">
                      <div className="itemss mycommunity pref mb-4  flex">
                        <div className="cominityHead">
                          <img
                            src="/assets/images/preferences.svg"
                            // src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NzooaJJVS7OwTBdjRr2p"

                            className="comunityImage object-cover "
                          ></img>
                        </div>
                        <div className="contentss block">
                          <h3 className="text-sm font-semibold text-[#4E5D78]">
                            What is your role?
                          </h3>
                          <p className="text-xs text-[#377DFF]">Team Member</p>
                        </div>
                      </div>
                      <div className="itemss mycommunity pref mb-4  flex">
                        <div className="cominityHead">
                          <img
                            src="/assets/images/preferences.svg"
                            // src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NzooaJJVS7OwTBdjRr2p"

                            className="comunityImage object-cover "
                          ></img>
                        </div>
                        <div className="contentss block">
                          <h3 className="text-sm font-semibold text-[#4E5D78]">
                            What is your role?
                          </h3>
                          <p className="text-xs text-[#377DFF]">Team Member</p>
                        </div>
                      </div>
                      <div className="itemss mycommunity pref mb-4  flex">
                        <div className="cominityHead">
                          <img
                            src="/assets/images/preferences.svg"
                            // src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NzooaJJVS7OwTBdjRr2p"

                            className="comunityImage object-cover "
                          ></img>
                        </div>
                        <div className="contentss block">
                          <h3 className="text-sm font-semibold text-[#4E5D78]">
                            What is your role?
                          </h3>
                          <p className="text-xs text-[#377DFF]">Team Member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* {preferences} */}
              <section aria-labelledby="courses-title">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">
                    <h2
                      className="text-base font-bold text-gray-900"
                      id="courses-title"
                    >
                      Learning center
                    </h2>
                    <div className="mt-2 flow-root">
                      <p className="mb-5 text-sm font-light text-gray-900">
                        Add new skills with free courses
                      </p>
                      <ul
                        role="list"
                        className="-my-5 divide-y divide-gray-200"
                      >
                        {courses.map((course) => (
                          <li key={course.id} className="py-5">
                            <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                              <img
                                className="mb-5 object-cover"
                                src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NzooaJJVS7OwTBdjRr2p"
                                alt=""
                              />
                              <h3 className="text-sm font-semibold text-gray-800">
                                <Link
                                  href={course.href}
                                  className="hover:underline focus:outline-none"
                                >
                                  {/* Extend touch target to entire panel */}
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {course.title}
                                </Link>
                              </h3>
                              <p className="line-clamp-2 mt-1 text-sm text-gray-600">
                                {course.preview}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://learn.cofounderslab.com/"
                        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                      >
                        View more courses
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function Profile({ fallback }: any) {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <SWRConfig>
      <ProfilePage slug={slug} />
    </SWRConfig>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/profiles?_limit=10`);

  const profiles: any = await res.json();
  const slugs = profiles && profiles.map((profile: any) => profile.slug);
  const paths = slugs && slugs.map((slug: any) => ({ params: { slug } }));
  return { paths, fallback: true };
  // return { paths: [{ params: { slug: 'abdullah-ali-va2ux3l471q' } }], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const res = await fetch(`${API_URL}/profiles/${slug}`);
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const profile: any = await res.json();

  const fallback: any = {};
  fallback[`/profiles/${slug}`] = profile;

  return {
    props: {
      fallback: fallback,
    },
    revalidate: 60,
  };
};
