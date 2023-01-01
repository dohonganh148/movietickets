import React from 'react';
import styles from "./Authen.module.scss";
import BgAuthen from "images/bgAuthen.jpg";

const Authen = () => {
  return (
    <div className={styles.bgAuthen} style={{backgroundImage: `url(${BgAuthen})`}}></div>
  )
}

export default Authen