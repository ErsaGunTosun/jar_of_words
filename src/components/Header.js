import React from "react";

function Header({ show, handleShow, handleWordModal }) {

  const exportWords = ()=> {
    const fileData = localStorage.getItem("words");
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "words.json";
    link.href = url;
    link.click();
  }

  const changeTheme = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove("dark");
    } else if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add("dark");
    } else {
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


  return (
    <header className="text-end py-3">
      <div className="flex justify-end gap-5 mr-5 ">
        <button
          onClick={openModal}
          type="button"
          className="text-white dark:text-neutral-950 font-semibold italic bg-neutral-950 hover:bg-neutral-700
          dark:bg-white dark:hover:bg-neutral-200
           focus:outline-none focus:ring-1 focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          Add Word
        </button>

        <p
          className="cursor-pointer m-0 p-0 align-middle h-fit"
          onClick={handleShow}
        >
          <i className="fa-solid fa-gear text-2xl text-neutral-950 dark:text-white  focus:animate-spin-slow"></i>
        </p>
      </div>



      <div className="absolute w-full">
        {show && (
          <div className="text-white dark:text-neutral-950  flex justify-end static">
            <div className="mr-5 rounded-md text-lg text-start">
              <p className=" pb-1 pt-2  px-6 rounded-t-md  bg-neutral-950 hover:bg-neutral-700 dark:bg-white dark:hover:bg-neutral-200 cursor-pointer">
                <i className="fa-solid fa-file-import"></i> Words Save
              </p>

              <p onClick={exportWords} className=" py-1 px-6 bg-neutral-950 hover:bg-neutral-700 dark:bg-white dark:hover:bg-neutral-200 cursor-pointer">
                <i className="fa-solid fa-floppy-disk"></i> Words Export
              </p>

              <p
                onClick={changeTheme}
                className="pt-1 pb-2 px-6 bg-neutral-950 rounded-b-md hover:bg-neutral-700 dark:bg-white dark:hover:bg-neutral-200 cursor-pointer"
              >
                {localStorage.theme === "light" ? (
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
    </header>
  );
}

export default Header;
