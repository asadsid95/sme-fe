export default function Signup() {

    return <>
        <div className="z-10 w-full h-screen absolute top-1/4 left-1/2">
            <div className="w-1/5 h-2/5  bg-gradient-to-b from-dark-yellow to-dark-gray-7 rounded-lg border-solid border-white border-2 ">
                <form className="flex flex-col h-full justify-between p-5 content-center bg-slate-600">
                    <div className="border-solid border-white border-2 right-1/2">
                        <button >X</button>
                    </div>
                    <div>
                        <label>Full Name</label>
                        <input />
                    </div>
                    <div>
                        <label>Email</label>
                        <input />
                    </div>
                    <div>
                        <label>Password</label>
                        <input />
                    </div>
                    <div>
                        <button className="bg-gray-200 rounded-md border-solid border-gray-400 border-2">Register</button>
                    </div>

                </form>
            </div>
        </div>
    </>

}