import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { AiFillHome } from "react-icons/ai";
import RoomManagementPage from "./pages/RoomManagementPage/RoomManagementPage";

export const routes = [
  {
    title: "Home Page",
    path: "/",
    isExact: true,
    icon: () => <AiFillHome />,
    component: () => <HomePage />,
  },
  {
    title: "Room Management Page",
    path: "/room-management",
    isExact: false,
    icon: () => <AiFillHome />,
    component: () => <RoomManagementPage />,
  },
];
