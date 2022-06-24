import React, { useEffect } from "react";
import Image from "next/image";
import { Assets } from "../../..";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Content() {
  useEffect(() => {
    Aos.init({});
  }, []);
  const Layanan = (props) => {
    return (
      <div className="bg-white rounded-lg shadow-md hover:scale-105 transform py-2 px-4 h-[9rem] flex justify-center flex-col space-y-2 text-center">
        <span className="w-16 h-16 rounded-full bg-gray-200 flex mx-auto" />
        <h2 className="w-20">{props.title}</h2>
      </div>
    );
  };

  return (
    <div className="h-screen w-full bg-white items-center flex justify-end max-w-7xl mx-auto py-20 relative">
      <div className="flex flex-col space-y-10 z-[5]">
        <div className="flex flex-col space-y-4 w-full items-end">
          <h2 className="text-xl font-semibold">Layanan Khusus</h2>
          <div className="flex flex-row space-x-14">
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1800"
            >
              <Layanan title="Tes Covid-19" alt="Tes Covid-19" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1500"
            >
              <Layanan title="Vaksinasi Covid-19" alt="Vaksinasi Covid-19" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1200"
            >
              <Layanan title="Kesehatan Jantung" alt="Kesehatan Jantung" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              <Layanan title="Kesehatan Kulit" alt="Kesehatan Kulit" />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-full items-end">
          <h2 className="text-xl font-semibold">Penunjang Kesehatan</h2>
          <div className="flex flex-row space-x-14">
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1800"
            >
              <Layanan title="Risiko Jantung" alt="Resiko Jantung" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1500"
            >
              <Layanan title="Risiko Diabetes" alt="Resiko Diabetes" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1200"
            >
              <Layanan title="Cek Bidan" alt="Cek Bidan" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              <Layanan title="Donasi" alt="Donasi" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35rem] h-[33rem] absolute left-[2rem] top-[8rem]">
        <Image layout="fill" src={Assets.GifDoctor} alt="Gambar Hero" />
      </div>
    </div>
  );
}
