import Table from "react-bootstrap/Table";
import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/store";
import { Link } from "react-router-dom";
import { IProduct } from "../../../app/interface";
import { removeItemFromWishlist } from "../../../app/features/wishlist/wishlistSlice";
import { toast, Toaster } from "react-hot-toast";

export default function TableWishlist() {
  const { wishlistItem } = useSelector((state: RootState) => state.wishlist);
  const dispatch = useAppDispatch();
  const removeWishlist = (item: IProduct) => {
    dispatch(removeItemFromWishlist(item));
    toast.success("Product removed from wishlist!", {
      position: "top-right",
    });
  };
  return (
    <div className="tableBox">
      <Toaster />
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th>Action</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItem.map((item, index) => {
            return (
              <tr key={`item4${index}`}>
                <td>
                  <div className="product">
                    <div className="image">
                      <img src={item.mainImage} alt="not found" />
                    </div>
                    <div className="text">
                      <p>{item.title}</p>
                      <div className="rate">
                        {item.rate.map((el, index) => {
                          return <img src={el} key={index} alt="notFound" />;
                        })}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="price">${item.salePrice}</span>
                </td>
                <td>
                  <span
                    className={`${item.stockStatus ? "stock" : "outStock"}`}
                  >
                    {item.stockStatus ? "In Stock" : "Out Stock"}
                  </span>
                </td>
                <td>
                  <button>
                    <Link to={`/product/${item.id}`}> Add to cart</Link>
                  </button>
                </td>
                <td onClick={() => removeWishlist(item)}>
                  <Trash2 />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
