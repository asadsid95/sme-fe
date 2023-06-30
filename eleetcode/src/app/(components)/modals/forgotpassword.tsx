'use client'

import { useState } from "react"
import useCloseModal from "./closeModal"
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from "@/app/firebase/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"

export default function ForgotPassword() {
    const [recoveryEmail, setRecoveryEmail] = useState('')
    const closeModal = useCloseModal()
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)
    const router = useRouter()

    const submitRecovery = async (e: any) => {
        e.preventDefault()

        try {
            const recoveredUser = await sendPasswordResetEmail(recoveryEmail)
            // Unsuccessful recovery
            if (recoveredUser != true) {
                toast('Incorrect email', { position: "bottom-center", theme: 'dark', autoClose: 2000, pauseOnHover: false })
                return
            }
            // Successfull recovery
            toast('Password reset email sent', { position: "bottom-center", theme: 'dark', autoClose: 1000, pauseOnHover: false })
            closeModal()
        }
        catch
        {
            (error: any) => alert(error.message)

        }
    }

    return <>
        <div id='forgotPassword' className="z-10 w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-25" >
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-gray-600 rounded-lg  ">
                <form className="flex flex-col h-full justify-between p-5 content-center" onSubmit={submitRecovery}>
                    <div className="flex items-center justify-end">
                        <button type='button' onClick={closeModal}>X</button>
                    </div>
                    <p className="text-md font-semibold">
                        To recover, provide email that is part of the account:
                    </p>
                    <input value={recoveryEmail} className="bg-slate-500 rounded-sm p-1" placeholder="example@company.com" onChange={(e) => { setRecoveryEmail(e.target.value) }}></input>

                    <button className="bg-gray-200 rounded-md border-solid border-gray-400 border-2" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
}