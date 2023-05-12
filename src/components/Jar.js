import React, { useState, useEffect } from "react";

import AddWord from "./AddWordModal";
import Question from "./QuestionModal";

import Img from "../assets/img.svg";

function Jar({
  show,
  addWordModal,
  handleWordModal,
  questionModal,
  handleQuestionModal,
}) {
  const [wordCount, setWordCount] = useState(0);
  const [words, setWords] = useState([]);
  const [oldWords, setOldWords] = useState(undefined);


  // Get words from local storage
  useEffect(() => {
    if (!localStorage.getItem("words")) {
      localStorage.setItem("words", JSON.stringify([]));
    } else {
      const wordsJson = JSON.parse(localStorage.getItem("words"));
      setWordCount(wordsJson.length);
      setWords(wordsJson);
    }
  }, []);


  // Function that works when a new word is added
  useEffect(() => {
    const wordsJson = JSON.parse(localStorage.getItem("words"));
    setWordCount(wordsJson.length);
  }, [words]);


  // Word data add
  const AddWordData = (data) => {
    const wordsJson = JSON.parse(localStorage.getItem("words"));
    const isHave = wordsJson.find((word) => word.id === data.id);
    if (isHave) {
      console.log("id error");
    } else {
      wordsJson.push(data);
      localStorage.setItem("words", JSON.stringify(wordsJson));
      setWords(wordsJson);
    }
  }


  // Word data update
  const UpdateWordData = (data) => {
    for (let i = 0; i < words.length; i++) {
      if (words[i].id === data.id) {
        words[i].falseCount = data.falseCount;
        words[i].trueCount = data.trueCount;
        words[i].showCount = data.showCount;
        break;
      }
    }
    localStorage.setItem("words", JSON.stringify(words));
  }

  
  return (
    <>
      <main className=" text-center text-5xl flex-1 flex flex-wrap ">
        <div className="items-center text-center justify-center flex-1 flex flex-wrap">
          <div className="text-center justify-items-center">

            {/** Add Word Modal Component */}
            <AddWord
              status={addWordModal}
              handleWordModal={handleWordModal}
              AddWordData={AddWordData} />

            {/** Question Modal Component */}
            <Question
              status={questionModal}
              handleQuestionModal={handleQuestionModal}
              words={words}
              UpdateWordData={UpdateWordData}
              oldWords={oldWords}
              setOldWords={setOldWords}
            />

            <p className="mb-4 text-4xl italic text-zinc-600 dark:text-white ">Choose word from the jar and test yourself</p>

            {/** Light Jar */}
            <div className="flex justify-center dark:hidden mt-5">
              <img onClick={handleQuestionModal} className="dark:invisible hover:scale-110 hover:rotate-3 cursor-pointer w-64 h-80" src={Img} />
            </div>
            {/** Dark Jar */}
            <div className="hidden dark:flex justify-center mt-5">
              <img onClick={handleQuestionModal} className="hover:scale-110 hover:rotate-3 invert cursor-pointer w-64 h-80" src={Img} />
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Jar;
