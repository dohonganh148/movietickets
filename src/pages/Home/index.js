import React from "react";
import Banners from "components/Banners";
import SearchBox from "components/SearchBox";
import MovieList from "components/MovieList";
import ScheduleMovie from "components/ScheduleMovie";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={s.banner}>
        <Banners />
        <SearchBox />
      </div>
      <MovieList />
      <ScheduleMovie />
    </div>
  );
};

export default Home;
