import React, { Fragment } from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../Config/ConfigApi";
import { v4 } from "uuid";

const Main = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.unsplash.com/photos?page=1&per_page=15&client_id=${apiKey}`,
    fetcher
  );
  if (!data) return;
  console.log(data);
  // const movieResult = data.urls;
  // console.log(movieResult);

  return (
    <Fragment>
      <div className="flex gap-3 mt-32 page-container">
        <div className="grid grid-cols-5 gap-5 =">
          {data.length > 0 &&
            data.map((item) => (
              <div className="h-auto mx-auto my-auto " key={item.id}>
                <img
                  src={item.urls.raw}
                  alt=""
                  className="object-cover w-full h-auto rounded-xl"
                />
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
