'use client'

import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { modalState } from "../atoms/atomSignLogPass"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setModalType = useSetRecoilState(modalState)


    const handleClick = (type: string) => {
        setModalType((prev: any) => ({ ...prev, window: type }))
    }

    const submitLogin = ((e) => {
        console.log(e)
        e.preventDefault()
    })

    return <>

        <div id="login" className="z-10 w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-dark-gray-7 rounded-lg  ">
                <form className="flex flex-col h-full justify-between p-5 content-center" onSubmit={submitLogin}>
                    {/* <div> */}
                    <div className="flex items-center justify-end">
                        <button type='button'>X</button>
                    </div>
                    <h4>Log in to your Eleetcode account</h4>
                    {/* </div> */}
                    {/* <div> */}
                    <label>Email</label>
                    <input name='email' value={email} onChange={e => setEmail(e.target.value)} />
                    {/* </div> */}
                    {/* <div> */}
                    <label>Password</label>
                    <input name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {/* </div> */}
                    {/* <div> */}
                    <div className="text-xs">
                        <p>Don&apos;t have an account?{''}<a href="#" className="font-bold" onClick={() => handleClick('signup')}>Register</a></p>
                    </div>
                    <div className="text-xs">
                        <p>Forgot you password?{''}<a href="#" className="font-bold" onClick={() => handleClick('forgotPassword')}>Recover quick</a></p>
                    </div>

                    <button className="bg-gray-200 rounded-md border-solid border-gray-400 border-2" type="submit">
                        Log in
                    </button>
                    {/* </div> */}

                </form>
            </div>
        </div>
    </>
}