import {React,useState} from 'react'


export const XMTPChat = ({ propaddress }) => {
const [account, setaccount] = useState('');
const [text, settext] = useState(false);
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account);
  setaccount(account)
}

async function send() {
    settext(true)
}

    return (
        <div style={{
            height: '500px',
        }} className="flex antialiased text-gray-800 w-96">
            <div className="flex flex-row h-full w-full overflow-x-hidden">

                <div className="flex flex-col flex-auto h-full ">

                    <div  className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4" >
                   {account? (
                    <div className="flex flex-col space-y-1 w-full relative  text-sm bg-white py-2 px-4 shadow rounded-full">
                   <button onClick={getAccount}
                                className="flex flex-row items-center rounded-xl p-2"
                            >
                                <div
                                    className="flex items-center justify-center h-8 w-16 bg-indigo-200 rounded-full"
                                >
                                    From
                                </div>
                                <div className="ml-2 text-sm font-semibold">{(account || '').substring(0, 25) + '...'}</div>
                            </button>
                            </div>
    ):(
        <div className="flex flex-col space-y-1 w-full relative  text-sm  items-center justify-center px-4 py-2 font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
        <button onClick={getAccount}
    type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                // className="flex flex-row items-center rounded-xl p-2"
                            >
                                
                                <div className="ml-2 text-sm font-semibold m-auto">Connect Wallet</div>
                            </button>
                        </div>
                            )}
                        <div className="mt-2 flex flex-col space-y-1 w-full relative  text-sm bg-white py-2 px-4 shadow rounded-full">
                            <button
                                className="flex flex-row items-center rounded-xl p-2"
                            >
                                <div
                                    className="flex items-center justify-center h-8 w-16 bg-indigo-200 rounded-full"
                                >
                                    To
                                </div>
                                <div className="ml-2 text-sm font-semibold">{(propaddress || '').substring(0, 25) + '...'}</div>
                            </button>
                        </div>
                        {account? (
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-12 gap-y-2">
                                    {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                        <div className="flex flex-row items-center">
                                            <div
                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                            >
                                                A
                                            </div>
                                            <div
                                                className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                            >
                                                <div>Hey How are you today?</div>
                                            </div>
                                        </div>
                                    </div> */}


<div className="col-start-6 col-end-13 p-3 rounded-lg">
                                        <div className="flex items-center justify-start flex-row-reverse">
                                            <div
                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                            >
                                                #
                                            </div>
                                            <div
                                                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                            >
                                                <div>
                                                    Hey
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {text?(
                                     <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                        <div className="flex items-center justify-start flex-row-reverse">
                                            <div
                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                            >
                                                #
                                            </div>
                                            <div
                                                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                            >
                                                <div>
                                                    hey
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ):(<div></div>)}



                                </div>
                            </div>
                        </div>
                        ):(
                            <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-12 gap-y-2">
                                    </div>
                                    </div>
                                    </div>
                        )}
                        <div
                            className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
                        >
                            <div>
                                <button
                                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                    />
                                    <button
                                        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="ml-4">
                                <button onClick={send}
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                >
                                    <span>Send</span>
                                    <span className="ml-2">
                                        <svg
                                            className="w-4 h-4 transform rotate-45 -mt-px"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default XMTPChat;
