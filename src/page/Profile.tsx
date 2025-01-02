import { logoImg, myResume } from "../data/data";
import Social from "./Social";
const Profile: React.FC = () => {
  return (
    <div className="w-full h-screen bg-slate-300 grid place-items-center overflow-x-hidden select-none">
      <div className="w-full md:w-2/3 bg-gray-700 md:p-10 py-10 px-6 rounded bg-opacity-70">
        <div className="grid place-items-center p-4">
          <img
            src={logoImg}
            alt="profile"
            className="rounded-full md:w-56 w-44 transition hover:scale-110 hover:border-4 hover:border-green-600 cursor-pointer"
          />
        </div>
        <div className=" p-4">
          <div className="md:w-1/2 mx-auto text-center">
            <h2 className="uppercase text-white font-bold ">mehran mokhtari</h2>
            <h6 className="capitalize text-gray-400 font-bold">
              Front-end develpoer
            </h6>
          </div>
          <div className="flex flex-row items-center justify-between text-2xl w-full xl:w-1/2 mx-auto p-4 text-white">
            <Social />
          </div>
          <div className="grid place-items-center mt-4   ">
            <a
              href={myResume}
              download
              className="px-6 py-3 border border-gray-400 rounded capitalize text-white hover:border-gray-900 transition active:scale-95 hover:scale-105"
            >
              my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
