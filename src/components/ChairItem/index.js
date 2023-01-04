import React from "react";
import styles from "./ChairItem.module.scss";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSeat } from "redux/actions/bookingAction";

const ChairItem = (props) => {
  const { tenGhe, daDat, loaiGhe, maGhe } = props.item;
  const selectedSeat = useSelector((state) => state.booking.selectedSeat);
  const dispatch = useDispatch();

  return (
    <button
      className={clsx(
        styles.chairNumber,
        { [styles.booked]: daDat },
        { [styles.chairVip]: loaiGhe === "Vip" },
        { [styles.booking]: selectedSeat.some((item) => item.maGhe === maGhe) }
      )}
      disabled={daDat}
      onClick={() => dispatch(setSelectedSeat(props.item))}
    >
      {tenGhe}
    </button>
  );
};

export default ChairItem;
