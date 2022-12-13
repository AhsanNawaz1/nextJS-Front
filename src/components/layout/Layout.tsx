import { ReactNode } from 'react';

import useUser from '@/hooks/useUser';

import { classNames } from '@/helpers/index';

import Footer from './Footer';
import Header from './Header';
import LeftSideBar from './left-sidebar';

interface ILayoutProps {
  meta?: ReactNode;
  headerBanner?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  children?: ReactNode;
  className?: string;
  showLeftSidebar?: boolean;
}

export default function Layout(props: ILayoutProps) {
  const { loggedOut } = useUser();
  return (
    <div
      className={classNames(
        'flex h-full w-full flex-col bg-gray-100 antialiased',
        props.className
      )}
    >
      {props.meta}
      {/* {typeof props.headerBanner !== 'undefined' ? (
        props.headerBanner
      ) : (
        <HeaderBanner />
      )} */}
      {typeof props.header !== 'undefined' ? props.header : <Header />}

      {typeof props.sidebar !== 'undefined' ? (
        <div className="">{props.children}</div>
      ) : (
        <div
          className={`mx-auto flex w-full ${!!props.showLeftSidebar ? 'justify-between' : 'justify-between'
            }  overflow-hidden bg-gray-100 xl:w-[95vw] 2xl:w-[60vw]`}
          style={{ width: "100%" }}
        >
          {!loggedOut && !!props.showLeftSidebar && <LeftSideBar />}
          <div className=" md:w-[100%] lg:pl-0 xl:w-full">
            {props.children}
          </div>
        </div>
      )}

      {typeof props.footer !== 'undefined' ? props.footer : <Footer />}
    </div>
  );
}
