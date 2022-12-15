import React, { useState } from "react";
import moment from "moment";
import { FiMonitor, FiTablet } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai"


function Privacy() {
  const [seeAll, setSeeAll] = useState(false);
  const lastActivityArr = [
    {
      device: "Windows PC",
      location: "Washington, DC",
      time: new Date(),
      app: "Chrome"
    },
    {
      device: "Windows Laptop",
      location: "Washington, DC",
      time: new Date(),
      app: "Chrome"
    },
    {
      device: "Huawei",
      location: "Washington, DC",
      time: new Date(),
      app: "MeetMax App"
    },
    {
      device: "Samsung tab",
      location: "Washington, DC",
      time: new Date(),
      app: "Chrome"
    }
  ]

  return (
    <div>
      <h1 className="text-lg font-bold text-[#4E5D78] mb-5">Where you are logged in</h1>
      <div className="grid grid-cols-2 gap-3">
        {seeAll ?
          lastActivityArr.map((post: any) => {
            return (
              <>
                <div className="w-full">
                  <div>
                    <section className="block p-2 pt-4 pb-4   bg-white rounded-lg border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div>
                          {post?.device?.toLowerCase().includes("windows") ? <FiMonitor className="h-10 w-12 mt-0.5 mr-2" style={{ color: "#377DFF" }} /> :
                            post?.device?.toLowerCase().includes("tab") ? <FiTablet className="h-10 w-12 mt-0.5 mr-2" style={{ color: "#38CB89" }} /> :
                              <AiOutlineMobile className="h-10 w-12 mt-0.5 mr-2" style={{ color: "#38CB89" }} />}
                        </div>
                        <div>
                          <h5 className="text-base text-[#4E5D78] font-medium">{post?.device} • {post?.location}</h5>
                          <span className="font-normal text-sm text-[#4E5D78]">{post?.app}</span>
                          <span className="font-normal text-sm text-[#4E5D78] ml-2">• {moment(post?.time).fromNow()}</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </>
            )
          }) :
          lastActivityArr.slice(0, 2).map((post: any) => {
            return (
              <>
                <div className="w-full">
                  <div>
                    <section className="block p-2 pt-4 pb-4  bg-white rounded-lg border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div>
                          {post?.device?.toLowerCase().includes("windows") ? <FiMonitor className="h-10 w-12 mt-0.5 mr-2" style={{ color: "#377DFF" }} /> :
                            post?.devices?.toLowerCase().includes("tab") ? <FiTablet className="h-10 w-12 mt-0.5 mr-2" style={{ color: "#38CB89" }} /> :
                              <AiOutlineMobile className="h-10 w-12 mt-0.5 mr-2" style={{ color: "#38CB89" }} />}
                        </div>
                        <div>
                          <h5 className="text-base text-[#4E5D78] font-medium">{post?.device} • {post?.location}</h5>
                          <span className="font-normal text-sm text-[#4E5D78]">{post?.app}</span>
                          <span className="font-normal text-sm text-[#4E5D78] ml-2">• {moment(post?.time).fromNow()}</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </>
            )
          })
        }
        <span className="text-sm cursor-pointer text-blue-600 font-medium" onClick={() => setSeeAll(!seeAll)}>{seeAll ? "See Less" : "See All"}</span>
      </div>
      <div className="w-4/6">
        <h1 className="text-lg font-bold text-[#4E5D78] mt-10 mb-6">Change Password</h1>
        <h3 className="text-base text-[#4E5D78] font-semibold">Current Password</h3>
        <input
          className="border rounded h-10 w-full mt-2 text-xs pl-2.5"
          placeholder="Saleh Ahmed"
        />
        <h3 className="text-base text-[#4E5D78] font-semibold mt-7">New Password</h3>
        <input
          className="border rounded h-10 w-full mt-2 text-xs pl-2.5"
          placeholder="Saleh Ahmed"
        />
        <h3 className="text-base text-[#4E5D78] font-semibold mt-7">Re-type Password</h3>
        <input
          className="border rounded h-10 w-full mt-2 text-xs pl-2.5"
          placeholder="Saleh Ahmed"
        />

        <p className="text-sm cursor-pointer text-blue-600 font-medium mt-2">Forgot Password?</p>
        <button className="rounded-lg bg-[#377DFF] flex m-0 ml-auto text-white text-base font-medium py-2 px-6">Save</button>
      </div>
      <div className="w-4/6">
        <h1 className="text-lg font-bold text-[#4E5D78] mt-10 mb-6">Two factor authentication</h1>
        <h3 className="text-base text-[#4E5D78] font-semibold">Text Message (SMS)</h3>
        <input
          className="border rounded h-10 w-full mt-2 text-xs pl-2.5"
          placeholder="Saleh Ahmed"
        />
        <button className="rounded-lg bg-[#377DFF] flex m-0 ml-auto text-white text-base font-medium py-2 px-6 mt-6">Verify</button>
      </div>
    </div>
  )
}

export default Privacy