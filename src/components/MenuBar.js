import React from 'react'

function MenuBar({ show, readFileModalHandle, exportWords, changeTheme, theme }) {
    return (
        <div className="absolute w-full mt-3">
            {show && (
                <div className="text-zinc-500 dark:text-neutral-200 flex justify-end static">
                    <div className="mr-5 rounded-md text-lg text-start border-2 border-zinc-300 dark:border-neutral-800">

                        {/** Import words file button */}
                        <p onClick={readFileModalHandle} className=" pb-1 pt-2 px-6 rounded-t-md bg-zinc-200 hover:bg-zinc-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer">
                            <i className="fa-solid fa-file-import"></i> Words File Import
                        </p>

                        {/** Export words file button */}
                        <p onClick={exportWords} className=" py-1 px-6 bg-zinc-200 hover:bg-zinc-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer">
                            <i className="fa-solid fa-floppy-disk"></i> Words Export
                        </p>

                        {/** Theme change Button */}
                        <p
                            onClick={changeTheme}
                            className="pt-1 pb-2 px-6 rounded-b-md bg-zinc-200 hover:bg-zinc-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer">
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
    )
}

export default MenuBar