import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/swiper-bundle.css'


function Skills() {
    const skills = ["C++", "HTML", "CSS", "Bootstrap", "JavaScript", "React", "Java", "SQL"];

    const isSmallScreen = window.matchMedia("(max-width: 991px)").matches;

    return (
        <div id="skills" className="skills-container container bg-dark">
            <h2 className="skills-title text-center text-light">Skills</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={isSmallScreen ? 5 : 30}
                slidesPerView={isSmallScreen ? 1 : 3}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="swiper-container"
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index} className="skill-slide">
                        <div><h2>{skill}</h2></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Skills