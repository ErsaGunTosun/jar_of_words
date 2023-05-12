import React, { useState } from "react";

import MenuBar from "./MenuBar";
import FileReadModal from "./FileReadModal";

function Header({ show, setWords, handleShow, handleWordModal }) {
  const [status, setStatus] = React.useState(false);
  const [theme, setTheme] = useState(localStorage.theme);


  // Export words to json file function
  const exportWords = () => {
    const fileData = localStorage.getItem("words");
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "words.json";
    link.href = url;
    link.click();
  }


  // Import words from json file function
  const readFile = async (e) => {
    e.preventDefault()
    if (e.target.files.length > 0) {
      const extension = e.target.files[0].name.split('.').pop();
      if (extension !== 'json') {
        alert('Please upload a json file')
      }
      else {
        const reader = new FileReader()
        reader.onload = async (e) => {
          const text = (e.target.result)
          let obj = JSON.parse(text);
          let wordsJson = JSON.parse(localStorage.getItem('words'));
          for (let i = 0; i < obj.length; i++) {
            for (let j = 0; j < wordsJson.length; j++) {
              if (obj[i].id === wordsJson[j].id) {
                console.log(obj[i]);
                obj.splice(i, 1);
              }
            }
          }
          wordsJson.push(...obj);
          localStorage.setItem('words', JSON.stringify(wordsJson));
          setWords(wordsJson);
        };
        reader.readAsText(e.target.files[0])
      }
      setStatus(false);
    }
    
  }


  // Change theme function
  const changeTheme = () => {
    if (localStorage.theme === 'dark') {
      setTheme('light');
      localStorage.theme = 'light';
      document.documentElement.classList.remove("dark");
    } else if (localStorage.theme === 'light') {
      setTheme('dark');
      localStorage.theme = 'dark';
      document.documentElement.classList.add("dark");
    } else {
      setTheme('light');
      localStorage.theme = 'light';
      document.documentElement.classList.remove("dark");
    }
  };


  // Add word modal handle function
  const addWordModalHandle = () => {
    if (show) {
      handleShow();
    }
    handleWordModal();
  };


  // Read file modal handle function
  const readFileModalHandle = () => {
    if (!status) handleShow();

    setStatus(!status);
  }

  return (
    <header className="text-end py-3">
      
      <div className="flex justify-end items-center gap-5 mr-5 ">

        {/** Add Word Modal Open Button */}
        <button
          onClick={addWordModalHandle}
          type="button"
          className="text-zinc-400 dark:text-neutral-200 hover:bg-zinc-200 dark:hover:bg-neutral-800 font-semibold italic 
          bg-tranparent dark:bg-trasnparent border-2 dark:border-neutral-800 
          focus:outline-none focus:ring-1 focus:ring-gray-300  rounded-lg text-base px-5 py-2"
        >
          Add Word
        </button>

        {/** Settings Menu bar button */}
        <p
          className="cursor-pointer flex m-0 align-middle rounded-md w-12 h-10 items-center justify-center
          bg-transparent hover:bg-zinc-200 border-2 dark:border-neutral-800 dark:hover:bg-neutral-800"
          onClick={handleShow}
        >
          <div className="text-zinc-400 dark:text-neutral-200">
            {
              show ? <i class="fa-solid fa-times text-xl"></i> : <i class="fa-solid fa-bars text-xl"></i>
            }
          </div>
        </p>
      </div>


      <MenuBar
        show={show}
        readFileModalHandle={readFileModalHandle}
        exportWords={exportWords}
        changeTheme={changeTheme}
        theme={theme}
      />

      <FileReadModal
        status={status}
        readFileModalHandle={readFileModalHandle}
        readFile={readFile}
      />

    </header>
  );
}

export default Header;
