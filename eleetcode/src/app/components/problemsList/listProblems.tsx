import { problems } from "@/app/utils/problems"
import Link from "next/link"
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineSolution } from 'react-icons/ai'

const Problems = () => {

    return (
        <tbody className="text-white text-sm">
            {problems.map((problem, index) => {

                const difficultyColour =
                    problem.difficulty == "Hard" ? 'text-red-400' : problem.difficulty == "Medium" ? "text-yellow-400" : "text-green-400"


                return (
                    // alt coloring of row
                    <tr key={problem.id} className={`${index % 2 == 1 ? 'bg-gray-400' : ''}`}>

                        <td className="px-4 py-3">
                            <BsCheckCircle fontSize={'20'} className="text-green-700" />
                        </td>
                        <td className="px-4 py-3">
                            <Link href="/" className="hover:text-blue-500 hover:font-semibold">{problem.title}</Link>
                        </td>
                        <td className={`px-4 py-3 ${difficultyColour}`}>
                            {problem.difficulty}
                        </td>
                        <td className="px-4 py-3">
                            {problem.category}
                        </td>
                        <td className="px-4 py-3 center">
                            <AiOutlineSolution fontSize={'20'} />
                            {/* {problem.videoId} */}
                        </td>

                    </tr>
                )
            })}
        </tbody>
    )
}


export default Problems