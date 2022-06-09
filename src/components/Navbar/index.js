import React, { useEffect, useState } from "react";
import Modal from "../Modal";

export default function Navbar() {

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const nav = document.querySelector(".nav");
        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY && window.scrollY > 0) {
                nav.classList.add("-top-40");
            } else {
                nav.classList.remove("-top-40");
            }
            lastScrollY = window.scrollY;
        })
        return () => { }
    }, []);


    const List = (props) => {
        return (
            <div>
                <a href=" #">
                    {props.name}
                </a>
            </div>
        )
    };

    const Login = (props) => {
        return (
            <div
                onClick={() => { setOpenModal(true) }}
                className="py-1 px-8 hover:scale-105 rounded-lg bg-[#e0004d] text-white ">
                <a href="">{props.button}</a>
            </div>
        )
    };

    return (
        <div className="w-full bg-white fixed shadow-md z-[10] nav">
            <div className="max-w-7xl items-center flex justify-between mx-auto py-3">
                <div>
                    <h2 className="text-2xl font-semibold text-[#e0004d]">
                        MediCare</h2>
                </div>
                <ul className="flex flex-row space-x-10">
                    <List
                        name="Beranda"
                    />
                    <List
                        name="Artikel"
                    />
                    <List
                        name="Aplikasi"
                    />
                    <List
                        name="Riwayat"
                    />
                </ul>
                <Login
                    button="Login"
                />
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
    )
}