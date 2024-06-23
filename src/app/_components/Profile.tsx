import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/S__14155791.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-5 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Phimphot Nualnim</h1>
        <p className="text-base">Computer Engineer</p>
      </div>

      <div className="py-10 text-center ">" I am Ironman "</div>
      <div className="p-6 mx-1 xl:mx-4 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 21
        </p>
        <p>
          <b>Status:</b> Have sweety
        </p>
        <p>
          <b>Location:</b> Thailand
        </p>
        <p>
          <b>Religion:</b> Buddhism
        </p>
        <p>
          <b>Birth Date:</b> 2003-06-06
        </p>
        <p>
          <b>Graduated 3rd year standing ROTCS Curriculum by Reserve Commander Unit</b>
        </p>
      </div>
    </div>
  );
};

export default Profile;
