import React from "react";

export const Footer = () => {
  return (
    <div className="h-full w-full py-5 items-center">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-semibold text-[#e0004d]">MediCare</h2>
          <div className="flex flex-col">
            <h2 className="text-md font-semibold">Hubungi Kami</h2>
            <p>Jl. Seroja III F.10 RT 009 RW 005 Cilandak Timur</p>
            <p>Phone : +6281295347194</p>
            <p>Email : hanifakbri7@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#e0004d]">Community</h2>
        </div>
      </div>
      <div className="w-full items-center flex justify-center mt-10">
        ©MediCare, 2022. All rights reserved
      </div>
    </div>
  );
};
