import React from "react";
import styles from "./Footer.module.scss";
import { FaApple, FaFacebook, FaYoutube } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import Cgv from "images/cgv.png";
import Bhd from "images/bhd.png";
import Galaxy from "images/galaxy.png";
import Cine from "images/cine.png";
import Lotte from "images/lotte.png";
import Mega from "images/mega.png";
import Beta from "images/beta.jpeg";
import DongDa from "images/dongDa.png";
import Touchi from "images/touChi.png";
import Cinemax from "images/cinemax.jpeg";
import StarLight from "images/starLight.png";
import Dcine from "images/dcine.png";
import Zalopay from "images/zalopay.png";
import Payoo from "images/payoo.png";
import Vietcombank from "images/vietcombank.png";
import Agribank from "images/agribank.png";
import Vietinbank from "images/viettinbank.png";
import Ivb from "images/ivb.png";
import Bacham from "images/bacham.png";
import Compass from "images/compass.jpeg";
import Izon from "images/izon.jpeg";

const Footer = () => {
  const logoPartner = [
    Cgv,
    Bhd,
    Galaxy,
    Cine,
    Lotte,
    Mega,
    Beta,
    DongDa,
    Touchi,
    Cinemax,
    StarLight,
    Dcine,
    Zalopay,
    Payoo,
    Vietcombank,
    Agribank,
    Vietinbank,
    Ivb,
    Bacham,
    Compass,
  ];
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.about}>
            <h3>TIX</h3>
            <div className={styles.list}>
              <p>FAQ</p>
              <p>Thoả thuận sử dụng</p>
              <p>Brand Guidelines</p>
              <p>Chính sách bảo mật</p>
            </div>
          </div>
          <div className={styles.partner}>
            <h3>ĐỐI TÁC</h3>
            <div className={styles.item}>
              {logoPartner.map( (item, index) => (
                <div key={index}>
                  <img alt="" src={item}/>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.socials}>
            <div>
              <h3>MOBILE APP</h3>
              <div>
                <FaApple />
                <GrAndroid />
              </div>
            </div>
            <div>
              <h3>SOCIAL</h3>
              <div>
                <FaFacebook />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bot}>
          <img alt="" src={Izon} />
          <div className={styles.tix}>
            <h5>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h5>
            <p>
              Địa chỉ: 123 Đường số ABC, Phường Tân Thuận Đông, Quận 7, TP. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: XXXXXXXXXXX,</p>
            <p>
              đăng ký thay đổi lần thứ XX, ngày XX tháng XX năm 20XX do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Hotline: 1900 545 436</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
