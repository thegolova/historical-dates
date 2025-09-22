import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EventsType } from "../../types";
import ArrowButton from "@/shared/components/UI/arrow-button/ArrowButton";

const EventsSlider = ({
  events,
  isMobile,
}: {
  events: EventsType[];
  isMobile: boolean;
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Ждём, пока кнопки появятся в DOM
    setSwiperReady(true);
  }, []);

  return (
    <div
      className={`events-slider desktop-content ${
        isMobile && "events-slider-mobile"
      }`}
    >
      {swiperReady && (
        <>
          {!isMobile && (
            <button ref={prevRef} className="custom-prev-button">
              <ArrowButton position="left" />
            </button>
          )}
          <Swiper
            modules={[Navigation]}
            slidesPerView={isMobile ? "auto" : 3}
            spaceBetween={24}
            centeredSlides={false}
            grabCursor
            className="events-swiper"
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
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
          {!isMobile && (
            <button ref={nextRef} className="custom-next-button">
              <ArrowButton position="right" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default EventsSlider;
