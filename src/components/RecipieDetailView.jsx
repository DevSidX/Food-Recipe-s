import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useFetch, API_URL } from './useFetch';
import { BookOpen, Loader } from 'lucide-react';
import { ChevronLeft, Utensils } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const RecipieDetailView = () => {
  const { id } = useParams() // destructuring is used to extract values from the array  ans useParams to use the current link
  const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`)

  const meal = data?.meals?.[0]

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className='animate-spin inline-block mr-2 text-blue-400' />
        Preparing your's recipe...
      </div>
    )

  const ingredients = [] // array

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]

    const measure = meal[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      })
    }
  }

  const instructions = meal.strInstructions ? meal.strInstructions // if instructions exists then transform it and put it into array OR
    .split(".")                          // split through .
    .map((step) => step.trim())         // removes extra space
    .filter((step) => step.length > 0) // it removes empty steps " "
    : []                              // empty array

  return (
    <main className='max-w-8xl mx-auto px-4 sm:px-6 lg:py-8 py-8'>
      <Link to={'/'} className='text-green-400 hover:text-green-300 flex items-center mb-6 font-medium transition text-lg group'>
        <ChevronLeft className='w-6 h-6 m-1 transition' /> Back to Dashboard
      </Link>

      <div className="bg-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl shadow-black/70 border border-gray-800">
        <div className="lg:flex lg:space-x-12">

          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className='text-4xl font-black text-gray-100 mb-6 leading-tight'>
              {meal?.strMeal}
            </h1>
            <img
              src={meal.strMealThumb}
              className='w-100 h-100 rounded-xl shadow-2xl shadow-black/50 object-cover border-4 border-gray-800 ring-2 ring-blue-500/50 mx-5' />
          </div>

          <div className="lg:w-1/2 bg-gray-800 rounded-xl shadow-inner shadow-black/30 border border-gray-700">
            <h2 className='text-3xl font-bold text-green-400 mb-6 flex items-center border-b border-gray-700 p-3 pt-5'>
              <Utensils className='w-7 h-7 mr-3 text-blue-500' />
              Key Ingridients
            </h2>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 list-none p-0 '>
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className='flex items-start text-gray-300 text-base ml-5'>
                  <span
                    className='text-blue-400 font-extrabold text-lg mr-2 shrink-0'>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <span
                    className='font-semibold text-white mr-1'>
                    {item.measure}
                  </span>
                  {" "} {/* just space */}
                  {item.ingredient}

                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="text-lg text-gray-400 space-x-3 flex flex-wrap gap-y-2 ">

                <span className="bg-blue-600 text-white ml-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md">
                  {meal.strCategory}
                </span>
                <span className="bg-green-600 text-white ml-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md">
                  {meal.strArea}
                </span>

              </div>
            </div>
          </div>

        </div>

        {/* INSTRUCTIONS */}
        <div className="mt-14 pt-8 border-t border-gray-800 ">
          <h2
            className='text-3xl font-bold text-gray-100 mb-8 flex items-center'>
            {" "}
            <BookOpen className='w-7 h-7 m-3 text-blue-500' /> Detailed Preparation Steps
          </h2>
          <ol
            className='space-y-6 list-none text-gray-300 '>
            {instructions.map((step, index) => (
              <li
                key={index}
                className='text-lg leading-relaxed bg-gray-800 p-5 rounded-xl border-l-6 border-blue-500 shadow-lg shadow-black-30 transition duration-300 hover:bg-gray-700/50'>
                <span className='font-extrabold text-green-400 mr-3 text-xl'>    {/* text instructions*/}
                  {index + 1}
                </span>
                {step.trim()}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  )
}

export default RecipieDetailView