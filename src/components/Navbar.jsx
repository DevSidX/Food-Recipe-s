import React, { useState } from 'react'
import { Zap, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()


  const searchHandler = (e) => {  // navigater to URL
    e.preventDefault()
    if (input.trim()) {  // trim() will remove the blank spaces if any 
      handleSearch(input.trim())   // trim() will remove the blank spaces if any 
      navigate(`/search/${input}`)
      setInput('')
    }
  }
  return (
    <nav className='sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-900/50'>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-18">

          <Link to={'/'}
            className='flex items-center text-2xl font-black text-white hover:text-blue-400 transition duration-300 tracking-widest'>
            <Zap className='w-7 h-7 mr-2 text-green-500 fill-yellow-400/20 ml-10' />
            <span className='font-bold'>Recipes</span>
          </Link>

          <form onSubmit={searchHandler} className='flex-1 max-w-lg mr-20 hidden sm:flex'>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='w-full px-5 py-2 border border-gray-700 bg-gray-900 text-gray-50 rounded-l-full focus:outline-none focus:ring-2  focus:ring-blue-600/50 transition placeholder-gray-500 shadow-inner shadow-black'
              placeholder='Search dishes, ingredients or cuisines' />
            <button
              type='submit'
              className='bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-r-full p-2.5 hover:from-blue-700 hover:to-cyan-600 hover:shadow-blue-800'>
              <Search />
            </button>
          </form>

        </div>
      </div>
    </nav>
  )
}

export default Navbar