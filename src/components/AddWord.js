import React, { useState } from 'react'
import uniqid from 'uniqid'

function AddWord({ status, handleWordModal, AddWordData }) {
    const [word, setWord] = useState('')
    const [meaning, setMeaning] = useState('')
    const [sentence, setSentence] = useState('')
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')


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

            <div id="popup-modal" tabIndex="-1" className={`${status ? "" : "hidden"} bg-black/10 h-full justify-center items-center flex fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-neutral-900 rounded-lg">

                        <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="p-6 text-center">
                            <p className='text-white text-5xl'>Add Word</p>
                            {
                                error?
                                <p className='text-red-500 font-thin text-base text-start'><i className="fa-sharp fa-solid fa-circle-exclamation"></i> {errorMessage}</p>
                                :
                                ""
                            }
                            <div>
                                <div className="relative z-0 w-full mb-6 group text-start">
                                    <input autoComplete='off' value={word} onChange={(e) => setWord(e.target.value)} type="email" name="word" id="word" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="word" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white- peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Word</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group text-start">
                                    <input autoComplete='off' value={meaning} onChange={(e) => setMeaning(e.target.value)} type="email" name="meaning" id="meaning" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="meaning" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white- peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meaning of the word</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group text-start">
                                    <input autoComplete='off' value={sentence} onChange={(e) => setSentence(e.target.value)} type="email" name="sentence" id="sentence" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="sentence" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white- peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sentence about the word</label>
                                </div>

                            </div>


                            <div className='flex justify-end'>
                                <button onClick={add} data-modal-hide="popup-modal" type="button" className="text-white bg-transparent border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-seminold rounded-lg text-base inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Add
                                </button>
                                <button onClick={closeModal} data-modal-hide="popup-modal" type="button" className="text-white hover:text-black bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-white text-base font-semibold px-5 py-2.5  focus:z-10 dark:bg-transparent dark:text-white dark:border-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-gray-600">Cancel</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AddWord