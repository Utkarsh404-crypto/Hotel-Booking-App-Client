import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch(
		"https://hotel-booking-server-bo1n.onrender.com/api/hotels?featured=false&limit=4"
	);

	return (
		<div className="fp">
			{" "}
			{loading ? (
				"Loading"
			) : (
				<>
					{data.map((item) => (
						<div
							className="fpItem"
							key={item._id}>
							<img
								src={item.pics[0]}
								alt=""
								className="fpImg"
							/>
							<span className="fpName"> {item.name} </span>{" "}
							<span className="fpCity"> {item.city} </span>{" "}
							<span className="fpPrice">
								Starting from $ {item.cheapestprice}{" "}
							</span>{" "}
							{item.hotelrating && (
								<div className="fpRating">
									<button> {item.hotelrating} &#9733; </button> <span>Excellent </span>{" "}
								</div>
							)}{" "}
						</div>
					))}{" "}
				</>
			)}{" "}
		</div>
	);
};

export default FeaturedProperties;
