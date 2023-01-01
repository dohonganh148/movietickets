import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannersAction } from "redux/actions/bookingAction";
import styles from "./Banners.module.scss";

const Banners = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => {
    return state.booking.banners;
  });
  useEffect(() => {
    dispatch(fetchBannersAction());
  }, [dispatch]);
  return (
    <div className={styles.banner}>
      <Carousel autoplay>
        {banners.map((item) => (
          <div key={item.maPhim}>
            <img src={item.hinhAnh} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banners;
