import React from "react";
import Image from "next/image";
import { Assets } from "../../..";

export default function Content() {

    const Layanan = (props) => {
        return (
            <div className="bg-white rounded-lg shadow-md hover:scale-105 transform py-2 px-4 flex justify-center flex-col space-y-2 text-center">
                <div className="relative overflow-hidden rounded-full w-20 h-20 mx-auto">
                    <Image
                        layout="fill"
                        src={props.image}
                        alt={props.alt}
                    />
                </div>
                <h2 className="w-20">
                    {props.title}
                </h2>
            </div>
        )
    }

    return (
        <div className="h-screen w-full bg-white items-center flex justify-end max-w-7xl mx-auto py-20 relative">
            <div className="flex flex-col space-y-10 z-[5]">
                <div className="flex flex-col space-y-4 w-full items-end">
                    <h2 className="text-xl font-semibold">Layanan Khusus</h2>
                    <div className="flex flex-row space-x-14">
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-4 w-full items-end">
                    <h2 className="text-xl font-semibold">Penunjang Kesehatan</h2>
                    <div className="flex flex-row space-x-14">
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                        <Layanan
                            title="Kesehatan Jantung"
                            image={Assets.GifJantung}
                            alt="Kesehatan Jantung"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[50rem] h-[30rem] absolute -left-[4rem] top-[12rem]">
                <Image
                    layout="fill"
                    src={Assets.GifBanner}
                    alt="Gambar Hero"
                />
            </div>
        </div>
    )
}