import HomePage from "./pages/HomePage/HomePage";
import { useSelector } from "react-redux";
import "./App.css";
import "antd/dist/reset.css";
import LoginPage from "./components/LoginPage/LoginPage";
import RoomManagementPage from "./pages/RoomManagementPage/RoomManagementPage";
import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import WrapContainer from "./components/Layout/Layout";

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
        element: <HomePage />,
      },
      {
        path: "/room-management",
        element: <RoomManagementPage />,
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
