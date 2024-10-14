import FormCheckout from "./FormCheckout";
import { Form } from "@mongez/react-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function MainCheckout() {
  const { cartItem } = useSelector((state: RootState) => state.cart);
  const { userInfo } = useSelector((state: RootState) => state.auth);
  let totalPrice = 0;
  cartItem.map((el) => {
    return (totalPrice += el.quantity * el.salePrice);
  });
  const [_, setPayment] = useState<string>("");
  const [shipping, setShipping] = useState<string>("");
  const navigate = useNavigate();
  const submitForm = ({ values }: any) => {
    let checkEmail = userInfo.find((el) => el.email === values.email);
    if (checkEmail) {
      setTimeout(() => {
        toast.success(
          `Your request has been saved successfully. A message will be sent to your email.`
        );
      }, 1000);
      navigate("/");
    } else {
      setTimeout(() => {
        toast.error("Error: Please verify your login!");
      }, 1000);
      navigate("/login");
    }
  };
  return (
    <Form onSubmit={submitForm}>
      <Toaster />
      <div className="container">
        <div className="row rowBox">
          <div className="col-12 col-lg-7 form">
            <FormCheckout />
          </div>
          <div className="col-12 col-lg-4 shadow-sm order">
            <h5>Your Order</h5>
            <div className="products">
              <h6>Products</h6>
              {cartItem.map((item, index) => {
                return (
                  <div key={`item3${index}`} className="product">
                    <p>
                      {item.title} <span>x {item.quantity}</span>
                    </p>
                    <h6>${item.salePrice * item.quantity}</h6>
                  </div>
                );
              })}
            </div>
            <h6 className="subTotal">
              Subtotal<span>${totalPrice}</span>
            </h6>
            <div className="shipping">
              <h6>Calculate Shipping</h6>
              <div>
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="free"
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  Free Shipping{" "}
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="local"
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  Local Pickup{" "}
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="rate"
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  Flat rate: $5.00{" "}
                </label>
              </div>
            </div>

            <h6 className="total">
              Total{" "}
              <span>
                $
                {shipping === "free"
                  ? totalPrice
                  : shipping === "local"
                  ? totalPrice + 3
                  : shipping === "rate"
                  ? totalPrice + 5
                  : totalPrice}
              </span>
            </h6>
            <div className="shipping">
              <h6>Payment Methods</h6>
              <div>
                <label>
                  <input
                    type="radio"
                    name="Payment"
                    value="Direct bank transfer"
                    checked
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  Direct bank transfer
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="Payment"
                    value="Check payments"
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  Check payments
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="Payment"
                    value="Cash On Delivery"
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  Cash On Delivery
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="Payment"
                    value="Paypal"
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  Paypal
                </label>
              </div>
            </div>
            <button>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </Form>
  );
}
