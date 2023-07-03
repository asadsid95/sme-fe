'use client'

import Split from "react-split";
import Topbar from "../topbar";

export default function SomeProblem({ params }: { params: { problem: String } }) {


    return (

        < div className="h-screen bg-dark-gray-1" >
            <Topbar />

            {/* 1 split */}
            <Split className="split"
                direction="horizontal"
                gutterSize={100}
                minSize={300}
            >
                <div className="flex items-center justify-center bg-dark-layer-2 border-2 border-white border-solid text-white">
                    <div className="border-white border-solid">
                        Problem description
                    </div>
                    <div className="border-white border-solid">
                        Code editor
                    </div>

                </div>
            </Split>

        </div >

    )
}