import React, { useState } from 'react'

function Notifications() {
  const [NotisFlags, setNotisFlags] = useState({
    Like: true,
    Comment: true,
    Mention: false,
    Post: true,
    Share: true,
    Follow: false,
    Event: true
  })
  
  const handleFlagChange = (e: any) => {
    let name: any = e.target.name;
    let obj = { ...NotisFlags };
    obj[name] = !(obj[name]);
    setNotisFlags(obj);
  }
  return (
    < div >
      <h1 className='text-lg font-bold text-[#4E5D78] mb-7'>Notifications</h1>
      <div className="">
        <h3 className='text-base text-[#4E5D78] font-medium'>What Notifications You Receive</h3>
        <div className="" style={{ width: "30%" }}>
          <div className="flex justify-between mt-5">
            <div className='flex'>
              <img src={'/assets/images/settings/LikeIcon.svg'}
                className="mr-2" style={{ height: "20px", marginTop: "2px" }}
              />
              <span className="font-medium text-[#4E5D78] text-sm" style={{ lineHeight: "22px" }}>Like</span>
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" name="Like" onChange={(e) => handleFlagChange(e)} checked={NotisFlags.Like} />
              <div className="w-11 h-6 rounded-full peer dark:bg-white-700 border peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex justify-between mt-3">
            <div className='flex'>
              <img src={'/assets/images/settings/CommentIcon.svg'}
                className="mr-2" style={{ height: "20px", marginTop: "2px" }}
              />
              <span className="font-medium text-[#4E5D78] text-sm" style={{ lineHeight: "22px" }}>Comment</span>
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" name="Comment" onChange={(e) => handleFlagChange(e)} checked={NotisFlags.Comment} />
              <div className="w-11 h-6 rounded-full peer dark:bg-white-700 border peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex justify-between mt-3">
            <div className='flex'>
              <img src={'/assets/images/settings/MentionIcon.svg'}
                className="mr-2" style={{ height: "20px", marginTop: "2px" }}
              />
              <span className="font-medium text-[#4E5D78] text-sm" style={{ lineHeight: "22px" }}>Mention</span>
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" name="Mention" onChange={(e) => handleFlagChange(e)} checked={NotisFlags.Mention} />
              <div className="w-11 h-6 rounded-full peer dark:bg-white-700 border peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex justify-between mt-3">
            <div className='flex'>
              <img src={'/assets/images/settings/PostIcon.svg'}
                className="mr-2" style={{ height: "20px", marginTop: "2px" }}
              />
              <span className="font-medium text-[#4E5D78] text-sm" style={{ lineHeight: "22px" }}>Post</span>
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" name="Post" onChange={(e) => handleFlagChange(e)} checked={NotisFlags.Post} />
              <div className="w-11 h-6 rounded-full peer dark:bg-white-700 border peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex justify-between mt-3">
            <div className='flex'>
              <img src={'/assets/images/settings/ShareIcon.svg'}
                className="mr-2" style={{ height: "20px", marginTop: "2px" }}
              />
              <span className="font-medium text-[#4E5D78] text-sm" style={{ lineHeight: "22px" }}>Share</span>
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" name="Share" onChange={(e) => handleFlagChange(e)} checked={NotisFlags.Share} />
              <div className="w-11 h-6 rounded-full peer dark:bg-white-700 border peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex justify-between mt-3">
            <div className='flex'>
              <img src={'/assets/images/settings/FollowIcon.svg'}
                className="mr-2" style={{ height: "20px", marginTop: "2px" }}
              />
              <span className="font-medium text-[#4E5D78] text-sm" style={{ lineHeight: "22px" }}>Follow</span>
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" name="Follow" onChange={(e) => handleFlagChange(e)} checked={NotisFlags.Follow} />
              <div className="w-11 h-6 rounded-full peer dark:bg-white-700 border peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex justify-between mt-3">
            <div className='flex'>
              <img src={'/assets/images/settings/EventIcon.svg'}
                className="mr-2" style={{ height: "20px", marginTop: "2px" }}
              />
              <span className="font-medium text-[#4E5D78] text-sm" style={{ lineHeight: "22px" }}>Event</span>
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" name="Event" onChange={(e) => handleFlagChange(e)} checked={NotisFlags.Event} />
              <div className="w-11 h-6 rounded-full peer dark:bg-white-700 border peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Notifications