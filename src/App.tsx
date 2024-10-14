import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import CartPage from "./pages/CartPage/CartPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ComparePage from "./pages/ComparePage/ComparePage";
import HomePage from "./pages/HomePage/HomePage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import FooterComponent from "./reusableComponents/FooterComponent/FooterComponent";
import NavbarComponent from "./reusableComponents/NavbarComponent/NavbarComponent";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/AccountPages/ContactPage/ContactPage";
import RegisterPage from "./pages/AccountPages/RegisterPage/RegisterPage";
import LoginPage from "./pages/AccountPages/LoginPage/LoginPage";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { AdminDashPage } from "./pages/AdminDashPage/AdminDashPage";

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  window.onscroll = () => {
    if (window.scrollY >= 700) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const funcScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:nameCategory" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <FooterComponent />
      {show && (
        <button onClick={funcScroll} className="btnScroll">
          {" "}
          <ArrowUp />
        </button>
      )}
    </>
  );
}
