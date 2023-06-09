'use client'

// import FormAddProblems from "./formAddProblems"
import Problems from "./listProblems"
import { RecoilRoot } from "recoil"
import LoadingState from "./loadingState"
import { useState } from 'react'

function ProblemTable() {

    const [loading, setLoading] = useState(true)

    return <>
        <RecoilRoot>
            <div className='relative overflow-x-auto mx-auto px-6 pb-10'>

                {loading && (
                    <div>
                        {[...Array(3)].map((key, idx) => (
                            <LoadingState key={key} />

                        ))}

                    </div>
                )
                }

                <table className='text-sm text-left text-gray-800 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                    {!loading &&
                        (<thead className='text-xs text-black uppercase dark:text-gray-400 border-b '>
                            <tr>
                                <th scope='col' className='px-1 py-3 w-0 font-medium'>
                                    Status
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Title
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Difficulty
                                </th>

                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Category
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Solution
                                </th>
                            </tr>
                        </thead>
                        )}

                    <Problems setLoading={setLoading} />
                </table>

                {/* <FormAddProblems /> */}
            </div>
        </RecoilRoot>
    </>

}

export default ProblemTable