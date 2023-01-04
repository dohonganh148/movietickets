import React, { useEffect, useState } from "react";
import styles from "./DetailMovie.module.scss";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Rate, Tabs } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailScheduleAction } from "redux/actions/bookingAction";
import moment from "moment";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const DetailMovie = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.booking.movieDetailSchedule);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchMovieDetailScheduleAction(params.id));
  }, [dispatch, params.id]);
  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${movie.hinhAnh})`,
          }}
        >
          <div className={styles.trailer}>
            <button onClick={()=> setIsOpen(true)}>
              <BsFillCaretRightFill />
            </button>
          </div>
        </div>
        <div className={styles.detail}>
          <h2>{movie.tenPhim}</h2>
          <p className={styles.desc}>
            Mô tả: <span>{movie.moTa}</span>
          </p>
          <p>
            Đánh giá:
            <span>
              <Rate disabled value={movie?.danhGia} count={10} />
            </span>
          </p>
          <p>
            Ngày khởi chiếu:{" "}
            <span className={styles.date}>
              {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
            </span>
          </p>
            <button className={styles.booking}>Đặt vé</button>

          <Tabs
            tabPosition="left"
            items={movie?.heThongRapChieu?.map((itemCinema) => {
              return {
                label: (
                  <div className={styles.cinema}>
                    <img
                      className={styles.tabLogo}
                      alt=""
                      src={itemCinema.logo}
                    />
                    <br />
                    {itemCinema.tenHeThongRap}
                  </div>
                ),
                key: itemCinema.maHeThongRap,
                children: itemCinema?.cumRapChieu?.map(
                  (itemGroupCinema, indexGroup) => {
                    return (
                      <div key={indexGroup} className={styles.groupCinema}>
                        <p className={styles.name}>
                          {itemGroupCinema.tenCumRap}
                        </p>
                        {itemGroupCinema?.lichChieuPhim
                          ?.slice(0, 4)
                          .map((itemSchedule, index) => {
                            return (
                              <button key={index}>
                              <Link to={`/booking/${itemSchedule.maLichChieu}`} className={styles.link}>{moment(itemSchedule.ngayChieuGioChieu).format(
                                "DD/MM/YYYY ~ hh:mm"
                              )}</Link>
                            </button>
                            );
                          })}
                      </div>
                    );
                  }
                ),
              };
            })}
          />
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        modal
        isOpen={isOpen}
        videoId={movie?.trailer?.split("embed/")[1]}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default DetailMovie;
