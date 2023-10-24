import useSWR from "swr";
import useDebounce from "../../Hook/useDebounce";
import React, { Fragment, useEffect, useState } from "react";
import { apiKey, fetcher } from "../../Config/ConfigApi";
import ImagePage from "./ImagePage";
import { Route, Routes } from "react-router-dom";
import FavoriteImage from "../Auth/FavoriteImage";
import Header from "./Header";

// Mặc định set tạm 10 item
const ITEM_PER_PAGE = 12;

const HomeLanding = () => {
  const [nextPage, setNextPage] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [queryData, setQueryData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const searchDebounce = useDebounce(inputValue, 1000);

  // Format lại api (nếu có searchDebounce thì fetch api seach còn lại thì fetch api list)
  const fetchUrl = searchDebounce
    ? `https://api.unsplash.com/search/photos?page=${nextPage}&query=${searchDebounce}&client_id=${apiKey}`
    : `https://api.unsplash.com/photos?page=${nextPage}&per_page=${ITEM_PER_PAGE}&client_id=${apiKey}`;

  // Handle click outside - cái này t ko đụng đến

  // Chạy cái useEffect này nếu như có data thì useSWR trả ra
  const { data, isLoading } = useSWR(fetchUrl, fetcher);
  // Sau đó check xem có searchDebounce hay ko co1 thì set vào cái state query vì data lúc này là của search api nên cần state riêng để lưu
  // * Lưu ý state sẽ bị stale vì khi fetch api mới data mới sẽ ghi đè lên data cũ làm state bị stale
  // -> Cách fix sử dụng 1 callback để clone lại state trước đó rồi add thêm state mới vào
  // Fix được loadmore
  useEffect(() => {
    if (data) {
      if (searchDebounce) {
        setQueryData((prevData) => [...prevData, ...data.results]);
      } else {
        setFetchedData((prevData) => [...prevData, ...data]);
      }
    }
  }, [data, searchDebounce]);

  // Thêm loading
  if (!data) return null;
  return (
    <Fragment>
      <section>
        <Header inputValue={inputValue} setInputValue={setInputValue}></Header>
      </section>
      {isLoading && (
        <div className="flex items-center justify-center mt-40">
          <div class="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <Routes>
          <Route
            path="/"
            element={
              <ImagePage
                imageData={fetchedData}
                search={searchDebounce}
                searchImageData={queryData}
                newPage={setNextPage}
              ></ImagePage>
            }
          ></Route>
          <Route
            path="/favorite"
            element={<FavoriteImage></FavoriteImage>}
          ></Route>
        </Routes>
      )}
    </Fragment>
  );
};

export default HomeLanding;
