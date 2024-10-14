import "../BestSelling/bestSelling.scss";
import banner from "/assets/banner-03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { products } from "../../../../utils/data";
import {
  ShoppingBasket,
  Heart,
  ArrowLeftRight,
  SearchCheck,
  ArrowLeft,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { addItemToWishlist } from "../../../../app/features/wishlist/wishlistSlice";
import { useAppDispatch } from "../../../../app/store";
import { IProduct } from "../../../../app/interface";

export default function NewArrival() {
  const dispatch = useAppDispatch();
  const funcAddWishlist = (item: IProduct) => {
    dispatch(addItemToWishlist(item));
    toast.success("Product added to wishlist ❤️");
  };
  return (
    <section className="bestSelling container">
      <Toaster />
      <div className="row flex-row-reverse">
        <div className="banner col-md-4 col-xl-3">
          <div className="imag">
            <img src={banner} alt="notFound" />
            <div className="borderBox"></div>
          </div>
          <div className="text2">
            <div className="textP">
              <p className="fs-3">Electronic Deals</p>
              <p className="fs-5"> Exclusive COUPON</p>
              <p className="fs-6 fw-bold">
                Up To <span className="text-primary">10% OFF</span>
              </p>
            </div>
            <button className="btn btn-primary rounded-0">SHOP NOW</button>
          </div>
        </div>
        <div className="swiiper col-md-8 col-xl-9">
          <h4>
            New Arrivals<span></span>
          </h4>
          <Swiper
            breakpoints={{
              390: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: ".custom-prev",
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
                  <SwiperSlide key={`k${ele.id}`}>
                    <div key={ele.id} className="box">
                      <div className="image">
                        <img src={ele.mainImage} alt="notFound" />
                      </div>
                      <div className="text">
                        <p className="title">{ele.shortDescription}</p>
                        <div className="rate">
                          {ele.rate.map((el, index) => {
                            return (
                              <img key={`c-${index}`} src={el} alt="notFound" />
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
            <div className="custom-prev">
              <ArrowLeft />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
