import { problems } from "@/app/utils/problems"

const Problems = () => {

    return (
        <tbody>
            {problems.map((problem, index) => {



                return (
                    <tr key={index} className=''>
                        <td>
                            {problem.title}
                        </td>
                        <td>
                            {problem.title}
                        </td>
                        <td>
                            {problem.difficulty}
                        </td>
                        <td>
                            {problem.category}
                        </td>
                        <td>
                            {problem.videoId}
                        </td>

                    </tr>
                )
            })}
        </tbody>
    )
}


export default Problems