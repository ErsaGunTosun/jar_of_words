import React, { useState, useEffect } from "react";

import AddWord from "./AddWord";
import Question from "./Question";

function Jar({
  show,
  addWordModal,
  handleWordModal,
  questionModal,
  handleQuestionModal,
}) {
  const [wordCount, setWordCount] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("words")) {
      localStorage.setItem("words", JSON.stringify([]));
    } else {
      const wordsJson = JSON.parse(localStorage.getItem("words"));
      setWordCount(wordsJson.length);
      setWords(wordsJson);
    }
  }, []);

  useEffect(() => {
    const wordsJson = JSON.parse(localStorage.getItem("words"));
    setWordCount(wordsJson.length);
  }, [words]);

  const AddWordData = (data) => {
    const wordsJson = JSON.parse(localStorage.getItem("words"));
    wordsJson.push(data);
    setWords([...wordsJson, data]);
    localStorage.setItem("words", JSON.stringify(wordsJson));
  }

  return (
    <>
      <main className=" text-center text-5xl flex-1 flex flex-wrap ">


        <div className="items-center text-center justify-center flex-1 flex flex-wrap">
          <div className="text-center justify-items-center">
            <AddWord status={addWordModal} handleWordModal={handleWordModal} AddWordData={AddWordData} />
            <Question
              status={questionModal}
              handleQuestionModal={handleQuestionModal}
            />

            <p className="mb-4 text-5xl italic text-neutral-950 dark:text-white">Click and test yourself</p>
            <div className="flex justify-center">
              <div
                onClick={handleQuestionModal}
                className="rounded-full bg-neutral-950 dark:bg-white flex justify-center items-center hover:scale-105 cursor-pointer w-72 h-72"
              >
                <p className="text-white dark:text-neutral-950">{wordCount}</p>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Jar;