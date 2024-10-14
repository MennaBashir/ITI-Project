import "./bestSelling.scss";
import banner from "/assets/banner-01.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { products } from "../../../../utils/data";
import {
  ShoppingBasket,
  Heart,
  ArrowLeftRight,
  SearchCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../app/interface";
import { useAppDispatch } from "../../../../app/store";
import { addItemToWishlist } from "../../../../app/features/wishlist/wishlistSlice";
import { toast, Toaster } from "react-hot-toast";

export default function BestSelling() {
  const dispatch = useAppDispatch();
  const funcAddWishlist = (item: IProduct) => {
    dispatch(addItemToWishlist(item));
    toast.success("Product added to wishlist ❤️");
  };
  return (
    <section className="bestSelling container">
      <Toaster />
      <div className="row">
        <div className="banner col-md-4 col-xl-3">
          <div className="imag">
            <img src={banner} alt="notFound" />
            <div className="borderBox"></div>
          </div>
          <div className="text">
            <h2>TRE NDING HOT SALES</h2>
            <p>Starting at $99</p>
            <button className="btn btn-danger rounded-0">BUY NOW</button>
          </div>
        </div>
        <div className="swiiper col-md-8 col-xl-9">
          <h4>
            Best Selling Products<span></span>
          </h4>
          <Swiper
            breakpoints={{
              390: {
                slidesPerView: 2, // 2 slide for screens 390px and below
              },
              1024: {
                slidesPerView: 2, // 2 slides for large screens (1024px and above)
              },
              1280: {
                slidesPerView: 3, // 3 slides for extra-large screens (1280px and above)
              },
            }}
            navigation={{
              nextEl: ".custom-next",
            }}
            spaceBetween={30}
            className="mySwiper"
            slideToClickedSlide={true}
            autoplay={{
              delay: 2500,
              reverseDirection: true,
            }}
            loop={true}
          >
            {products.map((ele, index) => {
              if (index < 8) {
                return (
                  <SwiperSlide key={`a${ele.id}`}>
                    <div key={ele.id} className="box">
                      <div className="image">
                        <img src={ele.mainImage} alt="notFound" />
                      </div>
                      <div className="text">
                        <p className="title">{ele.shortDescription}</p>
                        <div className="rate">
                          {ele.rate.map((el, index) => {
                            return (
                              <img
                                key={`ch-${index}`}
                                src={el}
                                alt="notFound"
                              />
                            );
                          })}
                        </div>
                        <p className="price">${ele.salePrice}.00</p>
                      </div>
                      <Link to={`/product/${ele.id}`}>
                        <div className="button">
                          <button className="btn btn-primary">
                            <ShoppingBasket
                              color="white"
                              width="18px"
                              strokeWidth={1.5}
                            />
                            Add To Cart
                          </button>
                        </div>
                      </Link>
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
                  </SwiperSlide>
                );
              }
              return null;
            })}
            {/* Custom Navigation Arrows */}
            <div className="custom-next">
              <ArrowRight />{" "}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
