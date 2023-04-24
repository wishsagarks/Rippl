import React, { useState, useEffect } from "react";
import axios from "axios";
import Podcast from "./Podcast";
import Nav from "./Nav";

const Dashboard = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   fetchPopularPodcasts();
  // }, []);
  const [mutex, setMutex] = useState(false);
  const pod = [
    {
      _id: "1234",

      name: "Jayanti",
      description: "shdahsjdhasjkdh",
      type: "video",
    },
    {
      _id: "24243",

      name: "Jayanti",
      description: "shdahsjdhasjkdh",
      type: "Audio",
    },
    {
      _id: "31243",

      name: "Jayanti",
      description: "shdahsjdhasjkdh",
      type: "video",
    },
    {
      _id: "231",

      name: "Jayanti",
      description: "shdahsjdhasjkdh",
      type: "video",
    },
  ];
  const fetchPopularPodcasts = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/podcasts/popular"
    );
    setPodcasts(response.data);
  };
  const Audio = [];
  const video = [];
  pod.map((podcast) => {
    if (podcast.type === "Audio") {
      Audio.push(podcast);
    } else {
      video.push(podcast);
    }
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery) {
      return fetchPopularPodcasts();
    }

    const response = await axios.get(
      `http://localhost:5000/api/podcasts/search?query=${searchQuery}`
    );
    setPodcasts(response.data);
  };

  return (
    <div className="public-route-bg min-h-screen h-fit w-full scrollbar-container">
      <div className="scrollbar-track">
        <div className="scrollbar-thumb"></div>
      </div>
      <div className="flex overflow-x-hidden relative ">
        <Nav />
        <div className="flex flex-col">
          <div className="pt-5 pb-2 ml-6 flex md:gap-10 gap-3">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search podcasts..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="rounded-full w-[55vw] py-3 px-5 text-gray-400 outline-none border-none focus:border-none"
              />
              <button
                type="submit"
                className="py-4 bg-white text-black ml-2 rounded-full px-4"
              >
                <img src="searchicon.svg" alt="" className="h-5" />
              </button>
            </form>
            <div className="flex md:gap-6 gap-2 items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  sessionStorage.removeItem("token");
                  window.location.href = "/";
                }}
                className="text-white poppins text-right"
              >
                Log Out
              </button>
              <div className="rounded-full bg-white md:h-12 md:w-12 h-0"></div>
            </div>
          </div>
          <div className="bg-[#DBB98B] w-[150vw] h-1 mt-4"></div>

          <div className="flex xl:gap-32 md:px-10">
            <div className="flex flex-col pt-12 gap-12 ">
              <h1 className="poppins text-[#F7CE7A] text-7xl text-center md:text-left font-bold">
                Rippl
              </h1>
              <div className="flex flex-col gap-12 items-center md:items-start">
                <h2 className="poppins text-[#F7CE7A] text-lg text-center w-[100vw] md:w-auto md:text-left">
                  Let your stories ripple through hearts{" "}
                </h2>
                <button className="rounded-full dash-btns w-48 py-2 flex gap-4 px-5 ">
                  <img src="recenticon.svg" alt="" />
                  Go to Recents
                </button>
              </div>
            </div>
            <img
              src="dashboard.svg"
              alt=""
              className="md:h-96 hidden md:block"
            />
          </div>

          <h2 className="poppins text-[#F7CE7A] text-4xl font-bold md:font-normal text-center w-[100vw] md:text-5xl md:text-left md:ml-5 mt-10">
            Popular Video Podcasts
          </h2>
          <div className=" md:w-[80vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-24 xl:grid-cols-2 pl-10 ">
              {video.map((podcast) => (
                <Podcast
                  key={podcast._id}
                  podcast={podcast}
                  mutex={mutex}
                  setMutex={setMutex}
                  isFavorite={false}
                />
              ))}
            </div>
          </div>
          <h2 className="poppins text-[#F7CE7A] text-4xl font-bold md:font-normal text-center w-[100vw] md:text-5xl md:text-left md:ml-5 mt-10">
            Popular Audio Podcasts
          </h2>
          <div className=" md:w-[80vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-24 xl:grid-cols-2 pl-10 ">
              {Audio.map((podcast) => (
                <Podcast
                  key={podcast._id}
                  podcast={podcast}
                  isFavorite={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Dashboard;
