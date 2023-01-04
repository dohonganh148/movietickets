import React, { useEffect, useState } from "react";
import styles from "./ScheduleMovie.module.scss";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemaAction } from "redux/actions/bookingAction";
import { getScheduleCinema } from "services/bookingService";
import moment from "moment";
import { Link } from "react-router-dom";

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

  console.log(listSchedule);
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
                        <p>[chi tiết]</p>
                      </div>
                    ),
                    key: itemGroupCinema.maCumRap,
                    children: (
                      <div className={styles.movieList}>
                        {itemGroupCinema?.danhSachPhim?.map(
                          (itemMovie, index) => (
                            <div key={index} className={styles.movieItem}>
                              <img alt="" src={itemMovie.hinhAnh} />
                              <div className={styles.detail}>
                                <h2>
                                  <span>C18</span> {itemMovie.tenPhim}
                                </h2>
                                <div className={styles.schedule}>
                                  {itemMovie.lstLichChieuTheoPhim.slice(0,4).map(
                                    (item, index) => (
                                      <button key={index}>
                                        <Link to={`/booking/${item.maLichChieu}`}>
                                          {moment(
                                            item.ngayChieuGioChieu
                                          ).format("DD/MM/YYYY ~ hh:mm")}
                                        </Link>
                                      </button>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        )}
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
