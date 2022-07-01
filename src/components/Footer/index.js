import React from "react";
import Image from "next/image";
import { Assets } from "../..";

export const Footer = () => {
  const Medsos = (props) => {
    return (
      <div className="relative">
        <a href={props.href} target="_blank" rel="noreferrer">
          <Image src={props.src} width={32} height={32} alt={props.alt} />
        </a>
      </div>
    );
  };
  return (
    <div className="h-full w-full py-5 items-center relative">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-semibold text-[#e0004d]">MediCare</h2>
          <div className="flex flex-col">
            <h2 className="text-md font-semibold">Hubungi Kami</h2>
            <p>Jl. Seroja III F.10 RT 009 RW 005 Cilandak Timur</p>
            <p>Phone : +6281295347194</p>
            <p>Email : hanifakbri7@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-3 relative">
          <h2 className="text-lg font-semibold text-[#e0004d]">Community</h2>
          <div className="flex flex-row space-x-4">
            <Medsos
              href="https://www.instagram.com/hanifakbari/"
              src={Assets.Instagram}
            />
            <Medsos href="# " src={Assets.Twitter} />
            <Medsos href="# " src={Assets.Tiktok} />
            <Medsos href="# " src={Assets.Telegram} />
            <Medsos href="# " src={Assets.Youtube} />
            <Medsos href="# " src={Assets.Facebook} />
          </div>
        </div>
      </div>
      <div className="w-full items-center flex justify-center mt-10">
        ©MediCare, 2022. All rights reserved
      </div>
    </div>
  );
};
