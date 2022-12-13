import Navigation from '@/components/discuss/Navigation';
import Sidebar from '@/components/discuss/Sidebar';
import Link from '@/components/Link';

export default function DiscussPage({ children }: any) {
  return (
    <div className="h-full border-b border-gray-200 bg-gray-100">
      <div className="border-b border-gray-200 bg-white">
        <header className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-5 lg:grid lg:grid-cols-12 lg:gap-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 lg:col-span-2 lg:block">
              <Link href="/discuss">Discuss</Link>
            </h1>
            <div className="lg:col-span-7">
              {/* TODO: discuss search form */}
              {/* <form className="flex w-full rounded-md shadow-sm">
              <label htmlFor="desktop-search-candidate" className="sr-only">
                Search bar
              </label>
              <div className="relative flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="desktop-search-candidate"
                  id="desktop-search-candidate"
                  className="block w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                />
              </div>
              <button className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                Search
              </button>
            </form> */}
            </div>
          </div>
        </header>
      </div>

      <section
        aria-labelledby="products-heading"
        className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:col-span-2 lg:block">
            <Navigation />
          </div>

          <main className="lg:col-span-7">{children}</main>

          <aside className="hidden lg:col-span-3 lg:block">
            <Sidebar />
          </aside>
        </div>
      </section>
    </div>
  );
}
