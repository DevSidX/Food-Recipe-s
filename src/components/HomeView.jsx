import React from 'react'
import RecipieSlider from './RecipieSlider'
import TrendingSlider from './TrendingSlider'
import CategorySelection from './CategorySelection'
import { API_URL } from './useFetch'

const HomeView = ({filterByCategory}) => {
  return (
    <>
      <main className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <RecipieSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=a`}
        />
        <TrendingSlider
          title="Quick & Easy Meals"
          fetchUrl={`${API_URL}search.php?f=a`}
        />

        <CategorySelection filterByCategory={filterByCategory}/>
      </main>
    </>
  )
}

export default HomeView