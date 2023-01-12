import React, { useEffect, useState } from "react";
import styles from "./SearchBox.module.scss";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieListAction,
  fetchMovieSchedule,
} from "redux/actions/bookingAction";

const SearchBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieListAction());
  }, [dispatch]);

  const movieList = useSelector((state) => state.booking.movieList);
  const movieSchedule = useSelector((state) => state.booking.movieSchedule);
  const searchBox = [
    {
      label: "Phim",
    },
    {
      label: "Rạp",
    },
    {
      label: "Ngày giờ chiếu",
    },
  ];
  const getOptions = (type) => {
    switch (type) {
      case "Phim":
        return movieList?.map((item) => {
          return {
            value: item.maPhim,
            label: item.tenPhim,
          };
        });
      case "Rạp":
        return movieSchedule?.heThongRapChieu?.map((item) => {
          return {
            value: item.maHeThongRap,
            label: item.tenHeThongRap,
          };
        });
      case "Ngày giờ chiếu":
        return;
      default:
        return movieList?.map((item) => {
          return {
            value: item.maPhim,
            label: item.tenPhim,
          };
        });
    }
  };
  const handleChange = (id, label) => {
    switch (label) {
      case "Phim":
        dispatch(fetchMovieSchedule(id));
        break;
      case "Rạp":
        break;
      case "Ngày giờ chiếu":
        break;
      default:
        dispatch(fetchMovieSchedule(id));
    }
  };
  return (
    <div className={styles.searchBox}>
      <div className={styles.content}>
        {searchBox.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <Select
                showSearch
                placeholder={item.label}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={getOptions(item.label)}
                onChange={(id) => handleChange(id, item.label)}
              />
            </div>
          );
        })}
        <div>
          <button>ĐẶT VÉ NGAY</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
