import React from "react";
import { Link } from "react-router-dom";

const ItemShoe = ({ image, name, price, id }) => {
  return (
    <div>
      <img src={image} alt="" className="w-full" />
      <h3>{name}</h3>
      <p>Giá tiền: {price}</p>
      <Link
        to={`/demo-detail-use-effect/${id}`}
        className="py-2 px-5 text-white bg-black rounded-md mt-5 inline-block"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default ItemShoe;
