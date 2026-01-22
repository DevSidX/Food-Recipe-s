import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import RecipieDetailView from './components/RecipieDetailView'
import SearchView from './components/SearchView'
import CuisineBar from './components/Cuisine'
import HomeView from './components/HomeView'
import { useCallback } from 'react'
import { useState } from 'react'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/'

function App() {

  const [searchResult, setSearchResult] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)

  const handleSearch = useCallback(async (query) => {
    setSearchResult([]) // result is empty
    setSearchLoading(true) // show loader while fetching

    try {
      const response = await fetch(`${API_URL}search.php?s=${query}`)
      if (!response.ok) {
        throw new Error(`Error :${response.status}`)  // if response does'nt occur
      }
      const result = await response.json()
      setSearchResult(result?.meals || []) // if result occurs then set it into setSearchResult otherwise empty array
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false) // stop showing loader
    }
  }, [])

  const filterRecipe = useCallback(async (query, filterType) => {
    setSearchResult([]) // empty result in array in first
    setSearchLoading(true)

    try {
      const response = await fetch(`${API_URL}filter.php?${filterType}=${query}`)
      if (!response.ok) {
        throw new Error(`Error :${response.status}`)
      }
      const result = await response.json()
      setSearchResult(result?.meals || [])  // if result occurs then set it into setSearchResult otherwise empty array
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false)
    }
  }, [])

  // FILTER BY CATEGORY

  const filterByCategory = useCallback((category) => {
    filterRecipe(category, "c")
  }, [filterRecipe])

  // FILTER BY AREA

  const filterByArea = useCallback((area) => {
    filterRecipe(area, "a")
  }, [filterRecipe])

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100">

        <Navbar handleSearch={handleSearch}/>
        <CuisineBar filterByArea={filterByArea} />

        <Routes>
          <Route
            path='/'
            element={<HomeView filterByCategory={filterByCategory} />}
          />
          <Route
            path='/Recipe/:id'   // :id is the dynamic name of the id  
            element={<RecipieDetailView />}
          />
          <Route
            path='/search/:query'
            element={
              <SearchView
                meals={searchResult}
                loading={searchLoading}
              />}
          />
        </Routes>

      </div>
    </Router>
  )

}
export default App
