  import React, { useRef, useEffect, useState } from "react";
  import axios from "axios";
  import { motion } from "framer-motion";
  import jwtDecode from "jwt-decode";
  
  const Podcast = ({ podcast, userId, isFavorite, mutex, setMutex }) => {
    const mediaRef = useRef(null);
    
    const [Active, setActive] = useState(false);
    const [Favourite, setFavourite] = useState("unliked.svg");
    
    
    const user_id=jwtDecode(sessionStorage.getItem("token")).userId
  const handleClick = () => {
    if (!mutex) {
      setMutex(!mutex);
      setActive(!Active);
    } else if (mutex && Active) {
      setMutex(!mutex);
      setActive(!Active);
    }
  };

  useEffect(() => {
    const currentTime = localStorage.getItem(`podcast-${podcast._id}`);
    if (currentTime && mediaRef.current) {
      mediaRef.current.currentTime = currentTime;
    }
  }, [podcast._id]);

  useEffect(() => {
    const currentTime = localStorage.getItem(`podcast-${podcast._id}`);
    if (currentTime && mediaRef.current) {
      mediaRef.current.currentTime = currentTime;
    }
  }, [podcast._id]);

  const handleTimeUpdate = () => {
    if (mediaRef.current) {
      localStorage.setItem(`podcast-${podcast._id}`, mediaRef.current.currentTime);
    }
  };

  const toggleFavorite = async () => {
        try {
          if (isFavorite) {
            await axios.put(`https://ripplpodcasts.live/api/users/${user_id}/favorites/remove`, { podcastId: podcast._id });
          } else {
            await axios.put(`https://ripplpodcasts.live/api/users/${user_id}/favorites/add`, { podcastId: podcast._id });
          }
          onFavoriteChange();
        } catch (error) {
          console.error("Error toggling favorite:", error);
        }
      };

  const onFavoriteChange = () => {
    if (Favourite === "likedicon.svg") {
      setFavourite("unliked.svg");
    } else {
      setFavourite("likedicon.svg");
    }
  };

  return (
    <motion.div
      transition={{ duration: 0.1 }}
      whileHover={{ scale: !mutex ? 1.02 : 1 }}
      className="cursor-pointer podcast mt-24 bg-black mr-10 w-fit h-fit px-10 py-5 rounded-lg card flex flex-col gap-5"
    >
      <h3 className="text-[#E7BF81] text-xl poppins">{podcast.name}</h3>
      <p className="text-[#E7BF81] poppins">{podcast.description}</p>
      {podcast.type === "Audio" ? (
        <audio
          ref={mediaRef}
          src={`https://ripplpodcasts.live/api/podcasts/${podcast._id}/file`}
          controls
          onTimeUpdate={handleTimeUpdate}
        />
      ) : (
        <motion.video
          animate={{ scale: Active ? 1.5 : 1 }}
          onClick={handleClick}
          ref={mediaRef}
          src={`https://ripplpodcasts.live/api/podcasts/${podcast._id}/file`}
          controls
          onTimeUpdate={handleTimeUpdate}
        />
      )}
      <button onClick={toggleFavorite} className="poppins text-[#E7BF81]">
        <img src={Favourite} alt="" className="h-6 w-6" />
      </button>
    </motion.div>
  );
};

export default Podcast;