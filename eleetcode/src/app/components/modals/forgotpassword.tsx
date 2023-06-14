'use client'

import { useState } from "react"
import useCloseModal from "./closeModal"

export default function ForgotPassword() {
    const [recoveryEmail, setRecoveryEmail] = useState('')
    const closeModal = useCloseModal()

    function submit(e: any) {
        e.preventDefault()
    }

    return <>
        <div id='forgotPassword' className="z-10 w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-gray-600 rounded-lg  ">
                <form className="flex flex-col h-full justify-between p-5 content-center" onSubmit={submit}>
                    <div className="flex items-center justify-end">
                        <button type='button' onClick={closeModal}>X</button>
                    </div>
                    <p>
                        To recover, provide email that is part of the account:
                    </p>
                    <input value={recoveryEmail} onChange={(e) => { setRecoveryEmail(e.target.value) }}></input>

                    <button className="bg-gray-200 rounded-md border-solid border-gray-400 border-2" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
}