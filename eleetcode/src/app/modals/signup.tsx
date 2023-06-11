'use client'
async function submitFirebase(e) {
    e.preventDefault()

    const readData = new FormData(e.target)
    console.log(Object.fromEntries(readData.entries()))

}

export default function Signup() {

    return <>
        <div className="z-10 w-full h-screen absolute top-1/4 left-1/2">
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-dark-gray-7 rounded-lg border-solid border-white border-2 ">
                <form className="flex flex-col h-full justify-between p-5 content-center bg-slate-600" onSubmit={submitFirebase}>
                    {/* <div className="border-solid border-white border-2 right-1/2"> */}
                    <button type='button'>X</button>
                    {/* </div> */}
                    {/* <div> */}
                    <label>Full Name</label>
                    <input name='name' />
                    {/* </div> */}
                    {/* <div> */}
                    <label>Email</label>
                    <input name='email' />
                    {/* </div> */}
                    {/* <div> */}
                    <label>Password</label>
                    <input name="password" />
                    {/* </div> */}
                    {/* <div> */}
                    <button className="bg-gray-200 rounded-md border-solid border-gray-400 border-2" type="submit">Register</button>
                    {/* </div> */}

                </form>
            </div>
        </div>
    </>

}