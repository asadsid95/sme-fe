'use client'

import { RecoilRoot } from "recoil"
import ProblemTable from "./table"
import Topbar from "./topbar"


export default function Problems() {
    return <RecoilRoot>
        <head>
            <title>Eleetcode</title>
        </head>

        <body>
            <div className="bg-gradient-to-b from-gray-600 to-gray-800 h-screen">
                <Topbar />

                <div>
                    <h3 className='text-2xl text-center text-gray-800 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>Set of Problems</h3>
                </div>

                <ProblemTable />
            </div>

        </body>
    </RecoilRoot>
}