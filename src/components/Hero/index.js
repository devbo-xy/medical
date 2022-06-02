import React, { useEffect } from "react";
import Image from "next/image";
import { Assets } from "../..";
import { Icon } from "../..";
import Aos from "aos"
import 'aos/dist/aos.css'

export default function Hero() {

    useEffect(() => {
        Aos.init({});
    }, []);

    const Card = (props) => {
        return (
            <div className="flex flex-row space-x-5 hover:scale-105 transform">
                <div className="bg-white rounded-lg shadow-lg">
                    <a href=" #">
                        <div className="flex flex-col space-y-2 h-full py-4 w-24">
                            <div className="w-full flex justify-center">
                                <Image
                                    src={props.image}
                                    alt={props.alt}
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm">{props.text1}</p>
                                <p className="text-sm">{props.text2}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    };

    const CardAs = () => {
        return (
            <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                className="flex flex-row space-x-5 hover:scale-105">
                <div className="bg-white rounded-lg shadow-xl px-5">
                    <a href=" #">
                        <div className="flex flex-row h-full items-center space-x-2">
                            <div className="flex justify-start mb-5">
                                <Image
                                    src={Icon.IconAsuransi}
                                    alt="Logo Asuransi"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="text-start">
                                <h4 className="font-bold">Hubungkan Asuransi</h4>
                                <p className="text-sm">Nikmati manfaat asuransimu untuk</p>
                                <p className="text-sm">layanan MediCare</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    };

    return (
        <div className="h-screen w-full items-center bg-blue-50 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto h-full flex flex-row items-center relative">
                <div className="flex flex-col justify-start space-y-5 z-[1]">
                    <div className="w-full">
                        <h2 className="max-w-xl text-4xl font-semibold">Solusi Kesehatan Terlengkap</h2>
                        <p className="max-w-xl text-xl">Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di MediCare!</p>
                    </div>
                    <div
                        className="w-full flex flex-row space-x-5">
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <Card
                                image={Icon.IconMedis}
                                text1="Chat dengan"
                                text2="Dokter"
                            />
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <Card
                                image={Icon.IconMedis}
                                text1="Toko"
                                text2="Kesehatan"
                            />
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <Card
                                image={Icon.IconJanji}
                                text1="Buat Janji"
                                text2="Rumah Sakit"
                            />
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                            className="flex flex-row space-x-5 hover:scale-105 transform">
                            <div className="bg-white rounded-lg shadow-lg">
                                <a href=" #">
                                    <div className="flex flex-col space-y-2 h-full py-4 w-24">
                                        <div className="w-full flex justify-center">
                                            <Image
                                                src={Icon.IconDokter}
                                                alt="Logo Medis"
                                                width={36}
                                                height={36}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm">Janji Medis</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <CardAs />
                    </div>
                </div>
                <div className="w-[44rem] h-full absolute right-0 top-[7rem]">
                    <Image
                        src={Assets.HeroMed}
                        alt="Gambar Hero" />
                </div>
            </div>
        </div>
    )
}