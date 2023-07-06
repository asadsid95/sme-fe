import CodeMirror from '@uiw/react-codemirror';
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai';
import Split from 'react-split';
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { BsChevronUp } from 'react-icons/bs';

export default function CodeEditor() {

    return <>
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>

            {/* Preference row */}
            <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
                <div className='flex items-center text-white'>
                    <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
                        <div className='flex items-center px-1'>
                            <div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
                        </div>
                    </button>
                </div>

                <div className='flex items-center m-2'>
                    <button className='relative rounded px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex ml-auto p-1 mr-2 hover:bg-dark-fill-3 group'>
                        <div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
                            <AiOutlineSetting />
                        </div>
                        <div className='absolute w-auto p-2 text-sm m-2 min-w-max translate-x-3 right-0 top-5 z-10 rounded-md shadow-md text-dark-layer-2 bg-gray-200 origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100'>Settings</div>
                    </button>

                    <button className='relative rounded px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex ml-auto p-1 mr-2 hover:bg-dark-fill-3 group'>
                        <div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
                            <AiOutlineFullscreen />
                        </div>
                        <div className='absolute w-auto p-2 text-sm m-2 min-w-max translate-x-3 right-0 top-5 z-10 rounded-md shadow-md text-dark-layer-2 bg-gray-200 origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100'>Full Screen</div>
                    </button>
                </div>
            </div>

            {/* Code editor */}
            <Split
                className="h-[calc(100vh-99px)]"
                direction='vertical'
                sizes={[60, 40]} minSize={60}>

                <div className='w-full overflow-auto' >
                    <CodeMirror
                        theme={vscodeDark}
                        extensions={[javascript()]}
                        value="console.log('hello world!');"
                        style={{ fontSize: 16 }} />

                </div>

                <div className='w-full px-5 overflow-auto'>
                    {/* testcase heading */}
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-sm font-medium leading-5 text-white'>Testcases</div>
                            <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                        </div>
                    </div>


                    <div className='flex text-xs'>
                        <div className='mr-2 items-start mt-2 '>
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div
                                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                                    ${true ? "text-white" : "text-gray-500"}
                                `}
                                >
                                    Case 1
                                </div>

                                <div
                                    className={`mx-2 font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                                    ${true ? "text-white" : "text-gray-500"}
                                `}
                                >
                                    Case 2
                                </div>

                                <div
                                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                                    ${true ? "text-white" : "text-gray-500"}
                                `}
                                >
                                    Case 3
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='font-semibold my-1 text-xs'>
                        <p className='text-xs font-medium mt-4 text-white'>Input:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            input Text
                        </div>
                        <p className='text-xs font-medium mt-4 text-white'>Output:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            Output text
                        </div>
                    </div>
                </div>

                <div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full border-2 '>
                    <div className='mx-5 my-[10px] flex justify-between w-full'>
                        <div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
                            <button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2 '>
                                Console
                                <div className='ml-1 transform transition flex items-center'>
                                    <BsChevronUp className='fill-gray-6 mx-1 fill-dark-gray-6' />
                                </div>
                            </button>
                        </div>
                        <div className='ml-auto flex items-center space-x-4'>
                            <button
                                className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3  hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
                            >
                                Run
                            </button>
                            <button
                                className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg'
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>


            </Split>
        </div>
    </>
}