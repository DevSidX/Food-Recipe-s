import Slider from "react-slick"
import { Link } from "react-router-dom"

const mobileSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 2,
  swipeToSlide: true,
  speed: 400
}

const TrendingSliderMobilejsx = ({ meals }) => {
  return (
    <Slider {...mobileSettings}>
      {meals.map(meal => (
        <div
          key={meal.idMeal}
          className="px-3">
          <Link
            to={`/recipe/${meal.idMeal}/`}>
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 flex justify-center">
              <img
                src={meal.strMealThumb}
                className="h-24 w-24 rounded-xl border border-green-400"
              />
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default TrendingSliderMobilejsx