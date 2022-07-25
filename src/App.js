import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up.component";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/Checkout.component";

//import {selectCollectionsForPreview} from './redux/shop/shop.selectors';
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const logeado = () => {
    return currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />;
  };

  return (
    <div className="mainContainer">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route exact path="/signin" element={logeado()} />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return { checkUserSession: () => dispatch(checkUserSession()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
