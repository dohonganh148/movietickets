import React from "react";
import styles from "./Login.module.scss";
import { Button, Form, Input } from "antd";
import Authen from "components/Authen";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { loginAction } from "redux/actions/authenAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    // call service API
    try {
      await dispatch(loginAction(values));
      // trả về thông tin user login thành công => res.data.store
      // lưu data lên store
      // navigate user qua trang Home
      navigate("/");
    } catch (err) {
      throw err;
    }
  };
  return (
    <div className={styles.authen}>
      <Authen />
      <div className={styles.content}>
        <div className={styles.icon}>
          <BiUserCircle />
        </div>
        <h2>Đăng nhập</h2>
        <Form name="basic" onFinish={handleLogin} className={styles.form}>
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản!",
              },
              // {
              //   pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              //   message: "Email không hợp lệ!"
              // }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 5,
            }}
          >
            <Button type="primary" htmlType="submit" className={styles.button}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
