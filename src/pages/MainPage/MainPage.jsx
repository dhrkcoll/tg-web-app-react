import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header.jsx";
import ProductList from "../../components/ProductList/ProductList";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useEffect, useState } from "react";
import { setUser } from "../../store/userSlice.js";

const MainPage = () => {
  const { tg } = useTelegram();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (tg.initDataUnsafe) {
      const user = tg.initDataUnsafe.user;
      if (user) {
        dispatch(
          setUser({
            id: user?.id,
            firstName: user?.first_name,
            lastName: user?.last_name,
            username: user?.username,
            phone: user?.phone_number,
          })
        );
      }
    }
  }, [tg]);

  return (
    <div style={{ background: "var(--tg-theme-secondary-bg-color)" }}>
      <Header />
      <ProductList />
      <div>{userData.firstName}</div>
      <div>{userData.lastName}</div>
      <div>{userData.id}</div>
      <div>{userData?.phone}</div>
    </div>
  );
};

export default MainPage;
