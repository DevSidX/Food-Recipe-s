import Slider from "react-slick"
import RecipieCard from "./RecipieCard"

const desktopSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: "linear"
}

const RecipieSliderDesktop = ({ meals }) => {
  return (
    <Slider {...desktopSettings}>
      {meals.map(meal => (
        <div
          key={meal.idMeal}
          className="px-10 flex justify-center"
        >
          <RecipieCard meal={meal} />
        </div>
      ))}
    </Slider>
  )
}

export default RecipieSliderDesktop
