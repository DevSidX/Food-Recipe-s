import { useFetch } from "./useFetch"
import { Clock, Loader } from "lucide-react"
import TrendingSliderDesktop from "./TrendingSliderDesktop"
import TrendingSliderMobile from "./TrendingSliderMobile"

export default function TrendingSlider({ title, fetchUrl }) {
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
    <section className="mt-4 mx-auto">
      <h2 className="sm:text-2xl md:text-3xl font-bold text-gray-100 mb-6 flex  items-center">
        <Clock className="w-6 h-6 mr-3 text-blue-500" />
        {title}
      </h2>

      {/* for the Desktop */}
      <div className="hidden sm:block">
        <TrendingSliderDesktop meals={meals} />
      </div>

      {/* for the Mobile */}
      <div className="block sm:hidden">
        <TrendingSliderMobile meals={meals} />
      </div>
    </section>
  )
}
