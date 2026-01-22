import { useFetch } from './useFetch'
import Slider from 'react-slick'
import { Clock, Loader } from 'lucide-react'
import { Link } from 'react-router-dom'
import RecipieDetailView from './RecipieDetailView'

const TrendingSlider = ({ title, fetchUrl }) => {

  const { data, loading, error } = useFetch(fetchUrl)
  console.log("My meal data", data?.meals);
  const meals = data?.meals || []

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ]
  };

  if (loading) {
    return <div className="text-center p-8 text-gray">
      <Loader className='animate-spin inline-block mr-2 text-blue-400' />
      Loading {title}...
    </div>
  }

  return (
    <>
      <section className='mt-4 mx-auto'>
        <h2 className='text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center'>
          <Clock className='w-6 h-6 m-3 text-blue-500' />
          {title}
        </h2>
        <div className='w-full mx-auto'>
          <Slider {...settings}>
            {meals.map((meal) =>
              <div key={meal.idMeal} className='px-10 flex justify-center'>
                <Link to={`/recipe/${meal.idMeal}/`} >
                  {/* Trending slide */}
                  <div className='relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 mb-5'>

                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"> {/* Hover */}
                    </div>

                    <div className="flex justify-center items-center p-5">       {/* image*/}
                      <img
                        src={meal?.strMealThumb}
                        className='h-20 w-20 sm:h-24 sm:w-24 rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105' />
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default TrendingSlider