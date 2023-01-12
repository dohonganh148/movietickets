import React, { useState } from "react";
import styles from "./Infor.module.scss";

const Infor = () => {
  const [selected, setSelected] = useState(0);
  const infor = ["Điện Ảnh 24h", "Review", "Khuyến mãi"];
  return (
    <div className={styles.content} id="news">
      <div className={styles.infor}>
        {infor.map((item, index) => (
          <button
            onClick={() => setSelected(index)}
            className={selected === index ? styles.active : ""}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <button className={styles.btnAdd}>XEM THÊM</button>
    </div>
  );
};

export default Infor;
