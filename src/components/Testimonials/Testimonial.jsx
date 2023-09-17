import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Abhay is a highly-skilled, helpful, and experienced professional who can easily tackle any problem. Her work is always outstanding, and he goes the extra mile to ensure a smooth and successful release for the team's projects. Working with Abhay has been a great experience, as I have learned much from her. I highly recommend Abhay as he possesses all the hard and soft skills needed in an excellent developer.",
    },
    {
      img: profilePic2,
      review:
        "Abhay is an excellent resource, and a master at front-end programming. He is a hardworking and dedicated person who has ability to handle multiple tasks within stipulated time frame. Abhay will be a valuable asset to any company.",
    },
    {
      img: profilePic3,
      review:
        "Abhay did an exceptional job on recent projects.He is a very productive person and is a multi-skilled person with vast knowledge which makes her both smart and professional. Experienced, deadline oriented and intelligent person! Has a lot of deep technical background. I recommend her to anyone who needs Software Engineer.",
    },
    {
      img: profilePic4,
      review:
        "Very smart, enthusiastic, energetic team player.He has ability to adapt herself into new technologies quickly.He use to give 100% output even beyond that. I proud to say that I have worked with such a good performance Abhay.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
