import Image from "next/image";
import React from "react";

const getMyProfile = async () => {
  const res = await fetch("https://api.github.com/users/ErGovindthakur", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch about data...");
  }

  const data = await res.json();
  return data;
};
const AboutPage = async () => {
  const profileData = await getMyProfile();
  // console.log(profileData)
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-60 px-4 py-3 rounded-md bg-gray-700 text-white">
        <div className="w-full">
          <Image
            src={profileData.avatar_url}
            alt={profileData.login}
            className="object-contain w-full rounded-md"
            height={50}
            width={100}
          />
        </div>
        <div>
          <h3>Name -: {profileData.name}</h3>
          <p>Country -: {profileData.location}</p>
          <p>Bio -: {profileData.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
