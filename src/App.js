import React, { useState } from "react";

import Header from "./components/Header";
import Jar from "./components/Jar";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);
  const [addWordModal, setAddWordModal] = useState(false);
  const [questionModal, setQuestionModal] = useState(false);
  const [words, setWords] = useState([]);

  // modal visible and hidden functions
  const handleShow = () => setShow(!show);
  const handleWordModal = () => setAddWordModal(!addWordModal);
  const handleQuestionModal = () => setQuestionModal(!questionModal);

  return (
    <div className="min-h-screen flex flex-col mx-auto bg-white dark:bg-neutral-950 ">

      <Header
        setWords={setWords}
        show={show}
        handleShow={handleShow}
        handleWordModal={handleWordModal}
      />

      <Jar
        words={words}
        setWords={setWords}
        show={show}
        addWordModal={addWordModal}
        handleWordModal={handleWordModal}
        questionModal={questionModal}
        handleQuestionModal={handleQuestionModal}
      />

      <Footer />

    </div>
  );
}

export default App;
