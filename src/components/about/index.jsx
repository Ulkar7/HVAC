import "./style.scss";
import AboutUs from "../../assets/aboutus.jpg";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about">
      <img src={AboutUs} />

      <div className="content">
        <h1>
          <Slide direction="right">Our Story</Slide>
        </h1>
        <p>
          {" "}
          <Slide direction="right">
            At Qualified HVAC in Sacramento, CA, we combine a decade of HVAC
            expertise with a genuine passion for ensuring your comfort
            throughout the seasons. Established in 2017, our business is
            committed to providing top-tier HVAC services, from installing new
            central air conditioners to conducting urgent repairs on your
            heating systems. Trust our licensed and insured professionals to
            bring quality and reliability to your home. We trust in top industry
            brands like Carrier, Bryant, and Payne to provide our customers with
            the most reliable and efficient HVAC solutions available.
          </Slide>
        </p>
      </div>
    </section>
  );
};

export default About;
