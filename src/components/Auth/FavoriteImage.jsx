import React, { useEffect, useState } from "react";
import ImageHover from "../Layout/ImageHover";

const FavoriteImage = ({}) => {
  const [itemFavorite, setItemFavorite] = useState([]);
  useEffect(() => {
    const storedLikedItems =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setItemFavorite(storedLikedItems);
  }, []);
  console.log(itemFavorite);

  return (
    <div className="mt-[100px] page-container">
      <h1 className="text-3xl font-semibold text-black">Favorite Image</h1>
      <div className="items-center gap-5 mt-10 columns-5">
        {itemFavorite.length > 0 &&
          itemFavorite.map((item) => {
            const isLiked = itemFavorite.some(
              (likedItem) => likedItem?.id === item?.id
            );
            return (
              <div key={item.id} className="relative h-auto mx-auto group">
                <div className="absolute inset-0 z-40 w-full h-full p-4 transition-opacity opacity-0 group-hover:opacity-100 ">
                  <ImageHover like={isLiked} items={item}></ImageHover>
                </div>
                <img
                  src={item?.urls?.small}
                  alt=""
                  className="object-cover w-full h-auto my-5 rounded-xl"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FavoriteImage;
