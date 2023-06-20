'use client'

import Image from "next/image";
import Navbar from "./components/landing/Navbar";
import Signup from "./components/modals/signup";
import Login from "./components/modals/login";
import ForgotPassword from "./components/modals/forgotpassword";
import { modalState } from "./components/atoms/atomSignLogPass";
import { useRecoilValue } from 'recoil'

import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const modal = useRecoilValue(modalState)

    return (<>
        <head>
            <title>Eleetcode</title>
        </head>

        <body>
            <div className="bg-gradient-to-b from-gray-600 to-olive h-screen">
                <Navbar />

                <Image alt='' width={600} height={600} src='/hero.png' className="justify-center mx-auto my-40"></Image>

                {modal.isOpen && (
                    <>
                        {modal.window === "signup" && <Signup />}
                        {modal.window === "login" && <Login />}
                        {modal.window === "forgotPassword" && <ForgotPassword />}
                    </>
                )}

                <ToastContainer />
            </div>
        </body >
    </>
    )
} 