import React from 'react'

function FileReadModal({status, readFileModalHandle, readFile}) {
  return (
    <div id="popup-modal" tabIndex="-1" className={`${status ? "" : "hidden"} bg-black/5 h-full justify-center items-center flex fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`}>
        <div className="relative w-full max-w-sm max-h-full">
          <div className="relative bg-zinc-300 dark:bg-neutral-800 rounded-lg">
            
            {/** Modal Close Button */}
            <button onClick={readFileModalHandle} type="button" className="absolute top-4 right-4 text-zinc-800 dark:text-neutral-300 border-zinc-200 dark:border-neutral-700 bg-transparent hover:text-zinc-700 hover:dark:text-neutral-100" data-modal-hide="popup-modal">
              <svg aria-hidden="true" className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            
            {/** Modal Body*/}
            <div>
              <div className="flex items-center justify-center w-full mt-6">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-zinc-500 dark:border-neutral-300 border-dashed rounded-md cursor-pointer m-3">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-zinc-500 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-zinc-500 dark:text-neutral-300"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-zinc-500 dark:text-neutral-300">only files with json extension can be uploaded </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" onChange={(e) => readFile(e)} />
                </label>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default FileReadModal