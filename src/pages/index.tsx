import { ExternalLinkIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import useUser from '@/hooks/useUser';

import { Header, Layout, Meta } from '@/components/layout';
import Link from '@/components/Link';

const HomeNav = ({ connectScroll, educateScroll, raiseScroll }: any) => {
  return (
    <>
      <a
        onClick={connectScroll}
        className="cursor-pointer text-lg font-normal text-gray-800 hover:text-blue-600 active:text-blue-700"
      >
        Find a CoFounder
      </a>
      <a
        onClick={educateScroll}
        className="cursor-pointer text-lg font-normal text-gray-800 hover:text-blue-600 active:text-blue-700"
      >
        Startup Accelerator
      </a>
      <a
        href="https://advisors.cofounderslab.com/"
        className="flex cursor-pointer items-center gap-2 text-lg font-normal text-gray-800 hover:text-blue-600 active:text-blue-700"
        target="_blank"
        rel="noreferrer"
      >
        Advisors{' '}
        <ExternalLinkIcon
          className="h-4 w-4 text-gray-300"
          aria-hidden="true"
        />
      </a>
      <a
        onClick={raiseScroll}
        className="cursor-pointer text-lg font-normal text-gray-800 hover:text-blue-600 active:text-blue-700"
      >
        Resources
      </a>
    </>
  );
};

const Home: NextPage = () => {
  const router = useRouter();
  const { user, loggedOut } = useUser();

  useEffect(() => {
    if (user && !loggedOut) {
      if (user.onboarded) {
        router.push('/dashboard');
      } else {
        router.push('/onboarding');
      }
    }
  }, [user, loggedOut]);

  const connectRef = useRef<HTMLHeadingElement>(null);
  const educateRef = useRef<HTMLHeadingElement>(null);
  const raiseRef = useRef<HTMLHeadingElement>(null);

  const connectScroll = () => {
    if (connectRef && connectRef.current) {
      connectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const educateScroll = () => {
    router.push('/accelerator');
    // if (educateRef && educateRef.current) {
    //   educateRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
  };
  const raiseScroll = () => {
    if (raiseRef && raiseRef.current) {
      raiseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout
      meta={
        <Meta
          title="CoFoundersLab: World's Largest Network of Entrepreneurs"
          description="The leading entrepreneurial network where like-minded entrepreneurs connect, meet and collaborate."
        />
      }
      sidebar={null}
      header={
        <Header
          sticky={true}
          publicMenu={
            <HomeNav
              connectScroll={connectScroll}
              educateScroll={educateScroll}
              raiseScroll={raiseScroll}
            />
          }
        />
      }
    >
      {/* HERO */}
      <div className="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-8 max-w-xl">
              <h2 className="mb-6 max-w-lg font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:leading-tight">
                The STARTUP{' '}
                <span className="inline-block cursor-pointer text-blue-600 hover:text-blue-700">
                  COMMUNITY
                </span>
                <span className="inline-block cursor-pointer text-gray-500 hover:text-blue-700">
                  Start. Grow. Fund.
                </span>
              </h2>
              <p className="text-base text-gray-600">
                CoFoundersLab is the largest startup community on the Internet.
                Join now to find your CoFounder and accelerate your business
                today 🚀
              </p>
              <Link
                href="/register"
                className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-sm transition duration-200 hover:bg-orange-500 active:bg-orange-800"
              >
                Join for free
              </Link>
            </div>
            <div className="grid gap-8 gap-y-8 sm:grid-cols-2">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"
                      fill="rgba(0,134,255,1)"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Find a CoFounder
                </h6>
                <p className="text-sm text-gray-900">
                  Find your perfect partner based on interests, skills and
                  location.
                </p>
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path
                      d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"
                      fill="rgba(0,134,255,1)"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Get Funded</h6>
                <p className="text-sm text-gray-900">
                  Learn how to pitch and find investors to fund your Startup.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex items-center justify-center lg:pl-8">
            <Image
              src="/assets/images/homepage/undraw_project_team_lc5a.svg"
              alt="CoFoundersLab - THE STARTUP COMMUNITY"
              width={550}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div className="bg-gray-50 py-5 px-4">
        <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:flex">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <p className="inline-block whitespace-nowrap rounded-full px-2 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Our partners
              </p>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="mt-4 h-3 grayscale filter"
                src="/assets/images/partner-logos/undock-logo-deep-purple.png"
                alt="Undock"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 grayscale filter"
                src="/assets/images/partner-logos/Hubspot-logo.gif"
                alt="Hubspot"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 grayscale filter"
                src="/assets/images/partner-logos/slidebean-logo.png"
                alt="Slidebean"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="mt-2 h-5 grayscale filter"
                src="/assets/images/partner-logos/soona-logo.png"
                alt="Soona"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="mt-2 h-5 grayscale filter"
                src="/assets/images/partner-logos/Funden-logo.png"
                alt="Funden"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="mt-1 h-8 grayscale filter"
                src="/assets/images/partner-logos/customerly-logo.svg"
                alt="Customerly"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="mt-1 h-8 grayscale filter"
                src="/assets/images/partner-logos/audvisor.png  "
                alt="Audvisor"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FIND COFOUNDER */}
      <div
        ref={connectRef}
        id="find-a-cofounder"
        className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-20"
      >
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <div>
            <p className="mb-6 inline-block rounded-full bg-blue-600 px-3 py-px text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </p>
          </div>
          <h2 className="mb-6 max-w-xl font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Find Your CoFounder
          </h2>
          <p className="md:text-md text-base text-gray-700">
            From advisors, investors, mentors &amp; entrepreneurs, CoFoundersLab
            provides you with all the means necessary to find the perfect fit
            for your startup.
          </p>
        </div>
        <div className="grid gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex">
              <div className="mr-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9.446 9.032l1.504 1.504-1.414 1.414-1.504-1.504a4 4 0 1 1 1.414-1.414zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      fill="rgba(0,134,255,1)"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  CoFounder Smart-Search
                </h6>
                <p className="text-sm text-gray-900">
                  Use our specialised search algorithm to help find the perfect
                  CoFounder to grow your business to success.
                </p>
                <hr className="my-6 w-full border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                      fill="rgba(0,134,255,1)"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  All that you could need
                </h6>
                <p className="text-sm text-gray-900">
                  From mentors, investors, entrepreneurs, locations and
                  skillsets. Find the perfect team member, CoFounder, or
                  investor that fit your startup needs.
                </p>
                <hr className="my-6 w-full border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0L24 0 24 24 0 24z" />
                    <path
                      d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"
                      fill="rgba(0,134,255,1)"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Build your network
                </h6>
                <p className="text-sm text-gray-900">
                  Open opportunities by networking through our discussion board,
                  exclusive weekly events, or simply connect with other
                  entrepreneurs.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/register"
                className="mr-6 inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-500 active:bg-orange-800"
              >
                Join for free
              </Link>
            </div>
          </div>
          <div className="grid">
            <Image
              src="/assets/images/homepage/undraw_team_page_re_cffb.svg"
              alt="Find Your CoFounder"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* ACCELERATOR */}
      <div ref={educateRef} id="accelerator" className="bg-cyan-100">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-20">
          <div className="grid gap-8 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center">
              <Image
                src="/assets/images/homepage/undraw_growth_analytics_re_pyxf.svg"
                alt="Turbocharge Your Startup Growth"
                width={500}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl">
                <div className="max-w-xl md:mx-auto lg:max-w-2xl">
                  <div>
                    <p className="mb-6 inline-block rounded-full bg-blue-600 px-3 py-px text-sm font-semibold uppercase tracking-wider text-white">
                      Startup Accelerator
                    </p>
                  </div>
                  <h2 className="mb-6 max-w-xl font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Turbocharge Your Startup Growth
                  </h2>
                </div>
                <p className="mt-11 mb-8 text-base text-gray-700 md:text-lg">
                  A curated 20 week program to accelerate your business.
                </p>
              </div>
              <div className="max-w-xl">
                <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
                  <ul className="space-y-6">
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="mt-px h-7 w-7 text-blue-600"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      A dedicated program of content, resources and materials to
                      take your business to the next level
                    </li>
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="mt-px h-7 w-7 text-blue-600"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Exclusive groups to keep the founder focused with group
                      accountability
                    </li>
                  </ul>
                  <ul className="space-y-6">
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="mt-px h-7 w-7 text-blue-600"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Direct personalized mentoring to cater to your specific
                      needs
                    </li>
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="mt-px h-7 w-7 text-blue-600"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Helping you build you perfect pitch deck to raise capital
                      to grow your business
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/register"
                    className="mt-8 mr-6 inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-500 active:bg-orange-800"
                  >
                    Accelerate your Startup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADVISORS */}
      <div className="lg:py-18 mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8">
        <div className="grid gap-6 gap-y-10 lg:grid-cols-2">
          <div className="mx-auto mb-10 max-w-xl sm:pr-16">
            <div className="mt-3 max-w-xl md:mx-auto lg:max-w-2xl">
              <div>
                <p className="mb-6 inline-block rounded-full bg-blue-600 px-3 py-px text-sm font-semibold uppercase tracking-wider text-white">
                  Advisor network
                </p>
              </div>
              <h2 className="mb-6 max-w-xl font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Find Your Advisors
              </h2>
            </div>
            <p className="mt-8 mb-8 text-base text-gray-700 md:text-lg">
              A highly curated group of amazing advisors and business titans
              touching all areas of business.
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="/register"
                className="mr-6 inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-500 active:bg-orange-800"
              >
                Join for free
              </Link>
            </div>
          </div>
          <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0 md:mt-12">
            <ul className="space-y-3">
              <li className="flex text-base text-gray-700 md:text-lg">
                <span className="mr-1">
                  <svg
                    className="mt-px h-7 w-7 text-blue-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Connect directly with vetted business advisors and mentors
                covering all industries
              </li>
              <li className="flex pt-10 text-base text-gray-700 md:text-lg">
                <span className="mr-1">
                  <svg
                    className="mt-px h-7 w-7 text-blue-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Expand your network and opportunities with advisors, mentors and
                associates
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex text-base text-gray-700 md:text-lg">
                <span className="mr-1">
                  <svg
                    className="mt-px h-7 w-7 text-blue-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Prepare, maintain and perfect your business strategy for
                best-in-class results
              </li>
              <li className="flex pt-10 text-base text-gray-700 md:text-lg">
                <span className="mr-1">
                  <svg
                    className="mt-px h-7 w-7 text-blue-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Gain instant access to years of knowledge from industry
                practitioners
              </li>
            </ul>
            {/* <div className="flex flex-col items-center">
                <div className="mb-2 text-sm text-gray-400 md:mb-2">
                  Powered by
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                      alt="StaticKit"
                    />
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>

      {/* RESOURCES */}
      <div ref={raiseRef} id="resources" className="bg-cyan-100">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-20">
          <div className="grid gap-8 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/homepage/undraw_operating_system_re_iqsc.svg"
                alt="All the Tools for Success"
                width={500}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl">
                <div className="max-w-xl md:mx-auto lg:max-w-2xl">
                  <div>
                    <p className="mb-6 inline-block rounded-full bg-blue-600 px-3 py-px text-sm font-semibold uppercase tracking-wider text-white">
                      Resources
                    </p>
                  </div>
                  <h2 className="mb-6 max-w-xl font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    All the Tools for Success
                  </h2>
                </div>
                <p className="mt-8 mb-8 text-base text-gray-700 md:text-lg">
                  Hours of downloadable materials, workbooks, and resources to
                  arm you with everything you need start, grow and fund your
                  business.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/register"
                    className="mr-6 inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-500 active:bg-orange-800"
                  >
                    Join for free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="lg:py-22 overflow-hidden bg-white py-16">
        <div className="max-w-8xl relative mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            role="img"
            aria-labelledby="svg-workcation"
          >
            <title id="svg-workcation">Workcation</title>
            <defs>
              <pattern
                id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-blue-100"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
            />
          </svg>

          <div className="relative">
            <blockquote className="mt-10">
              <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
                <p>
                  &ldquo;In CoFoundersLab I have found a community of passionate
                  founders and advisors who help each other by sharing their
                  experiences with direct feedback that allows a founder to grow
                  and develop their company to its potential. Its been my
                  favorite group to network with like-minded
                  professionals.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white shadow-md">
                      <img
                        className="mx-auto h-20 w-20 rounded-full"
                        src="/assets/images/homepage/heather-dawson.jpg"
                        alt="Heather Dawson / CEO of Xiggit"
                      />
                    </div>
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-semibold text-gray-900">
                      Heather Dawson
                    </div>

                    <svg
                      className="mx-1 hidden h-5 w-5 text-blue-100 md:block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      CEO, Xiggit
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-white">
              Join The Internet&apos;s Largest Startup Community
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-500 active:bg-orange-800"
              >
                Join for free now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
