import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./DotPagination.module.scss";

type DotPaginationProps = {
  count: number;
  current: number;
};

const DotPagination: FC<DotPaginationProps> = ({ count, current }) => {
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;

      const index = i + 1;
      if (index === current) {
        gsap.to(dot, {
          scale: 1.2,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(dot, {
          scale: 1,
          opacity: 0.4,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  }, [current]);

  return (
    <div className={styles.container}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className={`${styles.element} ${
            i === current ? styles.active : styles.inactive
          }`}
        />
      ))}
    </div>
  );
};
export default DotPagination;
