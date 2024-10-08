const RestaurantCard = (props) => {
    const { resData } = props;
      // Check if the resData object is being passed correctly
    const { name, cuisines, rating, costForTwo, deliveryTime, image } = resData;
    console.log(resData);

    return (
        <div className="res-card">
            <img className="res-logo" alt={`${name} logo`} src={image} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{rating} stars</h4>
            <h4>${costForTwo / 100} for two</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};
export default RestaurantCard;
