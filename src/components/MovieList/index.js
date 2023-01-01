import React, { useEffect } from "react";
import styles from "./MovieList.module.scss";
import CardMovie from "components/CardMovie";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "redux/actions/bookingAction";
import { Pagination } from "antd";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.booking.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div className={styles.content}>
      <div className={styles.list}>
        {movies?.items?.map((item) => (
          <div key={item.maPhim}>
            <CardMovie item={item}  />

          </div>
        ))}
      </div>
      {movies.items && (
        <Pagination
          defaultCurrent={movies.currentPage}
          pageSize={4}
          total={movies.totalCount}
          onChange={(page) => {
            dispatch(fetchMovies(page));
          }}
        />
      )}
    </div>
  );
};

export default MovieList;
