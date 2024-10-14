import "./cartPage.scss";
import { useSelector } from "react-redux";
import HeadCartPage from "./components/HeadCartPage";
import MainCartPage from "./components/MainCartPage";
import { RootState } from "../../app/store";
import NoFoundCart from "./components/NoFoundCart";
export default function CartPage() {
  const { cartItem } = useSelector((state: RootState) => state.cart);
  return (
    <section className="cartPage">
      {cartItem.length > 0 ? (
        <>
          <HeadCartPage />
          <MainCartPage />
        </>
      ) : (
        <NoFoundCart />
      )}
    </section>
  );
}
