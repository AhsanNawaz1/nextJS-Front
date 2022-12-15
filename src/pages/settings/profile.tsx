import { GetServerSideProps } from 'next';

import Forbidden from '@/components/Forbidden';
import { Layout, Meta } from '@/components/layout';
import SettingsPage from '@/components/settings/Page';
import ProfileBannerForm from '@/components/settings/ProfileBannerForm';
import ProfileDetails from '@/components/settings/ProfileDetails';
import ProfileInfo from '@/components/settings/ProfileInfo';
import ProfilePictureForm from '@/components/settings/ProfilePictureForm';
import ProfileSettings from '@/components/settings/ProfileSettings';
import ProfileSummary from '@/components/settings/ProfileSummary';
import LeftSideBar from '@/components/layout/left-sidebar';
import { SlArrowRight } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Menu, Transition } from '@headlessui/react';
import { Listbox } from '@headlessui/react';
import moment from 'moment';


import { API_URL } from '@/config/index';
import { classNames, parseCookies } from '@/helpers/index';
import profile from '../api/undock/profile';
import { Fragment, useEffect, useState } from 'react';
import ProfilePicture from '../../components/ProfilePicture';
import { CheckIcon } from '@heroicons/react/solid';
import useSWR, { SWRConfig } from 'swr';
import { apiFetcher } from '@/helpers/fetchers';
import EditProfile from '@/components/settings/EditProfile';
import Language from '@/components/settings/Language';
import Notifications from '../../components/settings/Notifications';
import Privacy from '@/components/settings/Privacy';
import ActivityLog from '@/components/settings/ActivityLog';
import ViewSharing from '@/components/settings/ViewSharing';


const Tabbar = ({ profileUser }: any) => {
  const [active, setActive] = useState("#first");


  useEffect(() => {
    let tabsContainer: any = document.querySelector("#tabs");

    let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

    console.log(tabTogglers);

    tabTogglers.forEach(function (toggler: any) {
      toggler.addEventListener("click", function (e: any) {
        e.preventDefault();

        let tabName: any = this.getAttribute("href");

        setActive(tabName)


        let tabContents: any = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].parentElement.classList.remove("font-bold", "-mb-px", "bg-white"); tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");

        }
        e.target.parentElement.classList.add("font-bold", "-mb-px", "bg-white");
      });
    });
  }, [])

  const TabNames = [
    {
      name: "Edit Profile",
      img: '/assets/images/settings/UserIcon.svg',
      id: "#first"
    },
    {
      name: "Language",
      img: '/assets/images/settings/Language.svg',
      id: "#second"
    },
    {
      name: 'Blocking',
      img: '/assets/images/settings/BlockIcon.svg',
      id: "#third"
    },
    {
      name: "Notification",
      img: '/assets/images/settings/Notification.svg',
      id: "#fourth"
    },
    {
      name: "Password & Security",
      img: '/assets/images/settings/PrivacyIcon.svg',
      id: "#fifth"
    },
    {
      name: "Activity Log",
      img: '/assets/images/settings/ActivityIcon.svg',
      id: "#sixth"
    },
    {
      name: "Viewing & Sharing",
      img: '/assets/images/settings/ViewIcon.svg',
      id: "#seventh"
    }
  ]


  return (
    <>

      <div className="flex mx-auto">
        <ul id="tabs" className="pt-2 pl-6 inline-block w-4/12 TabbarBorder px-2.5" style={{ height: "100ch" }}>
          {TabNames.map((i) => {
            return (
              <>
                <li className={active == i.id ? "pl-0 font-bold -mb-px tabBorder bg-white px-4 text-[#4E5D78] py-4 -mb-px" : " pl-0 tabBorder bg-white px-4 text-[#4E5D78] font-normal py-4 -mb-px"}>
                  <a id="default-tab" href={i.id} className='flex text-sm'>
                    <img src={i.img}
                      className="mr-3"
                    />
                    {i.name} {active == i.id ? <img src={'/assets/images/settings/Arrow.svg'} className='mt-0.5 ml-2.5' /> : ""}
                  </a>
                </li>
              </>
            )
          })}
        </ul>


        <div id="tab-contents" className="w-full">
          <div id="first" className="p-4 pl-8">
            <EditProfile profile={profileUser} />
          </div>
          <div id="second" className="hidden p-4 pl-8">
            <Language />
          </div>
          <div id="third" className="hidden p-4 pl-8 ">
            This is Blocking
          </div>
          <div id="fourth" className="hidden p-4 pl-8 ">
            <Notifications />
          </div>
          <div id="fifth" className="hidden p-4 pl-8">
            <Privacy />
          </div>
          <div id="sixth" className="hidden p-4 pl-8">
            <ActivityLog />
          </div>
          <div id="seventh" className="hidden p-4 pl-8">
            <ViewSharing />
          </div>
        </div>
      </div >
    </>
  )
}


export default function MyProfile({ user, token, onboardingData }: any) {
  const { data: prof } = useSWR(`/profiles/${user.profile.slug}`, apiFetcher);

  if (!user || user?.error) return <Forbidden />;
  return (
    <>
      <Layout
        meta={
          <Meta
            title="Edit profile - CoFoundersLab"
            description="Edit profile on CoFoundersLab, the leading entrepreneurial network where like-minded entrepreneurs connect, meet and collaborate."
          />
        }
      >
        <div className='flex'>
          <LeftSideBar />
          <div className='w-full' style={{ border: "16px solid white" }}>
            <section className='p-10 w-full flex justify-center '>
              <div className="overflow-hidden rounded-xl bg-white ml-5  py-4 shadow" style={{ width: "95%" }}>
                <div className="px-0 pb-0">
                  <div className="border-0 border-slate-100 sm:col-span-6">
                    <Tabbar profile={prof} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>




        {/* <SettingsPage user={user}>

          <ProfilePictureForm user={user} token={token} />
          <ProfileBannerForm user={user} token={token} />
          <ProfileInfo user={user} />
          <ProfileSummary user={user} />
          <ProfileDetails user={user} onboardingData={onboardingData} />
          <ProfileSettings user={user} />
        </SettingsPage> */}
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req);
  const [userRes, onboardingRes] = await Promise.all([
    fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    fetch(`${API_URL}/onboarding`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);
  const [user, onboardingData] = await Promise.all([
    userRes.json(),
    onboardingRes.json(),
  ]);
  if (!user?.error && !onboardingData?.error) {
    return {
      props: {
        user,
        token: token ? token : '',
        onboardingData,
      },
    };
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};

