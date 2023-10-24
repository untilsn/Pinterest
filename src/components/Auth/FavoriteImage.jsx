import React from "react";
import ImageHover from "../Layout/ImageHover";

const FavoriteImage = ({}) => {
  const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
  console.log(savedItems);

  return (
    <div className="mt-[100px] page-container">
      <h1 className="text-3xl font-semibold text-black">Favorite Image</h1>
      <div className="items-center gap-5 mt-10 columns-5">
        {savedItems.length > 0 &&
          savedItems.map((item) => (
            <div key={item.id} className="relative h-auto mx-auto group">
              <div className="absolute inset-0 z-40 w-full h-full p-4 transition-opacity opacity-0 group-hover:opacity-100 ">
                <ImageHover item={item}></ImageHover>
              </div>
              <img
                src={item?.urls?.small}
                alt=""
                className="object-cover w-full h-auto my-5 rounded-xl"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FavoriteImage;
