import React, { useState } from "react";
import ImageHover from "./ImageHover";

const ImagesCart = ({ items }) => {
  const [favoriteImage, setFavoriteImage] = useState(Ơ);

  return (
    <div>
      <div className="relative h-auto mx-auto group">
        <div className="absolute inset-0 z-40 w-full h-full p-4 transition-opacity opacity-0 group-hover:opacity-100 ">
          <ImageHover item={items}></ImageHover>
        </div>
        <img
          src={items?.urls?.small}
          alt=""
          className="object-cover w-full h-auto my-5 rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImagesCart;
