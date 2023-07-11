'use client'

import Split from "react-split";
import Topbar from "../topbar";
import ProblemDescription from "./problemDescription";
import CodeEditor from "./codeEditor";
import { problems } from "@/app/utils/problems/index";

export default function SomeProblem({ params }: { params: { problem: String } }) {

    if (Object.keys(problems).includes(params.problem)) {

        return (

            < div className="h-screen bg-dark-gray-1" >
                <Topbar problemPage />

                {/* split */}
                <Split className="split"
                    gutterSize={10}
                    minSize={0}
                >
                    <ProblemDescription prop={problems[params.problem]} />
                    <CodeEditor prop={problems[params.problem]} />
                </Split>

            </div >

        )
    }

}