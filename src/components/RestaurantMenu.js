import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, locality, areaName, avgRating, totalRatingsString, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const {loggedInUser} = useContext(UserContext);
  
  
    return (
    <div>
    <div className="mx-2 flex justify-between items-center border-b border-black">
      <div>
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="text-sm text-slate-600">{cuisines.join(", ")}</p>
      <p className="text-sm text-slate-600">
        {locality} , {areaName}
      </p>
      </div>
      <div>
      <div className="bg-green-600 my-2 px-2 h-14 w-24 border border-black rounded-lg">
      <div className=" flex justify-center items-center border-b border-slate-200">{avgRating} <img src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png" className="w-4"/> </div>
      <span className="text-xs">{totalRatingsString}</span>   
      </div>
      <div className="font-bold text-sm">{loggedInUser}</div>
      </div>   
      </div>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
