import "./style.scss";
import Logo from "../../assets/hvac-logo.webp";
import { FcGoogle } from "react-icons/fc";
import { FaYelp } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header id="header">
      <div className="logo">
        <a href="#slider">
          <img src={Logo} />
        </a>
      </div>
      <ul>
        <div className="hoverss">
          <li>
            <a href="#slider">Home</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>

          <li>
            <a href="#review">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
      <div className="links">
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
        <a
          href="https://www.yelp.com/biz/qualified-hvac-fair-oaks-2"
          target="_blank"
        >
          <FaYelp />
        </a>
        <a href="tel:(916)%20409-3381">
          <button>(916) 409-3381</button>
        </a>
      </div>
      <div className={"burger-menu"}>
        <span>
          {menu ? (
            <IoMdClose onClick={() => setMenu(!menu)} />
          ) : (
            <IoMenuSharp onClick={() => setMenu(!menu)} />
          )}
        </span>
      </div>
      <div className={`responsive-menu ${menu ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="#slider">Home</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>

          <li>
            <a href="#review">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="links">
          <a
            href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
            target="_blank"
          >
            <FcGoogle />
          </a>
          <a
            href="https://www.yelp.com/biz/qualified-hvac-fair-oaks-2"
            target="_blank"
          >
            <FaYelp />
          </a>
          <a href="tel:(916)%20409-3381">
            <button>(916) 409-3381</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
