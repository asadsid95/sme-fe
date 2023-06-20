"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSetRecoilState } from 'recoil'
import { modalState } from "../atoms/atomSignLogPass"
import { useAuthState, useSignOut } from "react-firebase-hooks/auth"
import { auth } from "@/app/firebase/firebase"

// border-solid border-white border-2 


export default function Navbar() {

    const [user, loading, error] = useAuthState(auth)

    const setModalIsOpen = useSetRecoilState(modalState)

    const openModal = () => {
        setModalIsOpen(prev => ({ ...prev, isOpen: true }))
    }

    // const [signOut, loading, error] = useSignOut(auth)
    // const logout = async () => {
    //     signOut
    // }

    return <>
        <div className="flex justify-between ">
            <Link href="/components/problems" >
                <Image src='/logo.png' width={300} height={300} alt=''></Image>
            </Link>
            <div className="flex items-center ">
                <button onClick={openModal}
                    className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">Sign up</button>


                <button
                    className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">LOG OUT</button>
            </div>

        </div>

    </>

}