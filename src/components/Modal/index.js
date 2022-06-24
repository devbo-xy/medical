import React, { useEffect } from "react";
import { Assets } from "../..";
import Image from "next/image";

export default function Modal({ closeModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "visible");
  }, []);

  return (
    <div className="h-screen w-full bg-black/5 backdrop-blur-sm fixed items-center justify-center">
      <div className="h-screen items-center flex justify-center">
        <div className="bg-white shadow-lg p-14 h-[30rem] w-[30rem] rounded-xl flex-col flex fixed items-center justify-center space-y-10">
          <button
            onClick={() => closeModal(false)}
            className="h-8 w-8 rounded-lg absolute top-3 right-3 font-bold hover:scale-105"
          >
            X
          </button>
          <h2 className="text-2xl font-bold uppercase">Login</h2>
          <form action="" className="w-full flex flex-col space-y-4">
            <input
              className="w-full border rounded-md h-12 px-4 focus:outline-none"
              placeholder="Email adress "
              type="email"
            />
            <input
              className="w-full border rounded-md h-12 px-4 focus:outline-none"
              placeholder="Password"
              type="password"
            />
          </form>
          <div className="w-full items-center flex justify-center bg-blue-500 h-12 px-4 text-white rounded-md">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
