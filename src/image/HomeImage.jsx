import React from "react";
import useSWR from "swr";
const HomeImage = () => {
  const { data, error, isLoading } = useSWR("", fetcher);
  return <div></div>;
};

export default HomeImage;
