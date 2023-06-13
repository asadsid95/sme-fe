'use client'

import { useState } from "react"

export default function ForgotPassword() {
    const [recoveryEmail, setRecoveryEmail] = useState('')

    function submit(e) {
        e.preventDefault()
    }

    return <>
        <div className="z-10 w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-dark-gray-7 rounded-lg  ">
                <form onSubmit={submit}>
                    <p>
                        To recover, provide email that is part of the account:
                    </p>
                    <input value={recoveryEmail} onChange={(e) => { setRecoveryEmail(e.target.value) }}></input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
}