import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import DiscussionCard from '@/components/discuss/Card';
import DiscussPage from '@/components/discuss/Page';
import { Layout, Meta } from '@/components/layout';
import Loading from '@/components/Loading';

import { API_URL } from '@/config/index';
import { apiFetcher } from '@/helpers/fetchers';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

function Discuss({ slug }: any) {
  const { data } = useSWR(`/discussions/${slug}`, apiFetcher);
  return (
    <Layout
      meta={
        <Meta
          title={`${data?.title} - CoFoundersLab`}
          description={`Discussion on CoFoundersLab - ${data?.body.substring(
            125
          )}...`}
        />
      }
    >
      <DiscussPage>
        <DiscussionCard data={data} loadReplies={true} allowReply={true} />
      </DiscussPage>
    </Layout>
  );
}

export default function PageContainer({ fallback }: any) {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      <Discuss slug={slug} />
    </SWRConfig>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/discussions?_limit=1`);
  const discussions: any = await res.json();

  const slugs = discussions.map((discussion: any) => discussion.slug);
  const paths = slugs.map((slug: any) => ({ params: { slug } }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  let fallback: any = {};
  try {
    fallback[`/discussions/${slug}`] = await apiFetcher(`/discussions/${slug}`);

    fallback[`/discussion-topics?trending=true`] = await apiFetcher(
      `/discussion-topics?trending=true`
    );

    return {
      props: {
        fallback: fallback,
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        fallback: {},
      },
      revalidate: 60,
      notFound: true,
    };
  }
};
