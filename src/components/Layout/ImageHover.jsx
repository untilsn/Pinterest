import React, { useState } from "react";

const ImageHover = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSave = () => {
    // Lấy danh sách các mục đã lưu từ Local Storage (nếu có)
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

    // Kiểm tra xem mục đã tồn tại trong danh sách hay chưa
    const isItemSaved = savedItems.some(
      (savedItem) => savedItem.id === item.id
    );

    if (!isItemSaved) {
      // Nếu mục chưa tồn tại, thêm nó vào danh sách
      savedItems.push(item);

      // Lưu danh sách đã cập nhật vào Local Storage
      localStorage.setItem("savedItems", JSON.stringify(savedItems));

      setIsFavorite(!isFavorite);
    } else {
    }
    if ((isFavorite = false)) {
      localStorage.removeItem("savedItems", JSON.stringify(savedItems));
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col items-end justify-between h-full">
        <button
          onClick={() => handleSave()}
          className={`${
            isFavorite
              ? "bg-black bg-opacity-80 text-white hover:bg-opacity-100"
              : "bg-red-600 hover:bg-red-700"
          }   font-medium hover cursor-pointer inline-block px-4 py-2 text-white w-full max-w-[80px] text-center  favorite rounded-3xl`}
        >
          Save
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center bg-white rounded-full cursor-pointer w-7 h-7 hover:bg-opacity-100 link-image bg-opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
              />
            </svg>
          </button>
          <button className="flex items-center justify-center bg-white rounded-full cursor-pointer w-7 h-7 hover:bg-opacity-100 link-image bg-opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageHover;
