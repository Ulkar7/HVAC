import "./style.scss";
import Trophy from "../../assets/trophy.svg";
import Star from "../../assets/star.svg";
import Lightning from "../../assets/lightning.svg";

const Trust = () => {
  return (
    <section id="trust">
      <div className="container">
        <h1>Trust the HVAC Experts</h1>
        <div className="cards">
          <div className="experts">
            <img src={Trophy} alt="Trophy" />
            <h4>Expert Services</h4>
            <p>
              Elevate your comfort with Qualified HVAC – the expert services you
              can rely on for efficient and tailored HVAC solutions in
              Sacramento.
            </p>
          </div>
          <div className="customer">
            <img src={Star} alt="Star" />
            <h4>Customer Satisfaction</h4>
            <p>
              At Qualified HVAC, customer satisfaction is our priority.
              Experience unparalleled service and comfort with our HVAC
              solutions in Sacramento.
            </p>
          </div>
          <div className="responsiveness">
            <img src={Lightning} alt="Lightning" />
            <h4>Fast Responsiveness</h4>
            <p>
              Need swift HVAC solutions? Rely on Qualified HVAC for fast
              responsiveness in Sacramento – your go-to experts for prompt and
              efficient service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
