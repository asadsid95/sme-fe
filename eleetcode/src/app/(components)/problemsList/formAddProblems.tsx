import { firestore } from "@/app/firebase/firebase"
import { doc, setDoc } from "firebase/firestore"
import { useState } from "react"

const FormAddProblems = () => {

    const [problemInfo, setProblemInfo] = useState({
        id: '',
        title: '',
        category: '',
        difficulty: '',
        videoId: '',
        link: '',
        order: 0,
        likes: 0,
        dislikes: 0
    })

    console.log(problemInfo)
    const changingProblemInfo = (e) => {
        // e.preventDefault()
        setProblemInfo({ ...problemInfo, [e.target.name]: e.target.value })
    }

    async function submitProblemsInfo(e) {
        e.preventDefault()
        try {
            const newProblemInfo = {
                ...problemInfo, order: Number(problemInfo.order)
            }
            await setDoc(doc(firestore, 'problems', problemInfo.id), newProblemInfo)
            alert('saved to DB')

        } catch (error) {
            throw new Error(error.message)
        }
    }

    return (

        <form onSubmit={submitProblemsInfo} >
            <div>
                <input placeholder="id i.e. two-sum" name="id" onChange={changingProblemInfo} />
            </div>
            <div>
                <input placeholder="title" name="title" value={problemInfo.title} onChange={changingProblemInfo} />
            </div>
            <div>
                <input placeholder="category" name="category" onChange={changingProblemInfo} />
            </div>
            <div>
                <input placeholder="difficulty" name="difficulty" onChange={changingProblemInfo} />
            </div>
            <div>
                <input placeholder="order" name="order" onChange={changingProblemInfo} />
            </div>
            <div>
                <input placeholder="videoId?" name="videoId" onChange={changingProblemInfo} />
            </div>
            <div>
                <input placeholder="link?" name="link" onChange={changingProblemInfo} />
            </div>
            <button type="submit" className="bg-blue-200 text-blue-600">Submit</button>
        </form>

    )

}

export default FormAddProblems