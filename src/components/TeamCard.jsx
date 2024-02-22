import Image from "next/image";
import React from "react";

function TeamCard({ imgSrc, name, role }) {
  return (
    <div className="w-full shadow rounded-xl overflow-hidden">
      <div className="h-80 w-full bg-gray-100   ">
        <Image
          src={`/images/team/${imgSrc}`}
          alt="img"
          height={600}
          width={400}
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute translate-x-[-50%] left-[50%] bottom-3 h-12 bg-white rounded-3xl z-10">
          <div className="flex items-center justify-center h-full [&>*]:h-5 [&>*:nth-child(3)]:border-transparent [&>*]:border-r-2 ">
            <a href={`https://${facebook}`} target="_blank">
              <button className="w-12 h-full flex justify-center items-center text-gray-600 hover:text-green-600">
                <BiLogoFacebook />
              </button>
            </a>
            <a href={`https://${twitter}`} target="_blank">
              <button className="w-12 h-full flex justify-center items-center text-gray-600 hover:text-green-600">
                <BiLogoTwitter />
              </button>
            </a>
            <a href={`https://${instagram}`} target="_blank">
              <button className="w-12 h-full flex justify-center items-center text-gray-600 hover:text-green-600">
                <BiLogoInstagram />
              </button>
            </a>
          </div>
        </div> */}
      </div>
      <div className="pt-3 text-center font-semibold text-[20px]">{name}</div>
        <h1 className=" text-center font-light text-[16px]">{role}</h1>
    </div>
  );
}

export default TeamCard;
