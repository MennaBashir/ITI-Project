import Pagination from "@mui/material/Pagination";
import { products } from "../../utils/data";
import { ChangeEvent, useState } from "react";
import "./../HomePage/homePage.scss";
import "./category.scss";
import {
  ShoppingBasket,
  Heart,
  ArrowLeftRight,
  SearchCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeadCategory from "./components/HeadCategory";
import { Toaster, toast } from "react-hot-toast";
import { IProduct } from "../../app/interface";
import { useAppDispatch } from "../../app/store";
import { addItemToWishlist } from "../../app/features/wishlist/wishlistSlice";

export default function CategoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const to = currentPage * pageSize;
  const from = to - pageSize;
  const handlePagination = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  const dispatch = useAppDispatch();
  const funcWishlist = (item: IProduct) => {
    dispatch(addItemToWishlist(item));
    toast.success("Product added to wishlist ❤️");
  };
  return (
    <section className="category">
      <HeadCategory />
      <div className="categories container">
        {products.slice(from, to).map((ele) => {
          return (
            <div key={ele.id} className="box box2">
              <Toaster />
              <div className="image image2">
                <img src={ele.mainImage} className="mainImage" alt="notFound" />
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
                    return <img key={`ch-${index}`} src={el} alt="notFound" />;
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
                    <a onClick={() => funcWishlist(ele)}>
                      <Heart />
                    </a>
                  </li>
                  <li>
                    <Link to={`/compare`}>
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
        })}
      </div>
      <Pagination
        onChange={handlePagination}
        color="primary"
        page={currentPage}
        count={Math.ceil(products.length / pageSize)}
        variant="outlined"
        shape="rounded"
        className="paginateBox container"
      />
    </section>
  );
}
