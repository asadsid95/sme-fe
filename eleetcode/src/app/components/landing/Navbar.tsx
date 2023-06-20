"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSetRecoilState } from 'recoil'
import { modalState } from "../atoms/atomSignLogPass"
import { useAuthState, useSignOut } from "react-firebase-hooks/auth"
import { auth } from "@/app/firebase/firebase"

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// border-solid border-white border-2 

export default function Navbar() {

    const setModalIsOpen = useSetRecoilState(modalState)

    const openModal = () => {
        setModalIsOpen(prev => ({ ...prev, isOpen: true }))
    }

    // gets auth state from firebase; returns users object if logged in
    const [user, loadingAuth, errorAuth] = useAuthState(auth)

    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth)
    const logout = async () => {

        // log out user
        const success: any = await signOut()

        // loading state during signing out
        { !loadingSignOut && toast('Signing out...', { position: "bottom-center", theme: 'dark', autoClose: 1000, pauseOnHover: false }) }

    }

    return <>
        <div className="flex justify-between ">
            <Link href="/components/problems" >
                <Image src='/logo.png' width={300} height={300} alt=''></Image>
            </Link>

            <div className="flex items-center ">

                {!user && <button onClick={openModal}
                    className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">Sign up</button>}

                {user &&
                    <>
                        <button onClick={logout}
                            className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">Logout</button>

                        <p className="font-semibold mr-10">User: {user.email}</p>
                    </>
                }
            </div>

        </div>

    </>

}