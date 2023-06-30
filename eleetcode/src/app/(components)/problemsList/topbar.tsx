'use client'

import Image from "next/image";
import Link from "next/link";
import { modalState } from "../atoms/atomSignLogPass";
import { useSetRecoilState, useRecoilValue } from "recoil";
import React from "react";

// type TopbarProps = {
//     problemPage?: boolean
// }

export default function Topbar({ problemPage }) {

    const setModalType = useSetRecoilState(modalState)

    // const handleClick = () => {
    //     setModalType((prev) => ({ ...prev, isOpen: true, window: 'login' }))
    // }

    return <>
        <div className="flex justify-between align-middle bg-gradient-to-b from-gray-700 to-gray-600 shadow-md ">
            <div >
                <Link href="/">
                    <Image src="/logo.png" width={300} height={300} alt='' />
                </Link>
            </div>

            {/* {problemPage &&
                <div className="flex items-center justify-center ">
                    <h1> HELLO </h1>

                </div>
            } */}

            <div className="flex justify-evenly items-center align-bottom w-64 ">
                <div>
                    <button className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">
                        Donate
                    </button>
                </div>

                <div >
                    <Link href='/' >
                        <button className="bg-white px-3 py-1 mr-10 rounded-lg text-brand-orange border-4 border-transparent hover:bg-brand-orange hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md" onClick={() => { ; setModalType((prev) => ({ ...prev, isOpen: true, window: "login" })) }}>
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>

}