import React from "react";
import ImageHover from "./ImageHover";
import ImagesCart from "./ImagesCart";

const MainPage = ({ search, searchImageData, imageData, newPage }) => {
  return (
    <section>
      <div className="z-10 flex gap-3 mt-32 page-container">
        <div className="gap-5 columns-5 ">
          {/* Khi render check nếu có searchDebounce thì render state queryData còn ko có thì render  fetchedData */}

          {/* --> Dùng item.urls.small để ảnh nhẹ */}
          {search
            ? searchImageData.length > 0 &&
              searchImageData.map((item, index) => (
                <ImagesCart
                  key={`${item.id}_${index}`}
                  items={item}
                ></ImagesCart>
              ))
            : imageData.length > 0 &&
              imageData.map((item, index) => (
                <ImagesCart
                  key={`${item.id}_${index}`}
                  items={item}
                ></ImagesCart>
              ))}
        </div>
      </div>

      {/* State cũng bị stale khi loadmore nên fix như cách trên */}
      <div className="py-10 text-center">
        <button
          type="button"
          onClick={() => newPage((prevPage) => prevPage + 1)}
          className="p-3 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          {"Load More"}
        </button>
      </div>
    </section>
  );
};

export default MainPage;
