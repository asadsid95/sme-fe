'use client'

import Split from "react-split";
import Topbar from "../topbar";
import ProblemDescription from "./problemDescription";
import CodeEditor from "./codeEditor";

export default function SomeProblem({ params }: { params: { problem: String } }) {


    return (

        < div className="h-screen bg-dark-gray-1" >
            <Topbar problemPage />

            {/* split */}
            <Split className="split"
                gutterSize={10}
                minSize={0}
            >
                <ProblemDescription prop={params} />
                <CodeEditor />
            </Split>

        </div >

    )
}