import HomePage from "./pages/HomePage/HomePage";
import { useSelector } from "react-redux";
import "./App.css";
import "antd/dist/reset.css";
import LoginPage from "./components/LoginPage/LoginPage";
import RoomManagementPage from "./pages/RoomManagementPage/RoomManagementPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import WrapContainer from "./components/Layout/Layout";
import BookingManagementPage from "./pages/BookingManagementPage/BookingManagementPage";
import { ProfitManagementPage } from "./pages/ProfitManagementPage/ProfitManagementPage";
import ServiceManagementPage from "./pages/ServiceManagementPage/ServiceManagementPage";

const AppLayout = () => (
  <ProtectedRoute>
    <WrapContainer>
      <Outlet />
    </WrapContainer>
  </ProtectedRoute>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/room-management" />,
      },
      {
        path: "/room-management",
        element: <RoomManagementPage />,
      },
      {
        path: "/booking-management",
        element: <BookingManagementPage />,
      },
      {
        path: "/profit-management",
        element: <ProfitManagementPage />,
      },
      {
        path: "/service-management",
        element: <ServiceManagementPage />,
      },
    ],
  },
  {
    element: <LoginPage />,
    path: "/login",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
