import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { additem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

const dispatch = useDispatch();
const handleAddButton = (item) => {
  dispatch(additem(item));

};

  return (
    <div className="bg-slate-100">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <div>₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</div>
            </div>
            <p className="text-xs text-slate-400">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute translate-y-24 ">
              <button className="p-1 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleAddButton(item)}>
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
