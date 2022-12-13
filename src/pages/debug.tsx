import { Meta, Layout } from '@/components/layout';

export default function Debug() {
  return (
    <Layout
      meta={
        <Meta
          title="Debug - CoFoundersLab"
          description="Debug CoFoundersLab, the leading entrepreneurial network where like-minded entrepreneurs connect, meet and collaborate."
        />
      }
    >
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="inline-block px-3 py-px mb-2 text-sm font-semibold tracking-wider text-white uppercase rounded-full bg-blue-600">
              About
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              CoFoundersLab
            </p>
          </div>
          <div className="relative text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500">
              Founded in 2011, CoFoundersLab has been dedicated to assisting
              entrepreneurial-minded individuals in gaining access to the tools
              they require in order to succeed. Since then, CoFoundersLab has
              been the world&rsquo;s largest network of entrepreneurs using
              technology and AI algorithms to make connections in the business
              world seamlessly and efficiently.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <button
              type="button"
              onClick={() => {
                throw new Error('Sentry Frontend Error');
              }}
              className="px-5 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Sentry Frontend Error
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
