import Table from "react-bootstrap/Table";
import { Trash2, Star, ShoppingBasket } from "lucide-react";
import product1 from "/assets/products/clock.png";
import product2 from "/assets/products/phone.png";
import product3 from "/assets/products/camera.png";

export default function TableCompare() {
  return (
    <div className="tableBox">
      <Table>
        <tbody>
          <tr>
            <th>Preview</th>
            <td>
              <img src={product1} alt="notFound" />
            </td>
            <td>
              <img src={product2} alt="notFound" />
            </td>
            <td>
              <img src={product3} alt="notFound" />
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <td>
              <p className="title">Alarm Clock With Lamp</p>
            </td>
            <td>
              <p className="title">Smart Watch A355S</p>
            </td>
            <td>
              <p className="title">Smart Watch for man & woman</p>
            </td>
          </tr>
          <tr>
            <th>Description</th>
            <td>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                distinctio.
              </p>
            </td>
            <td>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                distinctio.
              </p>
            </td>
            <td>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                distinctio.
              </p>
            </td>
          </tr>
          <tr>
            <th>Price</th>
            <td>
              <span className="price">45.00$</span>
            </td>
            <td>
              <span className="price">76.00$</span>
            </td>
            <td>
              <span className="price">87.00$</span>
            </td>
          </tr>
          <tr>
            <th>Availability</th>
            <td>
              <span className="stock">In stock</span>
            </td>
            <td>
              <span className="stock">In stock</span>
            </td>
            <td>
              <span className="stock">In stock</span>
            </td>
          </tr>
          <tr>
            <th>Rating</th>
            <td>
              <div className="rate">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </td>
            <td>
              <div className="rate">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </td>
            <td>
              <div className="rate">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </td>
          </tr>
          <tr>
            <th>Buy now</th>
            <td>
              <button>
                <ShoppingBasket />
                Add to cart
              </button>
            </td>
            <td>
              <button>
                <ShoppingBasket />
                Add to cart
              </button>
            </td>
            <td>
              <button>
                <ShoppingBasket />
                Add to cart
              </button>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <span className="remove">
                <Trash2 /> Remove{" "}
              </span>
            </td>
            <td>
              <span className="remove">
                <Trash2 /> Remove{" "}
              </span>
            </td>
            <td>
              <span className="remove">
                <Trash2 /> Remove{" "}
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
