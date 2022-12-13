import React from 'react'

function ViewSharing() {
  return (
    <div>
      <h1 className='text-lg font-bold text-[#4E5D78] mb-5'>Viewing and Sharing</h1>
      <div>
        <h3 className='text-base text-[#4E5D78] font-bold'>Who can see your post?</h3>
        <div className='mt-4 mb-5'>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>Everyone</span>
          </div>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              Followers
            </span>
          </div>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              Only me
            </span>
          </div>
        </div>
        <h3 className='text-base text-[#4E5D78] font-bold'>Who can see your profile?</h3>
        <div className='mt-4 mb-5'>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>Everyone</span>
          </div>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              Followers
            </span>
          </div>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              Only me
            </span>
          </div>
        </div>
        <h3 className='text-base text-[#4E5D78] font-bold'>Allow others to share your posts to their Timeline?</h3>
        <div className='mt-4 mb-5'>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              On
            </span>
          </div>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              Off
            </span>
          </div>
        </div>
        <h3 className='text-base text-[#4E5D78] font-bold'>Who can Follow you?</h3>
        <div className='mt-4 mb-5'>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              Everyone
            </span>
          </div>
          <div className='mt-1.5'>
            <input type="radio" name="radio" className='customRadio borderRadio' />
            <span className='font-medium text-base	text-[#4E5D78] ml-2'>
              Off
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewSharing