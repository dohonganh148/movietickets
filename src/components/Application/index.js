import React from 'react';
import styles from "./Application.module.scss";
import BgApplication from "images/bgAuthen.jpg";
import Mobile from "images/mobile.png";
import Img from "images/application.jpg";

const Application = () => {
  return (
    <div className={styles.content} style={{backgroundImage: `url(${BgApplication})`}} id='application'>
        <div className={styles.row}>
        <div className={styles.left}>
            <h2 className={styles.title}>Ứng dụng tiện lợi dành cho</h2>
            <h2 className={styles.title}>người yêu điện ảnh</h2>
            <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
            <a href='#home'>
                <button>APP MIỄN PHÍ - TẢI VỀ NGAY!</button>
            </a>
            <p>TIX có 2 phiên bản: IOS & Android</p>
        </div>
        <div className={styles.right}>
            <img alt='' src={Mobile} className={styles.mobile}/>
            <div className={styles.item}>
                <img alt='' src={Img}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Application