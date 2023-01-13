import React, { useEffect, useState } from "react";
import styles from "./Booking.module.scss";
import BgBooking from "images/bgAuthen.jpg";
import ChairItem from "components/ChairItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieBookingAction,
  setPurchaseSeat,
  setDeleteSeat,
} from "redux/actions/bookingAction";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Button } from "antd";
import { MdOutlineCancel } from "react-icons/md";

const Booking = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const movieBooking = useSelector((state) => state.booking.movieBooking);
  const selectedSeat = useSelector((state) => state.booking.selectedSeat);

  const auth = useSelector((state) => state?.authen?.profile);

  const [isModalOpen, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovieBookingAction(params.id));
  }, [dispatch, params.id]);

  const handleCancel = () => {
    setIsOpenModal(false);
  };
  const handleOk = () => {
    setIsOpenModal(true);
    navigate("/login");
  };

  const handlePurchase = () => {
    if (auth) {
      dispatch(setPurchaseSeat(selectedSeat));
    } else {
      setIsOpenModal(true);
    }
  };
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${BgBooking})` }}
    >
      <div className={styles.row}>
        <div className={styles.col1}>
          <div className={styles.content}>
            <h4 className={styles.screen}>Màn hình</h4>
            <div className={styles.chairList}>
              {movieBooking?.danhSachGhe?.map((itemChairList, index) => {
                return (
                  <div key={index} className={styles.chair}>
                    <ChairItem item={itemChairList} />
                  </div>
                );
              })}
            </div>
            <div className={styles.type}>
              <div className={styles.list}>
                <button className={styles.booked}></button>
                <span>Ghế đã đặt</span>
              </div>
              <div className={styles.list}>
                <button className={styles.vip}></button>
                <span>Ghế VIP</span>
              </div>
              <div className={styles.list}>
                <button className={styles.booking}></button>
                <span>Ghế đang chọn</span>
              </div>
              <div className={styles.list}>
                <button></button>
                <span>Ghế chưa đặt</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.infoMovie}>
            <h1>{movieBooking?.thongTinPhim?.tenPhim}</h1>
            <div className={styles.infoCinema}>
              <div className={styles.detail}>
                <h4>Cụm rạp:</h4>
                <p>{movieBooking?.thongTinPhim?.tenCumRap}</p>
              </div>
              <div className={styles.detail}>
                <h4>Địa chỉ:</h4>
                <p>{movieBooking?.thongTinPhim?.diaChi}</p>
              </div>
              <div className={styles.detail}>
                <h4>Rạp:</h4>
                <p>{movieBooking?.thongTinPhim?.tenRap}</p>
              </div>
              <div className={styles.detail}>
                <h4>Ngày giờ chiếu:</h4>
                <p>
                  {movieBooking?.thongTinPhim?.ngayChieu} <span>~</span>{" "}
                  {movieBooking?.thongTinPhim?.gioChieu}{" "}
                </p>
              </div>
            </div>
          </div>
          <h3>DANH SÁCH GHẾ BẠN CHỌN</h3>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th>Huỷ</th>
                </tr>
              </thead>
              <tbody>
                {selectedSeat.map((item) => (
                  <tr key={item.maGhe}>
                    <td>{item.tenGhe}</td>
                    <td>{item.giaVe.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => dispatch(setDeleteSeat(item))}
                        className={styles.btnDel}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className={styles.total}>Tổng tiền:</td>
                  <td>
                    {selectedSeat
                      .reduce((totalPrice, item) => {
                        return (totalPrice += item.giaVe);
                      }, 0)
                      .toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <button
                onClick={() => handlePurchase()}
                className={styles.purchase}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        centered
        title=""
        cancelText="Không"
        okText="Đồng ý"
        open={isModalOpen}
        onOk={() => setIsOpenModal(false)}
        onCancel={() => setIsOpenModal(false)}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Không
          </Button>,
          <Button
            type="primary"
            onClick={handleOk}
          >
            Đồng ý
          </Button>,
        ]}
      >
        <div className={styles.modal}>
          <p>
            <MdOutlineCancel />
          </p>
          <h3>Bạn chưa đăng nhập</h3>
          <p>Bạn có muốn đăng nhập không?</p>
        </div>
      </Modal>
    </div>
  );
};

export default Booking;
