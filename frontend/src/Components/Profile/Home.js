
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  function func() {
    window.location.assign('/upload')
  }
  return (
    <>

      <div className='flex  justify-between w-auto h-auto'>
        <div className='flex w-auto bg-cyan-500'>
          Hello
        </div>
        <div className='flex w-auto mt-auto'>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="..." alt="..." />
            <div className="px-6 py-4">
              <h5 className="font-bold text-xl mb-2">Card title</h5>
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link to="/" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Go somewhere
              </Link>
            </div>
          </div>

        </div>
        <div className='flex w-auto bg-green-500'>
          Helllo
        </div>
      </div>

      <div className="relative h-screen">
        <div className="absolute bottom-0 right-0 grid grid-cols-3 gap-4 justify-end items-end p-4 mb-4">
          <div>
            <button type='submit' onClick={func} >
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/plus.png" alt="plus" />

            </button>

          </div>
        </div>
      </div>

    </>

  )
}

export default Home