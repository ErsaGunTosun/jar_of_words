import React, { useState, useEffect } from 'react'

function Question({ status, handleQuestionModal, words, UpdateWordData }) {
    const [word, setWord] = useState({})
    const [answer, setAnswer] = useState('')
    const [isAnswer, setIsAnswer] = useState(false)
    const [notAnswer, setNotAnswer] = useState(true)
    const [isCorrect, setIsCorrect] = useState(undefined)
    useEffect(() => {
        if (status) {
            if (words.length > 0) {
                let random = Math.floor(Math.random() * words.length)
                let word = words[random]
                setWord(word)
                setNotAnswer(false)
            }

        }
    }, [status])


    const ıdontknow = () => {
        let updateWord = word;
        updateWord.showCount += 1;
        updateWord.falseCount += 1;
        UpdateWordData(updateWord);
        setIsAnswer(true);
    }

    const anwserCheck = () => {
        if (answer.toLowerCase() === word.meaning.toLowerCase()) {
            let updateWord = word;
            updateWord.showCount += 1;
            updateWord.trueCount += 1;
            UpdateWordData(updateWord);
            setIsCorrect(true);
        }
        else {
            let updateWord = word;
            updateWord.showCount += 1;
            updateWord.falseCount += 1;
            UpdateWordData(updateWord);
            setIsCorrect(false);
        }
    }


    const closeModal = () => {
        setIsCorrect(undefined);
        setAnswer('');
        setNotAnswer(true);
        setIsAnswer(false);
        setWord({});
        handleQuestionModal();
    }

    return (
        <>
            <div id="popup-modal" tabIndex="-1" className={`${status ? "" : "hidden"} bg-neutral-100/25 h-full  justify-center items-center mb-3 flex fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-black rounded-lg mt-3">

                        <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {
                            !notAnswer
                                ?
                                <div className="p-6 text-center">
                                    <p className='text-white text-4xl'>Question</p>
                                    <h3 className="mb-1 mt-3 text-lg font-normal text-gray-200 dark:text-gray-200">What is the meaning of <span className='font-semibold'>"{word.word.toUpperCase()}"</span> ? </h3>
                                    {
                                        isCorrect === true ?
                                            <p className='text-green-500 text-lg font-semibold'>
                                                Your answer is correct
                                            </p>
                                            : isCorrect === false ?
                                                <p className='text-red-500 text-lg'>
                                                    Your answer is wrong
                                                </p>
                                                : ""

                                    }

                                    {
                                        !isAnswer ?
                                            <div className="relative z-0 w-full mb-6 group text-start">
                                                <input autoComplete='off' disabled={`${ isCorrect !== undefined? isCorrect == true || isCorrect == false ?"disabled":"" : ""}`} value={answer} onChange={(e) => setAnswer(e.target.value)} type="email" name="word" id="word" className={`disable block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer ${isCorrect == true ? "disabled:border-green-500 disabled:text-green-500" :"disabled:border-red-500 disabled:text-red-500" }`} placeholder=" " required />
                                                <label htmlFor="word" className={`peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isCorrect == true ?"peer-disabled:text-green-500":"peer-disabled:text-red-500" }`}>Answer</label>
                                            </div>
                                            :
                                            <div>
                                                <p className='text-red-500 text-2xl'>The word means  <span className='font-semibold'>"{word.meaning.toUpperCase()}"</span></p>
                                            </div>
                                    }



                                    <div className='flex justify-end'>  
                                        {
                                            !isAnswer
                                                ?
                                                isCorrect === undefined ?
                                                    <>
                                                        <button onClick={ıdontknow} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                            I don't know
                                                        </button>
                                                        <button onClick={anwserCheck} data-modal-hide="popup-modal" type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-green-600 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 ">
                                                            Check
                                                        </button>
                                                    </>
                                                    :
                                                    isCorrect === false || isCorrect === true ?
                                                        <button onClick={closeModal} data-modal-hide="popup-modal" type="button" className="text-white hover:text-black bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-white text-base font-semibold px-5 py-2.5  focus:z-10 dark:bg-transparent dark:text-white dark:border-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-gray-600">
                                                            Cancel
                                                        </button>
                                                        :
                                                        ""
                                                :
                                                ""
                                            // <button onClick={closeModal} data-modal-hide="popup-modal" type="button" className="text-white hover:text-black bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-white text-base font-semibold px-5 py-2.5  focus:z-10 dark:bg-transparent dark:text-white dark:border-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-gray-600">
                                            //     Cancel
                                            // </button>

                                        }

                                    </div>
                                </div>
                                :
                                <div className="p-6 text-center">
                                    <p className='text-red-500 text-4xl'>No word found</p>
                                    <h3 className="mb-2 mt-3 text-2xl font-normal text-gray-200 dark:text-gray-200">Add the word to test yourself </h3>
                                </div>
                        }

                    </div>
                </div>

            </div>
        </>

    )
}

export default Question