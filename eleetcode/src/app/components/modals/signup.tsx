'use client'

import { useEffect, useState } from "react"
import { useSetRecoilState } from 'recoil'
import { modalState } from "../atoms/atomSignLogPass"
import useCloseModal from "./closeModal"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { app, auth, firestore } from "@/app/firebase/firebase"

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

    // To do:
    // 1. validation to prevent empty fields
    // 2. alert if error from firebase occurs

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setModalType = useSetRecoilState(modalState)
    const closeModal = useCloseModal()
    const handleClick = () => {
        // set type of modal to login
        setModalType((prev) => ({ ...prev, window: 'login' }))
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const registerUser = async (e: any) => {
        e.preventDefault()

        try {
            const newUser = await createUserWithEmailAndPassword(email, password)
            // if registration fails; add notifications instead of alert
            if (!newUser) {
                return toast('Failed to register, try again', { position: "bottom-center", theme: 'dark', autoClose: 2000, pauseOnHover: false });
            }
            // if registration succeeds, close modal
            toast('Registeration successful', { position: "bottom-center", theme: 'dark', autoClose: 1000, pauseOnHover: false })
            closeModal()
        }
        catch (error: any) {
            toast(error.message)
        }
    }

    return <>

        <div id='signup' className="z-10 w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-25" >
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-gray-600 rounded-lg" >
                <form className="flex flex-col h-full justify-between p-5 content-center" onSubmit={registerUser}>

                    <div className="flex items-center justify-end">
                        <button type='button' onClick={closeModal} className="color-white">X</button>
                    </div>
                    <h4 className="text-md font-semibold">Sign up for Eleetcode account</h4>

                    <label>Full Name</label>
                    <input name='name' value={name} className="bg-slate-500 rounded-sm p-1" placeholder="Your name" onChange={e => { setName(e.target.value) }} />

                    <label>Email</label>
                    <input name='email' value={email} className="bg-slate-500 rounded-sm p-1" type="email" placeholder="example@company.com" onChange={e => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input name="password" className="bg-slate-500  rounded-sm p-1" value={password} type='password' placeholder="*******" onChange={e => setPassword(e.target.value)} />

                    <button className="bg-gray-800 rounded-md border-solid border-gray-800 border-2 text-white" type="submit" >Signup</button>

                    <div className="text-xs">
                        <p>Already have an account? <a href='#' className="font-bold" onClick={handleClick}>Log in here</a></p>
                    </div>

                </form>
            </div>
        </div>
    </>

}
