import React, { useState } from "react";

import Header from "./components/Header";
import Jar from "./components/Jar";
import Footer from "./components/Footer";
import AddWord from "./components/AddWord";

function App() {
  const [show, setShow] = useState(false);
  const [addWordModal, setAddWordModal] = useState(false);
  const [questionModal, setQuestionModal] = useState(false);

  const handleShow = () => setShow(!show);
  const handleWordModal = () => setAddWordModal(!addWordModal);
  const handleQuestionModal = () => setQuestionModal(!questionModal);
  return (
    <div class="min-h-screen flex flex-col mx-auto bg-white dark:bg-neutral-950 ">
      <Header
        show={show}
        handleShow={handleShow}
        handleWordModal={handleWordModal}
      />

      <Jar
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
