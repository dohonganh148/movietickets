import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import DetailMovie from "pages/DetailMovie";
import Booking from "pages/Booking";
import Login from "pages/Login";
import Signup from "pages/Signup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileAction } from "redux/actions/authenAction";
import ProfileUser from "pages/ProfileUser";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch async action fetchProfile
    dispatch(fetchProfileAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div style={{paddingTop: 90}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfileUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
