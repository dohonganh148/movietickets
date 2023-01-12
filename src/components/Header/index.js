import React from "react";
import styles from "./Header.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "redux/actions/authenAction";

const menu = [
  {
    label: "Lịch chiếu",
    link: "/#schedule",
  },
  {
    label: "Cụm rạp",
    link: "/#cinema",
  },
  {
    label: "Tin tức",
    link: "/#news",
  },
  {
    label: "Ứng dụng",
    link: "/#application",
  },
];
const Header = () => {
  const profile = useSelector((state) => state.authen.profile);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <div className={styles.header}>
      <div>
        <Link to="/" className={styles.logo}>
          Cinemas
        </Link>
      </div>
      <nav className={styles.menu}>
        {menu.map((item, index) => (
          <a key={index} href={item.link}>
            {item.label}
          </a>
        ))}
      </nav>
      {profile ? (
        <div className={styles.profile}>
          <NavLink
            to="/profile"
            className={({ isActive }) => {
              if (isActive) return `${styles.authenActive} ${styles.authen}`;
              return styles.authen;
            }}
          >
            Hello, {profile.hoTen}
          </NavLink>
          <div className={styles.dropdownMenu}>
            <div className={styles.menuItem} onClick={handleLogout}>
              Đăng xuất
            </div>
          </div>
        </div>
      ) : (
        <nav className={styles.group}>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              if (isActive) return `${styles.authenActive} ${styles.authen}`;
              return styles.authen;
            }}
          >
            <BiUserCircle />
            Đăng nhập
          </NavLink>
          <div> | </div>
          <NavLink
            to="/signup"
            className={({ isActive }) => {
              if (isActive) return `${styles.authenActive} ${styles.authen}`;
              return styles.authen;
            }}
          >
            <BiUserCircle />
            Đăng ký
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Header;
