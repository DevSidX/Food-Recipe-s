import Slider from "react-slick"
import { Link } from "react-router-dom"

const desktopSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
}

export default function TrendingSliderDesktop({ meals }) {
    return (
        <Slider {...desktopSettings}>
            {meals.map(meal => (
                <div
                    key={meal.idMeal}
                    className="px-10 flex justify-center">
                    <Link
                        to={`/recipe/${meal.idMeal}/`}>
                        <div className="relative bg-gray-900 rounded-xl shadow-xl border border-gray-800 p-5">
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
