'use client'

import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { modalState } from "../atoms/atomSignLogPass"

function submitFirebase(e) {
    e.preventDefault()

    const readData = new FormData(e.target)
    console.log(Object.fromEntries(readData.entries()))

}

export default function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setModalType = useSetRecoilState(modalState)

    const handleClick = () => {
        // set type of modal to login
        setModalType((prev) => ({ ...prev, window: 'login' }))
    }

    return <>

        <div id='signup' className="z-10 w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-dark-gray-7 rounded-lg  ">
                <form className="flex flex-col h-full justify-between p-5 content-center" onSubmit={submitFirebase}>
                    {/* <div> */}
                    <div className="flex items-center justify-end">
                        <button type='button'>X</button>
                    </div>
                    <h4>Sign up for Eleetcode account</h4>
                    {/* </div> */}
                    {/* <div> */}
                    <label>Full Name</label>
                    <input name='name' value={name} className="bg-grey-400" onChange={e => { setName(e.target.value) }} />
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
                        <p>Already have an account? <a href='#' className="font-bold" onClick={handleClick}>Log in here</a></p>
                    </div>

                    <button className="bg-gray-200 rounded-md border-solid border-gray-400 border-2" type="submit">Register</button>
                    {/* </div> */}

                </form>
            </div>
        </div>
    </>

}