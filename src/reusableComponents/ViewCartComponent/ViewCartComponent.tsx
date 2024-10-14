import Offcanvas from "react-bootstrap/Offcanvas";
import "./viewCart.scss";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

interface ViewCartProps {
  show: boolean;
  setShow: (show: boolean) => void;
}
export default function ViewCartComponent({ show, setShow }: ViewCartProps) {
  const { cartItem } = useSelector((state: RootState) => state.cart);
  let totalPrice = 0;
  cartItem.map((el) => {
    return (totalPrice += el.quantity * el.salePrice);
  });
  return (
    <Offcanvas placement="end" show={show} onHide={() => setShow(false)}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <span className="fs-6 fw-bold">SHOPPING CART</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="custom-body">
        <div className="products">
          {cartItem.map((item, index) => {
            return (
              <Link
                to={`product/${item.id}`}
                key={`item1${index}`}
                className="product"
              >
                <div className="image">
                  <img src={item.mainImage} alt="notFound" />
                </div>
                <div className="text">
                  <h6>{item.title}</h6>
                  <p>
                    <span>{item.quantity}</span> x{" "}
                    <span>${item.salePrice}</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="price">
          <span>SubTotal:</span>
          <span>${totalPrice}</span>
        </div>
        <div className="button">
          <Link to={`/cart`} className="btn1 btnC">
            View Cart
          </Link>
          <Link to={`/checkout`} className="btn2 btnC">
            Checkout
          </Link>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
