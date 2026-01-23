import { useFetch } from "./useFetch"
import { Clock, Loader } from "lucide-react"
import RecipieSliderDesktop from "./RecipeSliderDesktop"
import RecipieSliderMobile from "./RecipeSliderMobile"

const RecipieSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl)
  const meals = data?.meals || []

  if (loading) {
    return (
      <div className="text-center p-6 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    )
  }

  return (
    <section className="mt-10 mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center">
        <Clock className="w-6 h-6 m-2 text-blue-500" />
        {title}
      </h2>

      {/* Desktop / Tablet */}
      <div className="hidden sm:block">
        <RecipieSliderDesktop meals={meals} />
      </div>

      {/* Mobile */}
      <div className="block sm:hidden">
        <RecipieSliderMobile meals={meals} />
      </div>
    </section>
  )
}

export default RecipieSlider
