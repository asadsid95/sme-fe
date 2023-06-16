import ProblemTable from "./table"
import Topbar from "./topbar"

export default function Problems() {
    return <>

        <head>
            <title>Eleetcode</title>
        </head>

        <body>
            <div className="bg-gradient-to-b from-gray-600 to-gray-800 h-screen">
                <Topbar />

                <ProblemTable />
            </div>

        </body>
    </>
}