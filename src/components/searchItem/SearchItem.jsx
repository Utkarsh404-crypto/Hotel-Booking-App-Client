import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
	return (
		<div className="searchItem">
			<img
				src={item.pics[0]}
				alt=""
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">HOTEL</h1>
				<span className="siDistance">{item.distance} from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="siFeatures">{item.hoteldesc}</span>
				<span className="siCancelOp">Free cancellation </span>
				<span className="siCancelOpSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">
				{item.hotelrating && (
					<div className="siRating">
						<span>Astonishing</span>
						<button>{item.hotelrating}</button>
					</div>
				)}
				<div className="siDetailTexts">
					<span className="siPrice">${item.cheapestprice}</span>
					<span className="siTaxOp">Includes taxes and fees</span>
					<Link to={`/hotels/${item._id}`}>
						<button className="siCheckButton">See availability</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
