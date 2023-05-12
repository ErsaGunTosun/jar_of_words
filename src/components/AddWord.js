import React, { useState } from 'react'
import uniqid from 'uniqid'

function AddWord({ status, handleWordModal, AddWordData }) {
    const [word, setWord] = useState('')
    const [meaning, setMeaning] = useState('')
    const [sentence, setSentence] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const closeModal = () => {
        setError(false);
        setWord('');
        setMeaning('');
        setSentence('');
        handleWordModal();
    }

    const add = () => {
        if (word === '') {
            setError(true);
            setErrorMessage('Please enter a word');
        }
        else if (meaning === '') {
            setError(true);
            setErrorMessage('Please enter a meaning');
        }
        else if (sentence === '') {
            setError(true);
            setErrorMessage('Please enter a sentence');
        }
        else {
            let data = {
                id: uniqid(),
                word: word,
                meaning: meaning,
                sentence: sentence,
                trueCount: 0,
                falseCount: 0,
                showCount: 0,
            }
            AddWordData(data);
            closeModal();
        }

    }

    return (
        <>

            <div id="popup-modal" tabIndex="-1" className={`${status ? "" : "hidden"} bg-black/5 h-full justify-center items-center flex fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-zinc-300 dark:bg-neutral-800 rounded-lg">

                        <button onClick={closeModal} type="button"
                            className="absolute top-3 border rounded-md text-sm p-1.5 ml-auto inline-flex items-center right-2.5 
                            text-zinc-800 dark:text-neutral-200 border-zinc-200 dark:border-neutral-700 bg-transparent hover:bg-zinc-200 hover:dark:bg-neutral-700"
                            data-modal-hide="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="p-6 text-center">

                            <p className='text-white text-5xl'>Add Word</p>

                            {
                                error ?
                                    <p className='text-red-500 font-thin text-base text-start mb-3'><i className="fa-sharp fa-solid fa-circle-exclamation"></i> {errorMessage}</p>
                                    :
                                    ""
                            }

                            <div>
                                <div className="relative z-0 w-full mb-6 group text-start">
                                    <input autoComplete='off' value={word} onChange={(e) => setWord(e.target.value)} type="email" name="word" id="word" className="block py-2.5 px-0 w-full text-base text-zinc-900 dark:text-neutral-100 bg-transparent border-0 border-b-2 border-zinc-600 dark:border-neutral-500 appearance-none  focus:outline-none focus:ring-0 focus:border-zinc-900 dark:focus:border-neutral-100 peer" placeholder=" " required />
                                    <label htmlFor="word" 
                                    className="peer-focus:font-medium absolute text-base text-zinc-600 dark:text-neutral-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white- peer-focus:text-zinc-900 dark:peer-focus:text-neutral-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Word</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group text-start">
                                    <input autoComplete='off' value={meaning} onChange={(e) => setMeaning(e.target.value)} type="email" name="meaning" id="meaning" className="block py-2.5 px-0 w-full text-base text-zinc-900 dark:text-neutral-100 bg-transparent border-0 border-b-2 border-zinc-600 dark:border-neutral-500 appearance-none  focus:outline-none focus:ring-0 focus:border-zinc-900 dark:focus:border-neutral-100 peer" placeholder=" " required />
                                    <label htmlFor="meaning" 
                                    className="peer-focus:font-medium absolute text-base text-zinc-600 dark:text-neutral-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white- peer-focus:text-zinc-900 dark:peer-focus:text-neutral-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meaning of the word</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group text-start">
                                    <input autoComplete='off' value={sentence} onChange={(e) => setSentence(e.target.value)} type="email" name="sentence" id="sentence" className="block py-2.5 px-0 w-full text-base text-zinc-900 dark:text-neutral-100 bg-transparent border-0 border-b-2 border-zinc-600 dark:border-neutral-500 appearance-none  focus:outline-none focus:ring-0 focus:border-zinc-900 dark:focus:border-neutral-100 peer" placeholder=" " required />
                                    <label htmlFor="sentence" 
                                    className="peer-focus:font-medium absolute text-base text-zinc-600 dark:text-neutral-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white- peer-focus:text-zinc-900 dark:peer-focus:text-neutral-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sentence about the word</label>
                                </div>

                            </div>


                            <div className='flex justify-end'>

                                <button onClick={add} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    Add Word
                                </button>

                                <button onClick={closeModal} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:focus:ring-neutral-600 dark:border-neutral-600">
                                    Cancel
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AddWord