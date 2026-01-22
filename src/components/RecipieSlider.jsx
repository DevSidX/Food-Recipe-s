import React from 'react'
import { useFetch } from './useFetch'
import RecipieCard from './RecipieCard'
import Slider from 'react-slick'
import { Clock, Loader } from 'lucide-react'

const RecipieSlider = ({ title, fetchUrl }) => {

  const { data, loading, error } = useFetch(fetchUrl)
  console.log("My meal data", data?.meals);
  const meals = data?.meals || []

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    
  };

  if (loading) {
    return <div className="text-center p-6 text-gray-300">
      <Loader className='animate-spin inline-block mr-2 text-blue-400' />
      Loading {title}...
    </div>
  }

  return (
    <>
      <section className='mt-4 mx-auto'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-4 tracking-tight border-l-4 border-green-400 pl-4 flex items-center'>
          <Clock className='w-6 h-6 m-3 text-blue-500' />
          {title}
        </h2>
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {meals.map((meal) =>
              <div key={meal.idMeal} className='px-10 flex justify-center'>
                <RecipieCard meal={meal} />
              </div>
            )}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default RecipieSlider