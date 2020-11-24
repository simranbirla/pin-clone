import React, { useState, useEffect, useRef } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import UploadImage from "./UploadImage";

const Home = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const photosRef = useRef();

  const fetchPhotos = async (page) => {
    const response = await unsplash.get("/photos", {
      params: { per_page: 20, page: page },
    });
    setList([...list, ...response.data]);
    setPage(page + 1);
  };

  const onScrolling = () => {
    if (
      photosRef.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      fetchPhotos(page);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrolling);
    return () => {
      document.removeEventListener("scroll", onScrolling);
    };
  }, [page]);

  useEffect(() => {
    fetchPhotos(page);
    return;
  }, []);

  return (
    <div ref={photosRef}>
      <UploadImage />
      {console.log(list)}
      <ImageList images={list} />
    </div>
  );
};

export default Home;
