/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Populer = () => {
    const [endPoint,setEndPoint]=useState("movie");
    const { data,loading}=useFetch(`/${endPoint}/popular`)
    const onTabChange=(tab)=>{
        setEndPoint(tab === "Movies" ? "movie" :"tv")
    }


  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="carouselTitle">What's New</div>
        <SwitchTab data={["Movies","Tv Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  );
};

export default Populer;
