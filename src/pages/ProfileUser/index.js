import React, { useEffect } from "react";
import styles from "./ProfileUser.module.scss";
import BgProfile from "images/bgAuthen.jpg";
import { Button, Form, Input, Select } from "antd";
import { useSelector } from "react-redux";
import { updateProfile } from "services/authenService";

const ProfileUser = () => {
  const profile = useSelector((state) => state.authen.profile);
  console.log(profile);
  const [form] = Form.useForm();
  const setInitialValue = () => {
    if (profile) {
      form.setFieldValue({
        taiKhoan: profile.taiKhoan,
        matKhau: profile.matKhau,
        hoTen: profile.hoTen,
        email: profile.email,
        soDt: profile.soDt,
        maLoaiNguoiDung: profile.maLoaiNguoiDung,
        maNhom: profile.maNhom
      });
    }
  };
  useEffect(() => {
    setInitialValue();
  }, []);

  const onFinish = async (values) => {
      const params = {
          taiKhoan: values.taiKhoan,
          matKhau: values.matKhau,
          hoTen: values.hoTen,
          email: values.email,
          soDt: values.soDt,
          maLoaiNguoiDung: values.maLoaiNguoiDung,
          maNhom: values.maNhom,
      };
      let res = await updateProfile(params);

  };
  return (
    <div
      className={styles.profileUser}
      style={{ backgroundImage: `url(${BgProfile})` }}
    >
      <div className={styles.content}>
        <div className={styles.infor}>
          <h3>Thông tin cá nhân</h3>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            name="basic"
            onFinish={onFinish}
            className={styles.form}
          >
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
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
                {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    "Mật khẩu có ít nhất 6 ký tự, ít nhất 1 chữ và 1 số!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item  name="maNhom" hidden>
            <Input />
          </Form.Item>

            <Form.Item
              label="Họ tên"
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Họ tên!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="soDt"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Số điện thoại!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Email!",
                },
                {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email không hợp lệ!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Loại người dùng" name="maLoaiNguoiDung">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Chọn loại người dùng"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                classname={styles.select}
                //   options={getOptions}
              />
            </Form.Item>
            <Form.Item></Form.Item>

            <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.history}>
          <h3>Lịch sử đặt vé</h3>
          {profile?.thongTinDatVe.map((item, index) => (
            <div key={index} className={styles.row}>
              <img alt="" src={item.hinhAnh} />
              {/* {item.danhSachGhe.map((itemCinema, index) => (
                <div key={index}>
                  <h4>{itemCinema.tenHeThongRap}</h4>
                  <p>
                    Ngày đặt: <span></span> - Rạp 1 - Ghế
                  </p>
                </div>
              ))} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
