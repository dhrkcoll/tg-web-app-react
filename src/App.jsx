import { useState, useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const cafeItems = [
  {
    id: 101,
    title: "Cake",
    price: 1,
    isNew: true,
    imgSrc: "/img/cafe/Cake.tgs",
  },
  { id: 1, title: "Burger", price: 4.99, imgSrc: "/img/cafe/Burger.tgs" },
  { id: 2, title: "Fries", price: 1.49, imgSrc: "/img/cafe/Fries.tgs" },
  { id: 3, title: "Hotdog", price: 3.49, imgSrc: "/img/cafe/Hotdog.tgs" },
  { id: 4, title: "Taco", price: 3.99, imgSrc: "/img/cafe/Tako.tgs" },
  { id: 5, title: "Pizza", price: 7.99, imgSrc: "/img/cafe/Pizza.tgs" },
  { id: 6, title: "Donut", price: 1.49, imgSrc: "/img/cafe/Donut.tgs?1" },
  { id: 7, title: "Popcorn", price: 1.99, imgSrc: "/img/cafe/Popcorn.tgs" },
  { id: 8, title: "Coke", price: 1.49, imgSrc: "/img/cafe/Coke.tgs" },
  {
    id: 9,
    title: "Cake",
    price: 10.99,
    imgSrc: "/img/cafe/Cake.tgs",
    isNew: false,
  },
  { id: 10, title: "Icecream", price: 5.99, imgSrc: "/img/cafe/Icecream.tgs" },
  { id: 11, title: "Cookie", price: 3.99, imgSrc: "/img/cafe/Cookie.tgs" },
  { id: 12, title: "Flan", price: 7.99, imgSrc: "/img/cafe/Flan.tgs" },
];

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
