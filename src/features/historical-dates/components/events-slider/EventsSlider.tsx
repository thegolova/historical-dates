import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EventsType } from "../../types";

const EventsSlider = ({
  events,
  isMobile,
}: {
  events: EventsType[];
  isMobile: boolean;
}) => {
  return (
    <div
      className={
        isMobile ? "events-slider-mobile" : "events-slider desktop-content"
      }
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView={isMobile ? "auto" : 3}
        spaceBetween={24}
        centeredSlides={false}
        grabCursor
        className="events-swiper"
        {...(!isMobile && { navigation: true })}
      >
        {events.map((event) => {
          const year = new Date(event.date).getFullYear();
          return (
            <SwiperSlide key={event.id}>
              <div className="slide-card">
                <div className="slide-year">{year}</div>
                <div className="slide-desc">{event.description}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default EventsSlider;
