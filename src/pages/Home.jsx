import { useState, useEffect } from "react";
import backgroundImg1 from "../assets/delkom1.jpg";
import backgroundImg2 from "../assets/Delkom9.jpg";
import backgroundImg3 from "../assets/Delkom11.jpg";
import backgroundImg4 from "../assets/Delkom10.jpg";
import backgroundImge5 from "../assets/background5.jpg"
import VolunteerFormModal from "../components/modal/VolunteerFormModal";
import About from "./About";
import OurImpact from "./OurImpact";
import Activities from "./Activities";
import Team from "./Team";
import DonationPage from "./DonationPage";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiperStyles.css";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <Activities />
      <OurImpact />
      <DonationPage />
      <Team />
      <ContactUs/>
    </>
  );
};

export const HomeContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [
    backgroundImg1,
    backgroundImge5,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
  ];

  return (
    <>
      <section className="h-[90vh] lg:h-[100vh] w-screen">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-color: yellow;"></span>`;
            },
          }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="flex flex-col items-center justify-center min-h-full font-nunito text-primary bg-dark/75">
                <h1 className="text-[2.5rem] leading-[1.1] font-bold text-center sm:text-3xl md:text-5xl lg:text-[3.5rem]">
                  Welcome to{" "}
                  <span className="text-darkYellow"> DelKom Charity </span>{" "}
                  Foundation
                </h1>
                <p className="w-[90%] lg:w-[80%] mx-auto text-center leading-9  mb-12 pt-4">
                  Our mission is to empower children in deprived communities
                  through practical ICT/IT training, creative writing and
                  crafting, Mentorship, and supporting them with educational
                  stationery.
                </p>
                <div className="space-x-5 space-y-6 sm:space-x-12 sm:space-y-12">
                  <button
                    className="text-md btn-primary"
                    onClick={() => setIsModalOpen(true)} //open modal on button click
                  >
                    Join us
                  </button>
                  <Link to="/donatePage">
                    <button className="text-md  btn-outline">Donate</button>
                  </Link>
                </div>
                <VolunteerFormModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)} //close modal
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Home;
