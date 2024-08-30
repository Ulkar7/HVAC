import { useState } from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rev1 from "../../assets/rev1.png";
import Rev2 from "../../assets/rev2.png";
import Rev3 from "../../assets/rev3.png";
import Rev4 from "../../assets/rev4.png";
import Rev5 from "../../assets/rev5.png";
import Rev6 from "../../assets/rev6.png";
import Rev7 from "../../assets/rev7.png";
import Yelp from "../../assets/yelp.png";
import Yrev1 from "../../assets/yrev1.png";
import Yrev2 from "../../assets/yrev2.jpg";
import Yrev3 from "../../assets/yrev3.jpg";
import Yrev4 from "../../assets/yrev4.jpg";
import Yrev5 from "../../assets/yrev5.jpg";
import Yrev6 from "../../assets/yrev6.jpg";
import Yrev7 from "../../assets/yrev7.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaYelp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import WindowWidthComponent from "../window";

const Reviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const reviews = [
    {
      name: "Alex Chernak",
      time: "2 months ago",
      text: "Excellent same day service, super prompt. Our HVAC died the night before, I called them at 0800 and by 1215 a friendly and highly knowledgeable tech was standing at our door and recharged it! He did not try to pressure us into a new unit, even though ours is 35 years old! Upon checking the vent outflow it registered low 40s. 👌 He educated us on what to look for when determining the end of life cycle for an evaporator unit. I'll definitely call them again. ",
      fullText: " ",
      img: Rev1,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
      ),
    },
    {
      name: "Haakon Poulsen",
      time: "5 years ago",
      text: "Best repair experience I've ever had. I blew out the fuse in my oven using self-clean mode, and he was over to the house within hours of calling. He walked me through exactly what he was doing throughout the whole process, and it was just amazing from my standpoint. Here I'm looking to see if there is a connection between these two points, which would indicate the panel is bad. Here I'm looking to see if there is a connection between these two points, which indicates the fuse is bad. Ok, do you see the meter here vs when I do it here? Great, if you're ok with it, then I will go ahead and find a replacement fuse based on your model number and I'll be back tomorrow. He was excellent with communication over the phone, professionalism, and timeliness. And it was so inexpensive! Will definitely use again for any appliance issues.",
      fullText: " ",
      img: Rev2,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
      ),
    },
    {
      name: "Jeannine D. Sato",
      time: "3 years ago",
      text: "Vic! Thank you!!! He was the most reasonable in town. He called with an ETA, explained everything, and he was honest about what I was dealing with. Very professional. If I have something in the future I will def be calling him again",
      fullText: " ",
      img: Rev3,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
      ),
    },

    {
      name: "Kimberly Harrison",
      time: "2 years ago",
      text: "Thank You Vic! you were honest, professional, and really worked with us to save money. You will always be our pro to call, and refer.",
      fullText: " ",
      img: Rev4,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
      ),
    },

    {
      name: "Julia B",
      time: "6 years ago",
      text: "Very good service, fixed my samsung washing machine! Great customer service!",
      fullText: " ",
      img: Rev5,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
      ),
    },

    {
      name: "Patricia L Macdonald",
      time: "2 years ago",
      text: "Vik went above and beyond to find the part for my oven. Very knowledgeable and polite.",
      fullText: " ",
      img: Rev6,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
      ),
    },

    {
      name: "Roy Cunningham",
      time: "2 months ago",
      text: "Great job, Tim did a diagnostic and found my Tsat was to blame! Had one on his truck and got me going right away!",
      fullText: " ",
      img: Rev7,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FcGoogle />
        </a>
      ),
    },
  ];

  const yelpReviews = [
    {
      name: "Charles M.",
      time: "2 months ago",
      text: "I am very impressed with Vic at Qualified HVAC and would recommend him to everyone.What stands out with Vic is his honesty, integrity, and knowledge. Without his expert service, I would be facing triple digit temperatures without my HVAC. So rarely do I meet someone who meets all their commitments (appointments, service, and materials).His pricing is more than fair and extremely competitive. Searching Yelp showed that others may have had lower prices for the initial review, but I was never up-charged. Vic is a great person for you to get feedback on your HVAC system and if you do not choose Vic at first, I recommend that you use him as a second opinion. You will not be disappointed.",
      fullText: " ",
      img: Yrev1,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FaYelp />
        </a>
      ),
    },

    {
      name: "Marusya G.",
      time: "May 27, 2024",
      text: "Vic was FANTASTIC! He said he would arrive between 9:00 and he arrived at 9:05. He diagnosed the problem (bad control board), there was a part in the warehouse, he was back in an hour and the A/C was up and running by 11:00. Thank you Vic!",
      fullText: " ",
      img: Yrev2,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FaYelp />
        </a>
      ),
    },

    {
      name: "Andrew L.",
      time: "Jul 13, 2024",
      text: "Dealing with Qualified was a fantastic experience. Our A/C went out in the middle of a heat wave. Even when other vendors were telling me it'd be two weeks to just come out, Qualified was able to come out the next day. Vic was always quick to respond, informative, and helpful. His quotes were reasonable and the final price for the project was actually less than originally expected. Even in the face of some supply chain hiccups, we were able to get things back up and running within 3 days. I hope to not need HVAC service again any time soon, but if I do, I'll definitely be a return customer.",
      fullText: " ",
      img: Yrev3,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FaYelp />
        </a>
      ),
    },

    {
      name: "Bernadette A.",
      time: "Jul 26, 2024",
      text: "My ac unit went out the other day, it was a 104 out . Called quality hvac at 6 pm they had it working in less than a hour, after changing a broken part. I highly recommend this company.",
      fullText: " ",
      img: Yrev4,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FaYelp />
        </a>
      ),
    },

    {
      name: "Christian D.",
      time: "May 29, 2024",
      text: "Qualified HVAC was easy to communicate and work with. I messaged them through Yelp and they got back to me in a timely manner. I spoke to Vick and he was able to schedule Tim to come to my property the  next day. Vick even called me 20 minutes before Tim would be arriving. Will definitely use Qualified HVAC in the future.",
      fullText: " ",
      img: Yrev5,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FaYelp />
        </a>
      ),
    },

    {
      name: "Brenda H.",
      time: "Apr 11, 2024",
      text: "Called Quality Repair late morning and Vic came out within just a few hours to look at our Samsung refrigerator. Cleaned and diagnosed the problem as a bad compressor which was resulting in inconsistent frig cooling as well as tripping our GFI outlet on the circuit the frig uses. Very fair, honest service and recommendations that I greatly appreciated. We'll be getting a new frig and he did not try to sway me instead, he agreed that would be the best option in our situation. Thanks Vic! We will call you again if we need help! Highly recommend!",
      fullText: " ",
      img: Yrev6,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FaYelp />
        </a>
      ),
    },

    {
      name: "Jeremy C.",
      time: "Feb 25, 2022",
      text: "I love Vik. He is a great repairman. Friendly, fast, efficient and fair in pricing. He's worked on many of my appliances and he always does a great job.. As long as Vik and Qualified Repair is around, I'm using them. You should to.",
      fullText: " ",
      img: Yrev7,
      img2: (
        <a
          href="https://www.google.com/search?hl=en-AZ&gl=az&q=Qualified+HVAC&ludocid=8895642827132284643&lsig=AB86z5UEr99D0ZFALFpBK1K-yLWd"
          target="_blank"
        >
          <FaYelp />
        </a>
      ),
    },
  ];
  const width = WindowWidthComponent();
  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="review">
      <h1>Reviews</h1>
      <p>Read what our customers are saying about us!</p>
      <Swiper
        style={{
          width: "90%",
          height: "350px",
          justifyContent: "space-between",
        }}
        slidesPerView={width < 480 ? 1 : width < 992 ? 2 : 3}
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide"
            style={{
              textAlign: "center",
              backgroundColor: "#f4f4f4",
              color: "rgb(54, 54, 54)",
              borderRadius: "12px",
            }}
          >
            <div className="rev-images">
              <span>{review.img2 ?? ""}</span>
              <img src={review.img} alt={review.name} />
            </div>
            <h3>{review.name}</h3>
            <p style={{ color: "grey", marginBottom: "10px" }}>{review.time}</p>
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <div
              className={`review-text-container ${
                expandedIndex === index ? "expanded" : ""
              }`}
            >
              <p
                style={{
                  padding: "0 24px",
                  overflowY: "auto",
                  maxHeight: "170px",
                }}
              >
                {expandedIndex === index
                  ? review.text
                  : review.text.length == review.text.slice(0, 250).length
                  ? review.text
                  : review.text.slice(0, 250) + "..."}
              </p>
            </div>
            {review.text.length > 250 && (
              <button
                style={{ paddingLeft: "16px" }}
                onClick={() => toggleReadMore(index)}
                className={`read-more-button ${
                  expandedIndex === index ? "read-less-button" : ""
                }`}
              >
                {expandedIndex === index ? "Read less" : "Read more"}
              </button>
            )}
          </SwiperSlide>
        ))}

        {yelpReviews.map((yelpReview, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide"
            style={{
              textAlign: "center",
              backgroundColor: "#f4f4f4",
              color: "rgb(54, 54, 54)",
              borderRadius: "12px",
            }}
          >
            <div className="rev-imagess">
              <span>{yelpReview.img2 ?? ""}</span>
              <img src={yelpReview.img} alt={yelpReview.name} />
            </div>
            <h3>{yelpReview.name}</h3>
            <p style={{ color: "grey", marginBottom: "10px" }}>
              {yelpReview.time}
            </p>
            <img src={Yelp} />
            <img src={Yelp} />
            <img src={Yelp} />
            <img src={Yelp} />
            <img src={Yelp} />
            <div
              className={`review-text-container ${
                expandedIndex === index ? "expanded" : ""
              }`}
            >
              <p
                style={{
                  padding: "0 24px",
                  overflowY: "auto",
                  maxHeight: "170px",
                }}
              >
                {expandedIndex === index
                  ? yelpReview.text
                  : yelpReview.text.length ==
                    yelpReview.text.slice(0, 250).length
                  ? yelpReview.text
                  : yelpReview.text.slice(0, 250) + "..."}
              </p>
            </div>
            {yelpReview.text.length > 250 && (
              <button
                onClick={() => toggleReadMore(index)}
                className={`read-more-button ${
                  expandedIndex === index ? "read-less-button" : ""
                }`}
              >
                {expandedIndex === index ? "Read less" : "Read more"}
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
