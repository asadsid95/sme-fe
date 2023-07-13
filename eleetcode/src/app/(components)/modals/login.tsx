'use client'

import { useState } from "react"
import { useSetRecoilState } from 'recoil'
import { modalState } from "../atoms/atomSignLogPass"
import useCloseModal from "./closeModal"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "@/app/firebase/firebase"
// import { useRouter } from "next/navigation"

import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setModalType = useSetRecoilState(modalState)
    const closeModal = useCloseModal()

    const handleClick = (type: string) => {
        setModalType((prev: any) => ({ ...prev, window: type }))
    }

    // const router = useRouter()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const router = useRouter()

    const loginUser = async (e: any) => {
        e.preventDefault()

        try {
            const loggedInUser = await signInWithEmailAndPassword(email, password)
            // Unsuccessful login
            if (!loggedInUser) {

                toast('Unsuccessful login, try again', { position: "bottom-center", theme: 'dark', autoClose: 2000, pauseOnHover: false })
                return;
            }

            // Successful login
            toast('Login successful!', { position: "bottom-center", theme: 'colored', closeOnClick: true, autoClose: 1000, pauseOnHover: false })
            closeModal()
            router.push('/problemsList')
        }

        catch { (error: any) => alert(error.message) }


    }

    return <>

        <div id="login" className="z-10 w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-25" >
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-gray-600 rounded-lg  ">
                <form className="flex flex-col h-full justify-between p-5 content-center" onSubmit={loginUser}>
                    <div className="flex items-center justify-end">
                        <button type='button' onClick={closeModal}>X</button>
                    </div>
                    <h4 className="text-md font-semibold">Log in to your Eleetcode account</h4>

                    <label>Email</label>
                    <input name='email' value={email} type='email' placeholder="example@company.com" className="bg-slate-500 rounded-sm p-1" onChange={e => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input name="password" value={password} type='password' placeholder="*******" className="bg-slate-500 rounded-sm p-1" onChange={e => setPassword(e.target.value)} />

                    <button className="bg-gray-800 rounded-md border-solid border-gray-800 border-2 text-white" type="submit">
                        Log in
                    </button>

                    <div className="text-xs">
                        <p>Don&apos;t have an account?{" "}<a href="#" className="font-bold hover:underline " onClick={() => handleClick('signup')}>Sign up</a></p>
                    </div>

                    <div className="text-xs">
                        <p>Forgot you password?{' '}<a href="#" className="font-bold hover:underline" onClick={() => handleClick('forgotPassword')}>Recover quick</a></p>
                    </div>

                </form>
            </div>
        </div>
    </>
}