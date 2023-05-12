import React, { useState } from "react";

function Header({ show, handleShow, handleWordModal }) {
  const [status, setStatus] = React.useState(false);
  const [theme, setTheme] = useState(localStorage.theme);
  const exportWords = () => {
    const fileData = localStorage.getItem("words");
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "words.json";
    link.href = url;
    link.click();
  }

  const showFile = async (e) => {
    e.preventDefault()
    if (e.target.files.length > 0) {


      const extension = e.target.files[0].name.split('.').pop();
      if (extension !== 'json') {
        setStatus(false);
        alert('Please upload a json file')
      }
      else {
        const reader = new FileReader()
        reader.onload = async (e) => {
          console.log(reader);
          console.log(e.target.fileName);
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
          console.log(wordsJson)
          localStorage.setItem('words', JSON.stringify(wordsJson));
        };
        reader.readAsText(e.target.files[0])
      }
    }
  }

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



  const openModal = () => {
    if (show) {
      handleShow();
    }
    handleWordModal();
  };

  const closeOpenModal = () => {
    if (!status) handleShow();

    setStatus(!status);
  }

  return (
    <header className="text-end py-3">
      <div className="flex justify-end items-center gap-5 mr-5 ">
        <button
          onClick={openModal}
          type="button"
          className="text-zinc-400 dark:text-neutral-200 hover:bg-zinc-200 dark:hover:bg-neutral-800 font-semibold italic 
          bg-tranparent dark:bg-trasnparent border-2 dark:border-neutral-800 
          focus:outline-none focus:ring-1 focus:ring-gray-300  rounded-lg text-base px-5 py-2"
        >
          Add Word
        </button>

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



      <div className="absolute w-full mt-3">
        {show && (
          <div className="text-zinc-500 dark:text-neutral-200 flex justify-end static">
            <div className="mr-5 rounded-md text-lg text-start border-2 border-zinc-300 dark:border-neutral-800">

              <p onClick={closeOpenModal} className=" pb-1 pt-2 px-6 rounded-t-md
               bg-zinc-200 hover:bg-zinc-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer">
                <i className="fa-solid fa-file-import"></i> Words File Import
              </p>

              <p onClick={exportWords} className=" py-1 px-6
               bg-zinc-200 hover:bg-zinc-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer">
                <i className="fa-solid fa-floppy-disk"></i> Words Export
              </p>

              <p
                onClick={changeTheme}
                className="pt-1 pb-2 px-6 rounded-b-md 
                bg-zinc-200 hover:bg-zinc-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer"
              >
                {theme === "light" ? (
                  <span>
                    <i className="fa-solid fa-moon"></i> Dark Mode
                  </span>
                ) : (
                  <span>
                    <i className="fa-solid fa-sun"></i> Light Mode
                  </span>
                )}
              </p>

            </div>
          </div>
        )}
      </div>


      <div id="popup-modal" tabIndex="-1" className={`${status ? "" : "hidden"} bg-black/10 h-full justify-center items-center flex fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`}>
        <div className="relative w-full max-w-sm max-h-full">
          <div className="relative bg-neutral-900 rounded-lg">

            <button onClick={closeOpenModal} type="button" className="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="">
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300/25 border-dashed rounded-md cursor-pointer m-3">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Json</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" onChange={(e) => showFile(e)} />
                </label>
              </div>
            </div>




          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;
