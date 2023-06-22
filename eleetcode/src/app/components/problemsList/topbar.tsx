import Image from "next/image";
import Link from "next/link";

export default function Topbar() {


    return <>
        <div className="flex justify-between align-middle bg-gradient-to-b from-gray-700 to-gray-600 shadow-md ">
            <div >
                <Link href="/">
                    <Image src="/logo.png" width={300} height={300} alt='' />
                </Link>
            </div>

            <div className="flex justify-evenly items-center align-bottom w-64 ">
                <div>
                    <button className="bg-brand-orange px-3 py-1 mr-10 rounded-lg text-white border-4 border-transparent hover:bg-white hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">
                        Donate
                    </button>
                </div>

                <div>
                    <Link href='/'>
                        <button className="bg-white px-3 py-1 mr-10 rounded-lg text-brand-orange border-4 border-transparent hover:bg-brand-orange hover:text-black hover:border-4 hover:border-solid hover:border-brand-orange ease-linear duration-100 shadow-md">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>

}