import React, { useEffect, useState } from "react";
import styles from "./ScheduleMovie.module.scss";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemaAction } from "redux/actions/bookingAction";
import { getScheduleCinema } from "services/bookingService";

const ScheduleMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCinemaAction());
  }, [dispatch]);

  const cinemaList = useSelector((state) => state.booking.cinemaList);
  const [listSchedule, setListSchedule] = useState([]);
  useEffect(() => {
    getScheduleCinema(cinemaList[0]?.maHeThongRap).then((res) =>
      setListSchedule(res.data.content)
    );
  }, [cinemaList]);

  return (
    <div className={styles.content}>
      <Tabs
        onChange={(key) => {
          getScheduleCinema(key).then((res) =>
            setListSchedule(res.data.content)
          );
        }}
        tabPosition="left"
        items={cinemaList.map((itemCinema) => {
          return {
            label: <img className={styles.logo} alt="" src={itemCinema.logo} />,
            key: itemCinema.maHeThongRap,
            children: (
              <Tabs
                tabPosition="left"
                items={listSchedule[0]?.lstCumRap?.map((itemGroupCinema) => {
                  return {
                    label: (
                      <div>
                        <p>{itemGroupCinema?.tenCumRap}</p>
                        <p>{itemGroupCinema?.diaChi}</p>
                      </div>
                    ),
                    key: itemGroupCinema.maCumRap,
                    children: (
                      <div>
                        {itemGroupCinema?.danhSachPhim?.map((itemMovie, index) => (
                          <div key={index}>{itemMovie.tenPhim}</div>
                        ))}
                      </div>
                    ),
                  };
                })}
              />
            ),
          };
        })}
      />
    </div>
  );
};

export default ScheduleMovie;
