import React, { useState } from 'react';
import ProfilePicture from '../ProfilePicture';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


function EditProfile({ profile }: any) {
  const [startDate, setStartDate] = useState(new Date());
  const [ProfileImageurl, setProfileImageurl] = useState(null);
  const [ProfileImagefile, setProfileImagefile] = useState(null);
  const ProfileImageChange = (e: any) => {
    let file = e.target.files[0];
    setProfileImagefile(file);
    console.log(file, 'file');
    if (file) {
      let url: any = URL.createObjectURL(file);
      setProfileImageurl(url);
    }
  };

  console.log("ProfileImagefile url", ProfileImageurl);
  console.log("ProfileImagefile", ProfileImagefile)
  return (
    <div>
      <h1 className='text-lg font-bold text-[#4E5D78] mb-7'>Edit Profile</h1>
      <div className="sm:flex sm:items-center sm:space-x-5">
        <div className="relative flex-shrink-0">

          <ProfilePicture
            className="mx-auto h-[180px] w-[180px] overflow-hidden rounded-full "
            profile={{}}
            profileURL={ProfileImageurl}
          />
          <input
            type="file"
            id="ProfileImage"
            name="ProfileImage"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={(e) => {
              ProfileImageChange(e);
            }}
          ></input>
          <label htmlFor="ProfileImage">
            <img
              className="absolute bottom-0 right-0 h-20"
              src={'/assets/images/settings/Upload.svg'}
              style={{ marginBottom: "-15px", right: "-15px" }}
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Full Name</h3>
          <input
            className='border rounded font-medium w-11/12 h-10 mt-2 text-xs pl-2.5'
            placeholder='Saleh Ahmed'
          />
        </div>
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Birthday</h3>
          {/* <input
                    className='border rounded w-11/12 h-10 mt-2 text-xs pl-2.5'
                  /> */}
          <div className='relative'>
            <DatePicker className='border rounded border-[#4E5D7833] w-11/12 h-10 mt-2 text-xs pl-2.5' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            <img src={'/assets/images/settings/Calendar.svg'}
              className="absolute top-5 right-10"
            />
          </div>

        </div>
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Email</h3>
          <input
            className='border rounded w-11/12 font-medium h-10 mt-2 text-xs pl-2.5'
            placeholder='yourmail@gmail.com'
          />

        </div>
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Bio</h3>
          <input
            className='border rounded font-medium w-11/12 h-10 mt-2 text-xs pl-2.5'
            placeholder='UI Designer'
          />
        </div>
        {/* <div className="mt-2.5">
                  <h3 className='text-base text-[#4E5D78] font-medium'>Phone Number</h3>
                  <div className='relative'>
                    <input className='border rounded w-11/12 h-10 mt-2 text-xs pl-2.5' />
                    <Menu as="div" className="absolute left-0 inline-block text-left" style={{ top: "9px" }}>
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md border  border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                          {selectedCode}
                          <img src={'/assets/images/settings/DropDownIcon.svg'}
                            className="ml-3 mt-1.5"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute overflow-scroll left-0 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1 h-80 overflow-scroll">
                            {CountryCode.map((post) => {
                              return (
                                <>
                                  <Menu.Item onClick={(e) => handleCode(e)}>
                                    {({ active }) => (
                                      <a
                                        className={classNames(
                                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                          'block px-4 py-2 text-sm'
                                        )}
                                      >
                                        +{post.code}
                                      </a>
                                    )}
                                  </Menu.Item>
                                </>
                              )
                            })}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                </div> */}
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Website</h3>
          <input
            className='border rounded font-medium w-11/12 h-10 mt-2 text-xs pl-2.5 '
            placeholder='uihut.com' />
        </div>
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Gender</h3>
          {/* <input className='border rounded w-11/12 h-10 mt-2 text-xs pl-2.5' /> */}
          <div className='flex items-center justify-between w-11/12 border rounded w-11/12 h-10 mt-2 text-xs pl-2.5'>
            <div className="flex">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 borderRadio bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
              <label className="ml-2 text-xs text-[#4E5D78] font-medium text-gray-900 dark:text-gray-300">Male</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-white borderRadio border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
              <label className="ml-2 text-xs text-[#4E5D78] font-medium text-gray-900 dark:text-gray-300">Female</label>
            </div>
            <div className="flex items-center pr-3">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-white borderRadio border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
              <label className="ml-2 text-xs text-[#4E5D78] font-medium text-gray-900 dark:text-gray-300">Custom</label>
            </div>
          </div>
        </div>
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Location</h3>
          <input
            className='border rounded w-11/12 font-medium h-10 mt-2 text-xs pl-2.5'
            placeholder='Sylhet, Bangladesh' />
        </div>
      </div>
      <h1 className='text-lg font-bold text-[#4E5D78] pt-20'>Social link</h1>
      <div className="grid grid-cols-2 gap-2 pb-16">
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>Twitter</h3>
          <input
            className='border rounded font-medium w-11/12 h-10 mt-2 text-xs pl-2.5'
            placeholder='profile.salehahmed' />
        </div>
        <div className="mt-2.5">
          <h3 className='text-base text-[#4E5D78] font-medium'>LinkedIn</h3>
          <input
            className='border rounded font-medium w-11/12 h-10 mt-2 text-xs pl-2.5'
            placeholder='profile.salehahmed' />
        </div>
      </div>
      <div className='flex justify-end items-center pr-8'>
        <span className='text-[#4E5D7899] font-medium text-base mr-5'>Cancel</span>
        <button className='rounded-lg bg-[#377DFF]  text-white text-base font-medium py-2 px-6'>Save</button>
      </div>
    </div>
  )
}

export default EditProfile