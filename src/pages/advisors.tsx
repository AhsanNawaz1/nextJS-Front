import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useUser from '@/hooks/useUser';

import { Header, Layout, Meta } from '@/components/layout';

import { API_URL } from '@/config';
import { parseCookies } from '@/helpers';

const Advisors: NextPage = ({ advisors, count, token }: any) => {
  const { loading, loggedOut, user } = useUser();
  const router = useRouter();

  return (
    <Layout
      meta={
        <Meta
          title="Advisors - CoFoundersLab"
          description="Advisors on CoFoundersLab, the leading entrepreneurial network where like-minded entrepreneurs connect, meet and collaborate."
        />
      }
      header={<Header sticky={true} />}
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-14 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-px text-sm font-semibold uppercase tracking-wider text-white">
              Advisors
            </h1>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              All Advisors
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Get connected with the advisors.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-14 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-5">
            {advisors.map((advisor: any, index: number) => {
              if (advisor?.slug == '' || typeof advisor.user == 'undefined') {
                return;
              }
              return (
                <div
                  key={'advisor_' + (index + 1)}
                  className="cursor-pointer rounded-md border py-2 px-1 hover:border-blue-600"
                  onClick={() => {
                    router.push('/advisor/' + advisor?.slug);
                  }}
                >
                  <div className="flex flex-row">
                    <div className="p-2">
                      <div className="h-[60px] w-[60px] overflow-hidden rounded-full border border-gray-400">
                        <Image
                          src={
                            advisor?.profilePicture?.url ||
                            '/assets/images/noavatar.png'
                          }
                          height={60}
                          width={60}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-2">
                      <div className="text-lg font-bold">
                        {advisor?.firstName} {advisor?.lastName}
                      </div>
                      <div className="text-gray-500">{advisor?.title}</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-2 text-gray-900">
                      Offering Mentorship in:
                      <br />
                      <span className="text-gray-600">{advisor?.topics}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Advisors;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req);
  const strapiRes = await fetch(`${API_URL}/advisor-profiles?_limit=10`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const advisors = await strapiRes.json();
  const res = await fetch(`${API_URL}/advisor-profiles/count`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const count = await res.json();
  if (strapiRes.ok) {
    return {
      props: {
        advisors,
        count,
        token,
      },
    };
  }

  return {
    props: {
      advisors: [],
      count: 0,
      token,
    },
  };
};
