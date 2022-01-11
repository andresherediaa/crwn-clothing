import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/Checkout.component";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  logeado = () => {
    return this.props.currentUser ? (
      <Navigate to="/" />
    ) : (
      <SignInAndSignUpPage />
    );
  };

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/signin" element={this.logeado()} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
