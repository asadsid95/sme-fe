"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Signup from "../modals/signup"

// border-solid border-white border-2 

function test() {
    console.log("test")
}

export default function Navbar() {

    const [isSignup, setSignup] = useState(false)

    return <>
        <div id="topbar" className="flex justify-between ">
            <Link href="/problems" >
                <Image src='/logo.png' width={300} height={300} alt=''></Image>
            </Link>
            <div className="flex items-center">
                {/* <Link href="/modals"> */}
                <button onClick={test}
                    className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100">Sign up</button>
                {/* </Link> */}
            </div>
        </div>

    </>

}