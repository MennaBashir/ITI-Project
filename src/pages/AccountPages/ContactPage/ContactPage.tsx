import "../account.scss";
import { Form } from "@mongez/react-form";
import TextInput from "../../../utils/validation/TextInput";
import EmailInput from "../../../utils/validation/EmailInput";
import PhoneInput from "../../../utils/validation/PhoneInput";
import { PhoneIncoming, MapPin, MailOpen, Send } from "lucide-react";
import facebook from "/assets/account/facebook.svg";
import twitter from "/assets/account/twitter.svg";
import instagram from "/assets/account/instagram.svg";
import pinterest from "/assets/account/pinterest.svg";
import whatsapp from "/assets/account/whatsapp.svg";

import MapComponent from "./components/MapComponent";
export default function ContactPage() {
  return (
    <div className="contactSec">
      <div className="container">
        <div className="row bigBox">
          <div className="message col-lg-7 shadow-sm">
            <article>
              <h5>Send Your Message</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                gravida quis libero eleifend ornare. Maecenas mattis enim at
                arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio,
                malesuada eu libero sit amet, congue aliquam leo. In hac
                habitasse platea dictumst.
              </p>
            </article>
            <Form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <TextInput
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <EmailInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <PhoneInput
                    name="phone"
                    type="phoneNumber"
                    pattern={/^01[0-2|5]{1}[0-9]{8}$/}
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <TextInput
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="textArea">
                <TextInput
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Send />
                Send Now
              </button>
            </Form>
          </div>
          <div className="contact col-lg-4 shadow-sm">
            <article>
              <h5>Contact Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                gravida quis libero eleifend ornare. habitasse platea dictumst.
              </p>
            </article>
            <ul>
              <li>
                <PhoneIncoming />
                <div className="info">
                  <span>Contact Us</span>
                  <a href="tel:">(123) 123-456</a>
                </div>
              </li>
              <li>
                <MailOpen />
                <div className="info">
                  <span>Email Support</span>
                  <a href="mailto:">info@examplesite.com</a>
                </div>
              </li>
              <li>
                <MapPin />
                <div className="info">
                  <span>Our Location</span>
                  <a href="#">45 Park Avenue, NY</a>
                </div>
              </li>
            </ul>
            <div className="social">
              <h5>Follow Us</h5>
              <ul>
                <li className="shadow-sm">
                  <a href="#">
                    <img src={facebook} alt="notFound" />
                  </a>
                </li>
                <li className="shadow-sm">
                  <a href="#">
                    <img src={twitter} alt="notFound" />
                  </a>
                </li>
                <li className="shadow-sm">
                  <a href="#">
                    <img src={instagram} alt="notFound" />
                  </a>
                </li>
                <li className="shadow-sm">
                  <a href="#">
                    <img src={pinterest} alt="Pinterest" />
                  </a>
                </li>
                <li className="shadow-sm">
                  <a href="#">
                    <img src={whatsapp} alt="Whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <MapComponent />
    </div>
  );
}
