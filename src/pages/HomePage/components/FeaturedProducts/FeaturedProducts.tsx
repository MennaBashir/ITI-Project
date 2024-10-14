import "./featuredProducts.scss";
import { products } from "../../../../utils/data";
import {
  ShoppingBasket,
  Heart,
  ArrowLeftRight,
  SearchCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { RootState, useAppDispatch } from "../../../../app/store";
import { addItemToWishlist } from "../../../../app/features/wishlist/wishlistSlice";
import { IProduct } from "../../../../app/interface";
import { useSelector } from "react-redux";
import NewProducts from "./NewProducts";

export default function FeaturedProducts() {
  const dispatch = useAppDispatch();
  const funcAddWishlist = (item: IProduct) => {
    dispatch(addItemToWishlist(item));
    toast.success("Product added to wishlist ❤️");
  };
  const { adminProducts } = useSelector((state: RootState) => state.admin);
  return (
    <section className="featuredProducts container">
      <Toaster />
      <header>
        <span className="featureLine"></span>
        <span className="featureText">Featured Products</span>
        <span className="featureLine"></span>
      </header>
      <div className="boxes">
        {adminProducts.length > 0 && <NewProducts />}
        {products.map((ele, index) => {
          if (index < 8) {
            return (
              <div key={ele.id} className="box box1">
                <div className="image image1">
                  <img
                    src={ele.mainImage}
                    className="mainImage"
                    alt="notFound"
                  />
                  <img
                    src={ele.hoverImage}
                    className="hoverImage"
                    alt="notFound"
                  />
                </div>
                <div className="text">
                  <p className="title">{ele.shortDescription}</p>
                  <div className="rate">
                    {ele.rate.map((el, index) => {
                      return (
                        <img key={`ch-${index}`} src={el} alt="notFound" />
                      );
                    })}
                  </div>
                  <p className="price">${ele.salePrice}.00</p>
                </div>
                <div className="button">
                  <Link to={`/product/${ele.id}`}>
                    <button className="btn btn-primary">
                      <ShoppingBasket
                        color="white"
                        width="18px"
                        strokeWidth={1.5}
                      />
                      Add To Cart
                    </button>
                  </Link>
                </div>
                <div className="iconLeft">
                  <ul>
                    <li>
                      <a onClick={() => funcAddWishlist(ele)}>
                        <Heart />
                      </a>
                    </li>
                    <li>
                      <Link to={"/compare"}>
                        <ArrowLeftRight />
                      </Link>
                    </li>
                    <li>
                      <a>
                        <SearchCheck />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}
