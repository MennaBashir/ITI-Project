import Container from "react-bootstrap/Container";
import {
  AlignJustify,
  Smartphone,
  ShoppingCart,
  Heart,
  LogIn,
  Tags,
  ArrowRightLeft,
  Watch,
  Tv,
  Camera,
  Gamepad2,
  Search,
  Headphones,
  House,
  Layers3,
  Chrome,
  Bookmark,
  Contact,
  UserRoundSearch,
} from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderOfNavbar from "./HeaderOfNavbar";
import "./navbar.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoImg from "/assets/logo.png";

export default function NavbarComponent() {
  return (
    <div className="navbarComponent container">
      <HeaderOfNavbar />
      <nav>
        <Navbar expand="lg" className="bg-white mb-3">
          <Container fluid className="NavContainer">
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="start"
            >
              <Offcanvas.Header closeButton className="headerNav">
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  <img src={logoImg} alt="notFound" width="100px" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bodyNav">
                <div className="btn btn-primary d-none d-lg-flex buttonNav">
                  <AlignJustify />
                  <NavDropdown className="navA" title="Browse Categories">
                    <Link to={"/category/smartPhone"}>
                      <Smartphone />
                      SmartPhone & Laptop
                    </Link>
                    <Link to={"/category/smartWatch"}>
                      <Watch />
                      SmartWatch & Watch
                    </Link>
                    <Link to={"/category/TV"}>
                      <Tv />
                      TV,Music & Video
                    </Link>
                    <Link to={"/category/camera"}>
                      <Camera />
                      Camera
                    </Link>
                    <Link to={"/category/games"}>
                      <Gamepad2 />
                      Console Games
                    </Link>
                    <Link to={"/category/airpods"}>
                      <Headphones />
                      Airpods
                    </Link>
                  </NavDropdown>
                </div>
                <div>
                  <div className="d-block d-md-none search">
                    <input type="search" placeholder="Search" />
                    <span>
                      <Search />
                    </span>
                  </div>
                  <div>
                    <Nav className="justify-content-end flex-grow-1 pe-3 homeNav">
                      <Link to={"/"} className="navB">
                        <House className="d-block d-lg-none" />
                        Home
                      </Link>
                      <div className="iconlist">
                        <Layers3 className="d-flex d-lg-none" />
                        <NavDropdown
                          className="d-block d-lg-none"
                          title="Browse Categories"
                        >
                          <Link to={"/category/smartPhone"}>
                            <Smartphone />
                            SmartPhone & Laptop
                          </Link>
                          <Link to={"/category/smartWatch"}>
                            <Watch />
                            SmartWatch & Watch
                          </Link>
                          <Link to={"/category/TV"}>
                            <Tv />
                            TV,Music & Video
                          </Link>
                          <Link to={"/category/camera"}>
                            <Camera />
                            Camera
                          </Link>
                          <Link to={"/category/games"}>
                            <Gamepad2 />
                            Console Games
                          </Link>
                          <Link to={"/category/airpods"}>
                            <Headphones />
                            Airpods
                          </Link>
                        </NavDropdown>
                      </div>
                      <div className="iconlist">
                        <Chrome className="d-block d-lg-none" />
                        <NavDropdown title="Services" className="dropItem">
                          <Link to={"/aboutUs"} className="navB">
                            About Us
                          </Link>

                          <Link to={"/privacy"} className="navB">
                            Privacy
                          </Link>
                        </NavDropdown>
                      </div>
                      <Link to={"/blogs"} className="navB">
                        <Bookmark className="d-block d-lg-none" />
                        Blogs
                      </Link>
                      <Link to={"/contact"} className="navB">
                        <Contact className="d-block d-lg-none" />
                        Contact
                      </Link>
                      <div className="iconlist">
                        <UserRoundSearch className="d-block d-lg-none" />
                        <NavDropdown title="Account" className="dropItem">
                          <Link to={"/cart"}>
                            <ShoppingCart />
                            Shopping Cart
                          </Link>
                          <Link to={"/compare"}>
                            <ArrowRightLeft />
                            Compare
                          </Link>
                          <Link to={"/wishlist"}>
                            <Heart />
                            Wishlist
                          </Link>
                          <Link to={"/login"}>
                            <LogIn />
                            Login
                          </Link>
                        </NavDropdown>
                      </div>
                    </Nav>
                  </div>
                </div>
                <div className="offer d-none d-lg-block">
                  <span>
                    <Tags color="#0d6efd" strokeWidth={1.3} />
                    Special Offer!
                  </span>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
}
