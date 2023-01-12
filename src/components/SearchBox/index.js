import React, { useEffect, useState } from "react";
import styles from "./SearchBox.module.scss";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieListAction,
  fetchMovieSchedule,
} from "redux/actions/bookingAction";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieListAction());
  }, [dispatch]);

  const movieList = useSelector((state) => state.booking.movieList);
  const movieSchedule = useSelector((state) => state.booking.movieSchedule);
  const [selectedCinema, setSelectedCinema] = useState({});
  const [selectedSchedule, setSelectedSchedule] = useState();
  const navigate = useNavigate();
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
            value: JSON.stringify(item.cumRapChieu[0]),
            label: item.cumRapChieu[0].tenCumRap,
          };
        });
      case "Ngày giờ chiếu":
        return selectedCinema?.lichChieuPhim?.map((item) => {
          return {
            value: item?.maLichChieu,
            label: moment(item?.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm"),
          };
        });
      default:
        return movieList?.map((item) => {
          return {
            value: item.maPhim,
            label: item.tenPhim,
          };
        });
    }
  };
  const handleChange = (value, label) => {
    switch (label) {
      case "Phim":
        dispatch(fetchMovieSchedule(value));
        break;
      case "Rạp":
        setSelectedCinema(JSON.parse(value));
        break;
      case "Ngày giờ chiếu":
        setSelectedSchedule(value);
        break;
      default:
        dispatch(fetchMovieSchedule(value));
    }
  };
  const handleBookTicket = () => {
    navigate(`/booking/${selectedSchedule}`);
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
          <button onClick={handleBookTicket}>ĐẶT VÉ NGAY</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
