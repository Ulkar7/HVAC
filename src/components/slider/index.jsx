/* eslint-disable react/no-unescaped-entities */
import "./style.scss";
import { Zoom } from "react-awesome-reveal";
const Slide = () => {
  return (
    <>
      <section id="slider">
        <div className="backgroundd">
          <h1>
            <Zoom>Qualified HVAC</Zoom>
          </h1>

          <p>
            <Zoom>"Carrier, Bryant, Payne" HVAC Contractor</Zoom>
          </p>

          <a href="#contact">
            <button>CONTACT US</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Slide;
