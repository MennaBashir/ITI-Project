import "./checkout.scss";
import { useSelector } from "react-redux";
import HeadCheckout from "./components/HeadCheckout";
import MainCheckout from "./components/MainCheckout";
import { RootState } from "../../app/store";
import NoFoundCart from "../CartPage/components/NoFoundCart";
export default function CheckoutPage() {
  const { cartItem } = useSelector((state: RootState) => state.cart);
  return (
    <section className="checkout">
      {cartItem.length > 0 ? (
        <>
          <HeadCheckout />
          <MainCheckout />
        </>
      ) : (
        <NoFoundCart />
      )}
    </section>
  );
}
