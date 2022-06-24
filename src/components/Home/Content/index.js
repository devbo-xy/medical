import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Assets } from "../../..";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Content() {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    Aos.init({});
  }, []);
  const Layanan = (props) => {
    return (
      <div className="bg-white rounded-lg shadow-md hover:scale-105 transform py-2 px-4 h-[9rem] flex justify-between flex-col space-y-2 text-center">
        <span className="w-16 h-16 rounded-full bg-gray-200  mx-auto" />
        <h2 className="w-20">{props.title}</h2>
      </div>
    );
  };

  const NavBlog = (props) => {
    return (
      <div
        onClick={props.onClick}
        className={`px-4 py-1 border-2 border-[#e0004d] text-[#e0004d] rounded-md cursor-pointer ${props.className}`}
      >
        <h2>{props.name}</h2>
      </div>
    );
  };

  const Blog = (props) => {
    return (
      <div className="w-[27rem] h-[15rem] border-2 border-[#e0004d] rounded-lg hover:bg-[#e0004d] text-[#e0004d]  hover:text-white flex justify-center items-center cursor-pointer ">
        <h2 className="font-medium text-xl uppercase  ">{props.name}</h2>
      </div>
    );
  };

  const Obat = (props) => {
    return (
      <div className="w-[25.5rem] h-[8rem] rounded-lg border-2 border-[#e0004d] hover:bg-[#e0004d] text-[#e0004d]  hover:text-white flex justify-center items-center cursor-pointer">
        <h2 className="font-medium text-xl uppercase  ">{props.name}</h2>
      </div>
    );
  };

  return (
    <div>
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
      <div className="h-full w-full bg-white items-center py-10">
        <div className="max-w-7xl flex flex-col mx-auto space-y-12">
          <div className="w-full justify-between flex flex-row">
            <div>
              <h2 className="font-semibold text-2xl">Baca 100+ Artikel Baru</h2>
            </div>
            <div className="flex justify-center items-center bg-[#e0004d] text-white py-1 px-4 rounded-lg hover:scale-105 cursor-pointer">
              <span>Lihat semua</span>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-row w-full items-start space-x-5">
              <NavBlog
                className={
                  activeTab === "tab1" ? "bg-[#e0004d] text-[#FFFFFF]" : ""
                }
                onClick={() => setActiveTab("tab1")}
                name="Terbaru"
              />
              <NavBlog
                className={
                  activeTab === "tab2" ? "bg-[#e0004d] text-[#FFFFFF]" : ""
                }
                onClick={() => setActiveTab("tab2")}
                name="Populer"
              />
            </div>
            <div className="w-full items-center">
              <div
                className={`${
                  activeTab === "tab1" ? "flex flex-row space-x-5" : "hidden"
                }`}
              >
                <Blog name="Artikel" />
                <Blog name="Artikel" />
                <Blog name="Artikel" />
              </div>
              <div
                className={`${
                  activeTab === "tab2" ? "flex flex-row space-x-5" : "hidden"
                }`}
              >
                <Blog name="Blog" />
                <Blog name="Blog" />
                <Blog name="Blog" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-white items-center py-10">
        <div className="max-w-7xl flex flex-col mx-auto space-y-5">
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl">Obat & Vitamin</h2>
            <p>
              Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan
              obat dan vitamin di sini
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Obat name="Batuk & Flu" />
            <Obat name="Daya Tahan Tubuh" />
            <Obat name="Skincare" />
            <Obat name="Batuk & Flu" />
            <Obat name="Batuk & Flu" />
            <Obat name="Batuk & Flu" />
          </div>
        </div>
      </div>
    </div>
  );
}
