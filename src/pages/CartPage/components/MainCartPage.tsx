import Table from "react-bootstrap/Table";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/store";
import { IProduct } from "../../../app/interface";
import { removeItemFromCart } from "../../../app/features/cart/cartSlice";
import { toast, Toaster } from "react-hot-toast";

export default function MainCartPage() {
  const { cartItem } = useSelector((state: RootState) => state.cart);
  let totalPrice = 0;
  cartItem.map((el) => {
    return (totalPrice += el.quantity * el.salePrice);
  });
  const dispatch = useAppDispatch();
  const removeCart = (item: IProduct) => {
    dispatch(removeItemFromCart(item));
    toast.success("Product removed successfully!", {
      position: "top-right",
    });
  };
  return (
    <div className="container">
      <Toaster />
      <div className="row boxRow">
        <div className="tableCart col-12 col-lg-8">
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item, index) => {
                return (
                  <tr key={`item2${index}`}>
                    <td>
                      <Link to={`/product/${item.id}`} className="text">
                        <img src={item.mainImage} alt="notFound" />
                        <h6>{item.title}</h6>
                      </Link>
                    </td>
                    <td className="price">${item.salePrice}</td>
                    <td className="price">{item.quantity}</td>
                    <td className="total">${item.salePrice * item.quantity}</td>
                    <td onClick={() => removeCart(item)}>
                      {" "}
                      <X />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="orderSummary shadow-sm col-12 col-lg-3">
          <h6>Order Summary</h6>
          <div className="subTotal">
            <p>
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </p>
            <p>
              <span>Shipping</span> <span>Free</span>
            </p>
          </div>
          <p className="total">
            <span>Total</span>
            <span>${totalPrice}</span>
          </p>
          <button>
            <Link to={`/checkout`}>Proceed To Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
