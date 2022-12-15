import { classNames } from '@/helpers';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import React, { Fragment, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ActionCategory = [
  {
    id: 1,
    category: "All"
  },
  {
    id: 2,
    category: "Actions"
  },
  {
    id: 3,
    category: 'Posted'
  },
  {
    id: 4,
    category: 'Search'
  }
]

function ActivityLog() {

  const [ActivityStartDate, setActivityStartDate] = useState(new Date());
  const [selecting, setSelecting] = useState(ActionCategory[0]);



  return (
    <div>
      <h1 className='text-lg font-bold text-[#4E5D78] mb-5'>Activity Log</h1>
      <div className='flex'>
        <div className='flex mr-2'>
          <p className='font-medium text-base text-[#4E5D78]'>Date:</p>
          <div className='relative'>
            <DatePicker className='border-0 cursor-pointer text-sm text-[#4E5D78] ml-2 p-0 datepick font-normal' selected={ActivityStartDate} onChange={(date: Date) => setActivityStartDate(date)} />
            <img src={'/assets/images/settings/Calendar.svg'}
              className="absolute top-1 right-12"
            />
          </div>
        </div>
        <div className='flex'>
          <p className='font-medium text-base text-[#4E5D78]'>Activity:</p>
          <Listbox value={selecting} onChange={setSelecting}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative w-full font-normal text-sm text-[#4E5D78] shadow-none	 cursor-default bg-white p-0 ml-0 text-left focus:border-none focus:outline-none focus:ring-1 sm:text-sm">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">{selecting?.category}</span>
                      <img src={'/assets/images/settings/DropActivityIcon.svg'}
                        className="ml-4"
                      />
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 w-40 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {ActionCategory?.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'text-white bg-indigo-600' : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                  {person.category}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>
      <div className='flex mt-4'>
        <img src={"/assets/images/settings/Dummy.svg"} />
        <div className='ml-4'>
          <p className='font-normal text-sm text-[#4E5D78]'>You searched Clipbox</p>
          <p className='font-bold	 text-sm text-[#4E5D78]'>“UI HUT”</p>
          <p className='font-normal text-sm text-[#4E5D78]'>Only me • Hidden from Profile</p>
        </div>

      </div>
      <div className='flex mt-4'>
        <img src={"/assets/images/settings/Dummy2.svg"} />
        <div className='ml-4'>
          <p className='font-bold	 text-sm text-[#4E5D78]'>You Reacted to Pabel’s post</p>
          <p className='font-normal text-sm text-[#4E5D78]'>Public</p>
        </div>

      </div>
    </div>
  )
}

export default ActivityLog;