import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EventsType } from "../../types";

const EventsSlider = ({ events }: { events: EventsType[] }) => {
  return (
    <div className="events-slider desktop-content">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={24}
        navigation
        centeredSlides={false}
        grabCursor
        className="events-swiper"
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
