import Link from 'next/link';

import useUser from '@/hooks/useUser';

import Forbidden from '@/components/Forbidden';
import { Layout, Meta } from '@/components/layout';
import Loading from '@/components/Loading';

const posts = [
  {
    title: 'Playbook To Launch Your Startup',
    slug: 'playbook-to-launch-your-startup',
    sub_text:
      'Learn how to build a minimum viable product. Launch your startup. Grow your business.',
    description:
      "Increase your chances of building a successful startup. \n\nBringing a product or service to market involves a steep learning curve full of trial and errors. With this course, you will leapfrog forward by getting access to a comprehensive roadmap on how to launch a startup. Why do it the hard way? Build on top of what others have learned. We often hear about billion-dollar startup success stories, but little about how they did it. We're here to provide that information. We cover it all — from building your Minimum Viable Product (MVP) to testing your assumptions, reiterating, and finding your product market fit as quickly as possible.",
    description2:
      '<h2>Why you need this course</h2>' +
      '<ul style="list-style-type:circle;margin-left:20px;">' +
      '<li style="margin-bottom:5px;font-size:18px;">A great idea is 1% of the work. Execution is 99%</li>' +
      '<li style="margin-bottom:5px;font-size:18px;">Your idea won\'t likely resonate with the market at first. How do you adjust?</li>' +
      '<li style="margin-bottom:5px;font-size:18px;">There are best practices to follow to increase your success rate; most people don’t know them</li>' +
      '<li style="margin-bottom:5px;font-size:18px;">Why take the long road to success when you can get a nice short cut?</li>' +
      '</ul>',
    href: '/learn/playbook-to-launch-your-startup',
    promo_url: '',
    cover_url: 'https://www.filepicker.io/api/file/zR8yatSISHe9mgiKgvr5',
    category: { name: 'Article' },
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Erica Duigna',
      about:
        'Erica has been an early-stage investor for over a decade and also started and sold her own company in the health & wellness space, Mamatini. Erica developed her understanding of how to get great products to market while Managing Director of the New York City DreamIt accelerator, where she worked closely with some of today’s fastest growing tech startups helping them get off the ground.' +
        'She was also the founding Executive Director of Golden Seeds, an early stage venture capital investment group and founding Executive Director at STAR Angel Network, a venture investment network for athletes and celebrities. In that time she has made and managed investments in more than 50 startups.' +
        'Erica holds an MBA in Finance from Columbia Business School and a BS in Business Economics from UCLA.',
      href: '/learn/course',
      imageUrl: 'https://www.filepicker.io/api/file/zm778gPCTaetfeSrPEpO',
      facebookUrl: '',
      twitterUrl: '',
      linkedinUrl: '',
    },
    faq: {
      0: {
        title: 'Why is this course important?',
        description:
          'Building a business is immensely complex and time-consuming. Most people who attempt to do it make a tremendous amount of mistakes early on, most of which can be avoided with the right guidance. This course strives to help entrepreneurs excel faster by providing a framework that they can use use to launch their business. Ultimately, this course will save entrepreneurs a lot of time and money by giving them the proper lay of the land.',
      },
      1: {
        title: 'What can I expect to learn from this course?',
        description:
          'By taking this course, you will learn the basic framework of how to efficiently prepare, plan, and launch a startup. You don’t need to go it alone and take the long, windy road. Give yourself that extra knowledge base that will allow you to make smart and efficient decisions early on.',
      },
      2: {
        title: 'Are there any prerequisites?',
        description:
          'There are no restrictions to attend this course. Anyone that is interested in having access to this knowledge can attend. Regardless of where you are in the world, you can still attend!',
      },
      curriculum: {
        'The Preparation': [
          {
            Title: 'It all starts with an idea',
            url: '',
          },
          {
            Title: 'Do you need business model?',
            url: '',
          },
          {
            Title:
              'Assessing Market Opportunity and performing competitive analysis',
            url: '',
          },
          {
            Title: 'What are the various legal structures for businesses?',
            url: '',
          },
          {
            Title: 'How to find, structure, and manage your team',
            url: '',
          },
        ],
      },
    },
  },
  {
    title: 'Boost your conversion rates',
    href: '/learn/',
    category: { name: 'Article' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '/learn/course',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sale',
    href: '/learn/course',
    category: { name: 'Video' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '/learn/course',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experiences',
    href: '/learn/course',
    category: { name: 'Case Study' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '/learn/course',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '/learn/course',
    category: { name: 'Video' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '/learn/course',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '/learn/course',
    category: { name: 'Case Study' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '/learn/course',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Boost your conversion rate',
    href: '/learn/course',
    category: { name: 'Article' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '/learn/course',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const HeroContent = () => {
  return (
    <>
      <div className="border-t-2 border-b border-gray-200"></div>
      <div className="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-8 max-w-2xl">
              <h2 className="md:leading-0 mb-6 max-w-2xl font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                Start learning from the world’s leading startup platform.
              </h2>
              <p className="text-base text-2xl text-gray-600">
                Get 15 Courses at $99 each or get all access with Premium at
                $29/month
              </p>
              <Link href="/premium-membership">
                <a className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-sm transition duration-200 hover:bg-orange-500 active:bg-orange-800">
                  Get Premium
                </a>
              </Link>
            </div>
          </div>
          <div className="-mx-4 flex items-center justify-center lg:pl-8">
            <img
              src="/assets/images/learn/banner-image.jpeg"
              alt="Banner Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const CoursesContent = () => (
  <>
    <div className="mx-auto max-w-7xl pb-10 text-center">
      <h2 className="text-3xl">Featured Courses</h2>
    </div>
    <div className="relative px-4 pb-14 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={post.href}>
              <div className="flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <a className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3  text-base text-gray-500">
                        {post.sub_text || post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={post.author.imageUrl}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    {/* Pagination */}
    {/* <nav
      aria-label="Pagination"
      className="max-w-7xl mx-auto pb-20 px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
    >
      <div className="min-w-0 flex-1">
      </div>
      <div className="hidden space-x-2 sm:flex">
        <a
          href="#"
          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600 focus:ring-blue-600 focus:ring-opacity-25"
        >
          1
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600 focus:ring-blue-600 focus:ring-opacity-25"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 h-10 border border-blue-600 ring-1 ring-blue-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600 focus:ring-blue-600 focus:ring-opacity-25"
        >
          3
        </a>
        <span className="inline-flex items-center text-gray-500 px-1.5 h-10">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600 focus:ring-blue-600 focus:ring-opacity-25"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600 focus:ring-blue-600 focus:ring-opacity-25"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600 focus:ring-blue-600 focus:ring-opacity-25"
        >
          10
        </a>
      </div>
      <div className="min-w-0 flex-1 flex justify-end">
      </div>
    </nav> */}
  </>
);

export default function About() {
  const { loading, loggedOut, user, mutate } = useUser();

  if (loading) return <Loading />;
  if (loggedOut) return <Forbidden />;

  return (
    <Layout
      meta={<Meta title="Learning Center - CoFoundersLab" description="" />}
    >
      {HeroContent()}
      {CoursesContent()}
    </Layout>
  );
}
