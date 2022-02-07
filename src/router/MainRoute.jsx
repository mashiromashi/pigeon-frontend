import {
  Articles,
  BlogAndArticles,
  CreateArticles,
  CreateProducts,
  Dashboard,
  LandingPage,
  Login,
  Products,
  PublicProducts,
  TipAndHelps,
} from "PublicLoader";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { storage } from "util/storage";

const MainRoute = () => {
  const loginUser = storage.getUserEntity();
  const isLogin = useSelector((state) => state.login.isLogin);
  const isLogout = useSelector((state) => state.login.isLogout);

  const checkIsLogin = (isLogin || loginUser?.accessToken) && !isLogout;
  return (
    <Routes>
      {!checkIsLogin ? (
        <React.Fragment>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs-articles" element={<BlogAndArticles />} />
          <Route path="/tips-helps-guides" element={<TipAndHelps />} />
          <Route path="/products" element={<PublicProducts />} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route
            path="/dashboard/products/create-product"
            element={<CreateProducts />}
          />
          <Route path="/dashboard/articles" element={<Articles />} />
          <Route
            path="dashboard/articles/create-article"
            element={<CreateArticles />}
          />
        </React.Fragment>
      )}
      <Route
        path="*"
        element={<Navigate to={!checkIsLogin ? "/login" : "/dashboard"} />}
      />
    </Routes>
  );
};

export default MainRoute;
