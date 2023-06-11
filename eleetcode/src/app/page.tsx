import Link from "next/link";
import Image from "next/image";
import Navbar from "./landing/Navbar";
import Signup from "./modals/signup";

export default function home() {
    return <>
        <head>
            <title>Eleetcode</title>
        </head>

        <body>
            <div className="bg-gradient-to-b from-gray-600 to-olive h-screen">
                <Navbar />

                <Image alt='' width={600} height={600} src='/hero.png' className="justify-center mx-auto my-40"></Image>

                <Signup />
            </div>
        </body >
    </>
} 