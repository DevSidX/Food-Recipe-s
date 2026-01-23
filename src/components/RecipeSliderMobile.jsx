import Slider from "react-slick"
import RecipieCard from "./RecipieCard"

const mobileSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  speed: 400
}

const RecipieSliderMobile = ({ meals }) => {
  return (
    <Slider {...mobileSettings}>
      {meals.map(meal => (
        <div
          key={meal.idMeal}
          className="px-3 flex justify-center"
        >
          <RecipieCard meal={meal} />
        </div>
      ))}
    </Slider>
  )
}

export default RecipieSliderMobile