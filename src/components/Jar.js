import React from "react";

import AddWord from "./AddWord";
import Question from "./Question";

function Jar({
  show,
  addWordModal,
  handleWordModal,
  questionModal,
  handleQuestionModal,
}) {
  return (
    <>
      <main class=" text-center text-5xl flex-1 flex flex-wrap ">


        <div className="items-center text-center justify-center flex-1 flex flex-wrap">
          <div className="text-center justify-items-center">
            <AddWord status={addWordModal} handleWordModal={handleWordModal} />
            <Question
              status={questionModal}
              handleQuestionModal={handleQuestionModal}
            />

            <p className="mb-4 text-5xl italic text-neutral-950 dark:text-white">Click and test yourself</p>
            <div className="flex justify-center">
              <div
                onClick={handleQuestionModal}
                className="rounded-full bg-neutral-950 dark:bg-white hover:scale-105 cursor-pointer w-72 h-72"
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Jar;
