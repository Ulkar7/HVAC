/* eslint-disable react/no-unescaped-entities */
import Service1 from "../../assets/service1.webp";
import Service2 from "../../assets/service2.webp";
import Service3 from "../../assets/service3.webp";
// import Service4 from "../../assets/service4.webp";
import Service5 from "../../assets/service5.webp";
import { Slide } from "react-awesome-reveal";

import "./style.scss";

export const Services = () => {
  return (
    <section className="container" id="services">
      <div className="services">
        <h1>Expert Services</h1>
        <p>
          Reliable HVAC solutions in Sacramento! Trust Qualified HVAC for expert
          services.
        </p>
      </div>

      <div className="courses">
        <Slide direction="right" duration="1000" className="course">
          <div>
            <img src={Service1} />
            <div className="content">
              <h1>HVAC Contractor</h1>
              <p>
                Trust our expert HVAC contractors for professional heating,
                ventilation, and air conditioning solutions tailored to your
                needs.
              </p>
            </div>
          </div>
        </Slide>
        <Slide direction="right" duration="1200" className="course">
          <div>
            <img src={Service2} />
            <div className="content">
              <h1>Air Conditioning Services</h1>
              <p>
                Experience superior indoor comfort with our comprehensive air
                conditioning services tailored to your needs.
              </p>
            </div>
          </div>
        </Slide>
        <Slide direction="right" duration="1400" className="course">
          <div>
            <img src={Service3} />
            <div className="content">
              <h1>Heating Installation</h1>
              <p>
                We provide professional heating installation services to enhance
                comfort and efficiency in your space.
              </p>
            </div>
          </div>
        </Slide>
        {/* <Slide direction="right" duration="1600" className="course">
          <div>
            <img src={Service4} />
            <div className="content">
              <h1>Heating Installation</h1>
              <p>
                We provide professional heating installation services to enhance
                comfort and efficiency in your space.
              </p>
            </div>
          </div>
        </Slide> */}
        <Slide direction="right" duration="1800" className="course">
          <div>
            <img src={Service5} />
            <div className="content">
              <h1>HVAC System</h1>
              <p>
                Experience top-notch HVAC system services tailored to your
                needs, ensuring optimal comfort and efficiency.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};
