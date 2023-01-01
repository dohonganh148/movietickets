import React, { useState } from "react";
import styles from "./CardMovie.module.scss";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const CardMovie = (props) => {
  const { maPhim, hinhAnh, tenPhim, moTa, trailer } = props.item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.content}>
          <div
            className={styles.top}
            style={{ backgroundImage: `url(${hinhAnh})` }}
          >
            <div className={styles.trailer}>
              <button onClick={() => setIsOpen(true)}>
                <BsFillCaretRightFill />
              </button>
            </div>
          </div>
          <div className={styles.bot}>
            <div className={styles.detail}>
              <p className={styles.title}>
                <span>C18 </span> {tenPhim}
              </p>
              <p className={styles.desc}>{moTa.substr(0, 50) + "..."}</p>
            </div>
            <div className={styles.book}>
              <Link to={`/detail/${maPhim}`}>ĐẶT VÉ</Link>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        modal
        isOpen={isOpen}
        videoId={trailer.split("embed/")[1]}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CardMovie;
