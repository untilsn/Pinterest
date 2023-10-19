import React, { Fragment, useEffect, useRef, useState } from "react";
import Menu from "../Auth/Menu";
import useDebounce from "../../Hook/useDebounce";
import { apiKey, fetcher } from "../../Config/ConfigApi";
import useSWR from "swr";

const Header = () => {
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchDebounce = useDebounce(inputValue, 1000);
  const [nextPage, setNextPage] = useState(1);

  const [url, setUrl] = useState(
    `https://api.unsplash.com/photos?page=${nextPage}&per_page=15&client_id=${apiKey}`
  );
  useEffect(() => {
    const { data } = useSWR(url, fetcher);
  }, []);

  useEffect(() => {
    function handleClickOutSide(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  useEffect(() => {
    if (searchDebounce) {
      setUrl(
        `https://api.unsplash.com/search/photos?page=1&query=${searchDebounce}&client_id=${apiKey}`
      );
    } else {
      setUrl(
        `https://api.unsplash.com/photos?page=1&per_page=15&client_id=${apiKey}`
      );
    }
  }, [searchDebounce, nextPage]);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const { data } = useSWR(url, fetcher);
  if (!data) return;

  return (
    <Fragment>
      <div className="bg-white  page-container header fixed top-0 left-0 right-0  h-[72px] py-1 px-4 flex items-center gap-8">
        <a href="" className="">
          <div className="max-w-[24px] h-[24px] ml-2">
            <img
              src="https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg"
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </a>
        <span className="font-semibold text-[17px] text-[#111111]">Home</span>
        <span className="font-semibold text-[17px] text-[#111111]">
          Explore
        </span>
        {/* create */}
        <div className="flex items-center gap-1 font-semibold text-[17px] text-[#111111]">
          <h1>Create</h1>
          <span className="-mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>{" "}
        </div>
        {/* search */}
        <div className=" rounded-[30px] bg-opacity-30 hover:bg-opacity-40 transition-all flex items-center w-full max-w-[950px] gap-4 bg-clr-gb-2 px-4 py-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="currentColor"
              className="w-5 h-5 font-bold text-clr-page-bg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className="rounded-lg text-clr-page-bg placeholder:text-clr-page-bg   border-none outline-none w-full max-w-[950px] px-4 py-2 bg-transparent"
          />
        </div>
        {/* notificant */}
        <div className="flex items-center gap-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>

          {/* auth */}
          <div className="flex items-center gap-3 ">
            <div className="max-w-[24px] h-[24px]">
              <img
                src="https://images.unsplash.com/photo-1682695795557-17447f921f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div ref={menuRef} className="relative">
              {showMenu && (
                <div className=" absolute bg-[#FFFFFF] top-20 right-1 rounded-xl  hover:active:scale-[none] shadow-lg">
                  <Menu></Menu>
                </div>
              )}
              <div
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 -mb-1 rounded-full hover:bg-clr-gb-1 hover:active:scale-[0.95] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex gap-3 mt-32 page-container">
            <div className="gap-5 columns-5 ">
              {dataApi.results
                ? dataApi.results.length > 0 &&
                  dataApi.results.map((item) => (
                    <div className="h-auto mx-auto " key={item.id}>
                      <img
                        src={item.urls.raw}
                        alt=""
                        className="object-cover w-full h-auto my-5 rounded-xl"
                      />
                    </div>
                  ))
                : dataApi.length > 0 &&
                  dataApi.map((item) => (
                    <div className="h-auto mx-auto " key={item.id}>
                      <img
                        src={item.urls.raw}
                        alt=""
                        className="object-cover w-full h-auto my-5 rounded-xl"
                      />
                    </div>
                  ))}
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => setNextPage(nextPage + 1)}
              className="p-4 text-lg bg-clr-blue rounded-xl"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
