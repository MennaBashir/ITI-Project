import "./footer.scss";
import paypal from "/assets/paypal.svg";
import visa from "/assets/visa.svg";
import skrill from "/assets/skrill.svg";
import mastercard from "/assets/mastercard.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  MapPin,
  Mail,
  PhoneIncoming,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function FooterComponent() {
  let date = new Date();
  return (
    <footer className="FooterComponent">
      <div className="container FooterContent">
        <div className="about boxFooter col-md-6 col-lg-4">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            similique sed facilis cumque impedit quis, deserunt reiciendis
          </p>
          <p className="aboutInfo">
            <MapPin /> 45 Park Avenue, NY
          </p>
          <p className="aboutInfo">
            <Mail />
            menna.bashir@gmail.com
          </p>
          <p className="aboutInfo">
            <PhoneIncoming />
            (123) 123-456
          </p>
        </div>
        <div className="links boxFooter col-md-6 col-lg-2">
          <h2>Account</h2>
          <ul>
            <li>
              <Link to={"/aboutUs"}>About Us</Link>
            </li>
            <li>
              <Link to={"/privacy"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/aboutUs"}>User's Guide</Link>
            </li>
            <li>
              <Link to={"/aboutUs"}>Support Center</Link>
            </li>
            <li>
              <Link to={"/privacy"}>Press Info</Link>
            </li>
          </ul>
        </div>
        <div className="links boxFooter col-md-6 col-lg-3">
          <h2>Popular</h2>
          <ul>
            <li>
              <a href="">Blue Traingin Shoes</a>
            </li>
            <li>
              <a href="">Popo Smart Phone P56</a>
            </li>
            <li>
              <a href="">Smart Watch A355S</a>
            </li>
            <li>
              <a href="">White Schoolbag</a>
            </li>
            <li>
              <a href="">Blue Traingin Shoes</a>
            </li>
          </ul>
        </div>
        <div className="newsletter boxFooter col-md-6 col-lg-3">
          <h2>Sign Up Newsletter</h2>
          <p>
            Sign Up for Our Newsletter to get Latest Updates and Offers.
            Subscribe to receive news in your inbox.
          </p>
          <Form>
            <Form.Control type="email" placeholder="Enter email" />
            <Button variant="primary" type="submit">
              <Send />
            </Button>
          </Form>
          <div className="follow">
            <p>Follow us</p>
            <ul>
              <li className="shadow-sm">
                <a href="">
                  <Facebook fill="#0d6efd" strokeWidth={0.2} />
                </a>
              </li>
              <li className="shadow-sm">
                <a href="">
                  <Twitter fill="#0d6efd" strokeWidth={0.2} />
                </a>
              </li>
              <li className="shadow-sm">
                <a href="">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="TypesPay">
        <div className="container TypesPayContent">
          <p className="copyRight">
            &copy;{date.getFullYear()} Matgar.All Rights Reserved
          </p>
          <div>
            <ul>
              <li>
                <a href="">
                  <img src={mastercard} alt="notFound" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={visa} alt="notFound" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={paypal} alt="notFound" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={skrill} alt="notFound" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
