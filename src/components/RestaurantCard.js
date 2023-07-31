import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  return (
    <div className="m-3 p-2 w-72 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="px-2">
      <h3 className="font-bold pb-2 text-lg">{name}</h3>
      <h4 className="text-sm pb-2">{cuisines.join(", ")}</h4>
      <div className="flex justify-between">
      <div className="bg-white px-1 w-12 border border-black rounded-lg flex justify-between items-center">{avgRating} <img src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png" className="w-4"/> </div>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} MINS</h4>
      </div>
      </div>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 translate-x-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
