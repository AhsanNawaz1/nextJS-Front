import React from 'react'

function Language() {
  return (
    <div className=''>
      <h1 className='text-lg font-bold text-[#4E5D78] mb-5'>Language</h1>
      <h3 className='text-base text-[#4E5D78] font-medium'>Show Meetmax in this language.</h3>
      <select id="countries" className="bg-white-100 border border-gray-300 text-gray-400 text-xs text-[#4E5D7899] font-medium	rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 mt-4 p-2.5 ">
        <option selected>English (US)</option>
        <option value="US">English (UK)</option>
        <option value="CA">French</option>
        <option value="FR">Spanish</option>
        <option value="DE">German</option>
      </select>
      <div className='mt-4'>
        <span className='text-[#4E5D7899] font-medium text-base mr-3'>Cancel</span>
        <button className='rounded-lg bg-[#377DFF]  text-white text-base font-medium py-2 px-6'>Save</button>
      </div>
    </div>
  )
}

export default Language