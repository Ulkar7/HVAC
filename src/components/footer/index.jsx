import "./style.scss";
import HvacLogo from "../../assets/hvac-logo.webp";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer-container">
          {
            <>
              <div className="location">
                <img src={HvacLogo} />
                <h3>Qualified HVAC</h3>
                <p>
                  <b>Location:</b> Sacramento, California
                </p>
                <b>(916) 409-3381</b>
              </div>

              <div className="navigation">
                <h3>Navigation</h3>
                <div className="hovers">
                  <a href="#slider">
                    {" "}
                    <p>Home</p>
                  </a>
                  <a href="#about">
                    <p>About</p>
                  </a>
                  <a href="#review">
                    {" "}
                    <p>Reviews</p>
                  </a>
                  <a href="#contact">
                    <p>Contact</p>
                  </a>
                </div>
              </div>
              <div className="days-times">
                <h3>Hours of operation</h3>
                <div>
                  <div className="days">
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                  </div>
                  <div className="times">
                    <p>7:00 am - 8:00 pm</p>
                    <p>7:00 am - 8:00 pm</p>
                    <p>7:00 am - 8:00 pm</p>
                    <p>7:00 am - 8:00 pm</p>
                    <p>7:00 am - 8:00 pm</p>
                    <p>7:00 am - 8:00 pm</p>
                    <p>7:00 am - 8:00 pm</p>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
