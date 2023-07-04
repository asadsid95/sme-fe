'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { modalState } from "../atoms/atomSignLogPass";
import { useSetRecoilState } from "recoil";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/firebase";
import { toast } from "react-toastify"


type TopbarProps = {
    problemPage?: boolean
}

export default function Topbar({ problemPage }) {

    const [user, loading, error] = useAuthState(auth)
    const setModalType = useSetRecoilState(modalState)
    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth)

    const logout = async () => {

        // log out user
        const success: any = await signOut()

        // loading state during signing out
        { !loadingSignOut && toast('Signed out!', { position: "bottom-center", theme: 'dark', autoClose: 1000, pauseOnHover: false }) }

    }

    return <>
        <div className="flex justify-between align-middle bg-gradient-to-b from-gray-700 to-gray-600 shadow-md ">
            <div >
                <Link href="/">
                    <Image src="/logo.png" width={300} height={300} alt='' />
                </Link>
            </div>

            {problemPage &&
                <div className="flex items-center justify-center ">
                    <button type="button">&</button>
                    <p>=</p>
                    <Link href="/problemsList"><h1>problems </h1></Link>
                    <button type="button">$</button>
                </div>
            }

            <div className="flex justify-evenly items-center align-bottom w-64 ">
                <div>
                    <button className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">
                        Donate
                    </button>
                </div>

                <div >
                    {user ?
                        <>
                            <button onClick={logout}
                                className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">Logout</button>

                        </>
                        :
                        <Link href='/' >
                            <button className="bg-white px-3 py-1 mr-10 rounded-lg text-brand-orange border-4 border-transparent hover:bg-brand-orange hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md" onClick={() => { ; setModalType((prev) => ({ ...prev, isOpen: true, window: "login" })) }}>
                                Sign In
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    </>

}