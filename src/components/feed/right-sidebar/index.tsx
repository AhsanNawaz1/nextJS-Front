import user from '@/public/android-chrome-512x512.png';

const RigthSideBar = () => {
  return (
    <div className="mt-10 mr-5 h-full w-2/6  xl:mr-10">
      {/* You Might Like */}
      <div className="rounded-xl bg-white py-3">
        <div className="flex justify-between border-b-2 px-6 pb-3">
          <span className="font-bold">You Might Like</span>
          <small>See All</small>
        </div>

        <div className="flex gap-5 p-6">
          <img
            className="h-14 w-14 rounded-full"
            src={user.src}
            alt="profile"
          />
          <div>
            <span className="block">Radovan SkillArena</span>
            <small className="text-gray-500">Founder & CEO at Trophy</small>
          </div>
        </div>

        <div className="flex gap-5 px-6 pb-3">
          <button className="w-full rounded-md border border-gray-500 py-1 px-4  text-gray-500 xl:py-2 xl:px-7">
            Ignore
          </button>
          <button className="w-full rounded-md bg-blue-600 py-1 px-4  text-white xl:py-2 xl:px-7">
            Connect
          </button>
        </div>
      </div>

      {/* Events */}
      <div className="mt-5 rounded-xl bg-white py-3">
        <div className="flex justify-between border-b-2 px-6 pb-3">
          <span className="font-bold">Upcoming Events</span>
          <small>See All</small>
        </div>

        <div className="p-6">
          <div className="flex gap-5 rounded-lg bg-gray-100 p-3">
            <img
              className="h-14 w-14 rounded-full"
              src={user.src}
              alt="profile"
            />
            <div>
              <span className="block">Weekly Live QA</span>
              <small className="text-gray-500">
                The graduation ceremony is almost sometimes called...
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RigthSideBar;
