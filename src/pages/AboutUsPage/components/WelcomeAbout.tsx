import man from "/assets/about/man1.webp";
import img1 from "/assets/about/clock2.webp";
import img3 from "/assets/about/img.webp";
import img4 from "/assets/about/clock1.webp";
import img5 from "/assets/about/air.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function WelcomeAbout() {
  return (
    <div className="row welcome">
      <div className="col-12 col-lg-6 image">
        <img src={man} alt="notFound" />
      </div>
      <div className="col-12 col-lg-6 content">
        <h2>Welcome to Matger</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>
        <p>
          lus ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et
          Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio
          aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
          Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate id est laborum.
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Continue autoplay even after user interactions
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img src={img1} alt="notFound" />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img src={img3} alt="notFound" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="notFound" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img5} alt="notFound" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
