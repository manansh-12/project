import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sideBar/Sidebar";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import ChannelPage from "./pages/ChannelPage";
import LoginScreen from "./pages/LoginScreen";
import Subscriptions from "./pages/Subscriptions";
import SearchPage from "./pages/SearchPage";
import { Navigate, Routes, Route } from "react-router-dom";
import "./css/App.css";
const LayOut = ({ children }) => {
  const { authToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken && !loading) {
      navigate("/login");
    }
  }, [authToken, loading, navigate]);

  const [sidebar, setSidebar] = useState(false);
  const handelToggelSidebar = () => {
    return setSidebar(!sidebar);
  };
  return (
    <div className="app">
      <Header handelToggelSidebar={handelToggelSidebar} />
      <div className="app__page">
        <Sidebar sidebar={sidebar} handelToggelSidebar={handelToggelSidebar} />
        {children}
      </div>
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <LayOut>
            <HomePage />
          </LayOut>
        }></Route>

      <Route
        path="/watch/:id"
        exact
        element={
          <LayOut>
            <WatchPage />
          </LayOut>
        }></Route>
      <Route
        path="/channel/:id"
        exact
        element={
          <LayOut>
            <ChannelPage />
          </LayOut>
        }></Route>
      <Route
        path="/feeds/subscriptions"
        exact
        element={
          <LayOut>
            <Subscriptions />
          </LayOut>
        }></Route>
      <Route
        path="/search/:querry"
        exact
        element={
          <LayOut>
            <SearchPage />
          </LayOut>
        }></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}

export default App;
