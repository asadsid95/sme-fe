'use client'

import { problems } from "@/app/utils/problems" // to be removed
import Link from "next/link"
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineSolution } from 'react-icons/ai'
import YouTube from 'react-youtube'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { atomSolutionVideo } from "../atoms/atomSolutionVideo"
import { useEffect } from "react"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { firestore } from "@/app/firebase/firebase"
import { useState } from 'react';


/**  
    Updates log:

    * TODO: Remove hardcoded values for problems & add fetching from Firestore

*/


const Problems = () => {

    const setSolutionVideoModal = useSetRecoilState(atomSolutionVideo)
    const solutionVideoModal = useRecoilValue(atomSolutionVideo)

    const openSolutionModal = (video) => {
        setSolutionVideoModal((prev) => ({ ...prev, isOpen: true, videoId: video }))
    }

    const closeSolutionModal = () => {
        setSolutionVideoModal((prev) => ({ ...prev, isOpen: false, videoId: '' }))
    }

    const problems = useGetAllProblems()
    // const [allProblems, setAllProblems] = useState([])

    // useEffect(() => {
    //     async function getAllProblems() {
    //         const qry = query(collection(firestore, 'problems'), orderBy('order', 'asc'))
    //         const res = await getDocs(qry)
    //         const tmp = []

    //         res.forEach(doc => {
    //             // console.log(doc)
    //             console.log(doc.data())
    //             tmp.push({ id: doc.id, ...doc.data() }) // this appends to the list an object in which id is created + doc's object is concatenated to the list's object

    //         })

    //         setAllProblems(tmp)
    //     }
    //     console.log("setAllProblems: ", allProblems)

    //     getAllProblems()
    // }
    //     , [])

    return (
        <>
            <tbody className="text-white ">
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
                                <Link href={`/problemsList/${problem.id}`} className="hover:text-blue-500 hover:font-semibold">{problem.title}</Link>
                                {/* is this a correct way to mention url segment in href, considering its for dynamic routes?*/}

                            </td>
                            <td className={`px-4 py-3 ${difficultyColour}`}>
                                {problem.difficulty}
                            </td>
                            <td className="px-4 py-3">
                                {problem.category}
                            </td>
                            <td className="px-4 py-3 center" >
                                {problem.videoId === '' ?
                                    <p>Coming soon</p> :
                                    <AiOutlineSolution fontSize={'20'} className="cursor-pointer hover:text-blue-400" onClick={() => openSolutionModal(problem.videoId)} />
                                }
                            </td>
                        </tr>
                    )
                })}
            </tbody>

            {/* // Modal for video (i.e. problem solution) */}

            {solutionVideoModal.isOpen &&

                <tfoot>
                    <div className="fixed top-0 left-0 flex justify-center items-center  w-screen h-screen" onClick={closeSolutionModal}>
                        <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-black opacity-60"  >
                        </div>

                        <div className='z-50 w-full h-full px-6 relative max-w-4xl '>
                            <div className='w-full h-full flex items-center justify-center relative '>
                                <div className='w-full relative'  >
                                    <p className='cursor-pointer absolute -top-16 right-0 text-white' onClick={closeSolutionModal}
                                    >X</p>
                                    <YouTube
                                        videoId={solutionVideoModal.videoId}
                                        loading='lazy'
                                        iframeClassName='w-full min-h-[500px]'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </tfoot>
            }
        </>
    )
}

function useGetAllProblems() {

    const [allProblems, setAllProblems] = useState([])

    useEffect(() => {
        async function getAllProblems() {
            const qry = query(collection(firestore, 'problems'), orderBy('order', 'asc'))
            const res = await getDocs(qry)
            const tmp = []

            res.forEach(doc => {
                // console.log(doc)
                console.log(doc.data())
                tmp.push({ id: doc.id, ...doc.data() }) // this appends to the list an object in which id is created + doc's object is concatenated to the list's object

            })

            setAllProblems(tmp)
        }
        console.log("setAllProblems: ", allProblems)

        getAllProblems()
    }
        , [])
    return allProblems
}

export default Problems