import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, Loader } from 'lucide-react'
import RecipieCard from './RecipieCard'

const SearchView = ({ meals, loading }) => {
  return (
    <>
      <main className='max-w-8xl mx-auto px-4 sm:px-6 lg:py-8 py-8'>
        <Link to={'/'} className='text-green-400 hover:text-green-300 flex items-center mb-6 font-medium transition text-lg group'>
          <ChevronLeft className='w-6 h-6 m-1 transition' /> Back to Dashboard
        </Link>
      </main>
      {/* If loading is true animat-spin loading*/}
      {loading &&
        (<div className="text-center p-8 text-gray-300">
          <Loader className='animate-spin inline-block mr-2 text-blue-400' />Searching the database...
        </div>)
      }

      {!loading && meals.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal,index) => (
            <RecipieCard key={index} meal={meal} />
          ))}
        </div>
      )}
    </>
  )
}

export default SearchView