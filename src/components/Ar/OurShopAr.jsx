import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";

const OurShopAr = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      console.log(res);
      setProject(res.data.projects);
    });
  }, []);

  return (
    <>
      <div className="MainContentSlider">
        <div className="OurShopClass OurShopAr">
          <h3>المتجر</h3>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={60}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              200: {
                width: 200,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
          >
            {projects.slice(0, 4).map((projects) => (
              <SwiperSlide key={projects.id}>
                <>
                  <img width="100%" src={projects.photo} alt="Not_Found" />
                  <div className="underSlidesContent">
                    <div>
                      <h3>{projects.titleAr}</h3>
                      <h4>{projects.salary}</h4>
                    </div>
                    <div>
                      <Link href="/">عرض</Link>
                    </div>
                  </div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurShopAr;
