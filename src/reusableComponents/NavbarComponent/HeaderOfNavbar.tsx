import logoImg from "/assets/logo.png";
import "./navbar.scss";
import {
  ShoppingCart,
  ArrowRightLeft,
  Heart,
  LogIn,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ViewCartComponent from "../ViewCartComponent/ViewCartComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function HeaderOfNavbar() {
  const [show, setShow] = useState(false);
  const { cartItem } = useSelector((state: RootState) => state.cart);
  const { wishlistItem } = useSelector((state: RootState) => state.wishlist);

  return (
    <>
      <header className="headerOfNavbar">
        <div className="logo col-lg-2 ">
          <Link to={"/"}>
            <img src={logoImg} alt="notFound" />
          </Link>
        </div>
        <div className="d-none d-md-block col-md-5 search">
          <input type="search" placeholder="Search" />
          <span>
            <Search />
          </span>
        </div>
        <div className="icons col-lg-3">
          <div className="d-none d-lg-flex icon">
            <Link to={"/compare"}>
              <ArrowRightLeft color="#333333e6" />
            </Link>
            <span>Compare</span>
          </div>
          <div className="d-none d-lg-flex icon">
            <Link to={"/wishlist"} className="badgeA">
              <span className="badge">
                {wishlistItem.length > 0 && wishlistItem.length}
              </span>
              <Heart color="#333333e6" />
            </Link>
            <span>Wishlist</span>
          </div>
          <div className="icon">
            <span className="badgeA" onClick={() => setShow(true)}>
              <span className="badge">
                {cartItem.length > 0 && cartItem.length}
              </span>
              <ShoppingCart color="#333333e6" />
            </span>
            <span>Cart</span>
          </div>
          <div className="icon d-none d-md-flex">
            <Link to={"/login"}>
              <LogIn color="#333333e6" />
            </Link>
            <span>Login</span>
          </div>
        </div>
      </header>
      <ViewCartComponent show={show} setShow={setShow} />
    </>
  );
}
