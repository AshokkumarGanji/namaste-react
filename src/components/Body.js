import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    // Local state Variable - Super Powerful Variable
    const [listOfRestaurants, setlistOfRestaurant] = useState(resList);
 
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        // Filter logic
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.rating > 4 // Directly access avgRating
                        );
                        setlistOfRestaurant(filteredList);
                    }}
                >
                    Top Rated restaurant
                </button>
            </div>
            <div className="res-container">
                {/* Dynamically generate RestaurantCard for each item in resList using map */}
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
