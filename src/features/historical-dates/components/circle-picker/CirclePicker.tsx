"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CategoriesType } from "../../types";

const CirclePicker = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: CategoriesType[];
  selectedCategory: number;
  setSelectedCategory: (index: number) => void;
}) => {
  const size = 535;
  const center = size / 2;
  const radius = 260;
  const anglePerItem = 360 / categories.length;

  const desiredAngleDeg = -60;
  const initialRotation = desiredAngleDeg - anglePerItem * selectedCategory;

  const rotationRef = useRef({ val: initialRotation });
  const [rotation, setRotation] = useState<number>(
    Number(initialRotation.toFixed(3))
  );

  const labelRef = useRef<SVGTextElement | null>(null);
  const circlesRef = useRef<(SVGCircleElement | null)[]>([]);
  const labelsRef = useRef<(SVGTextElement | null)[]>([]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // анимация вращения при выборе
  useEffect(() => {
    const target = desiredAngleDeg - anglePerItem * selectedCategory;

    gsap.killTweensOf(rotationRef.current);
    gsap.to(rotationRef.current, {
      val: target,
      duration: 0.8,
      ease: "power2.inOut",
      onUpdate() {
        setRotation(Number(rotationRef.current.val.toFixed(3)));
      },
    });

    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: 6 },
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [selectedCategory, anglePerItem, desiredAngleDeg]);

  // анимация для точек категории
  useEffect(() => {
    categories.forEach((_, i) => {
      const circle = circlesRef.current[i];
      const label = labelsRef.current[i];

      if (!circle || !label) return;

      const index = i + 1;
      const isSelected = index === selectedCategory;
      const isHovered = index === hoveredIndex;

      if (isSelected) {
        // Анимация для выбранного
        gsap.to(circle, {
          r: 18,
          fill: "#f4f5f9",
          stroke: "rgba(48, 62, 88, 0.5)",
          strokeWidth: 2,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(label, {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      } else if (isHovered) {
        // Анимация для hover (но не выбранного)
        gsap.to(circle, {
          r: 18,
          fill: "#fff",
          stroke: "#42567a",
          strokeWidth: 2,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(label, {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      } else {
        // Обычное состояние
        gsap.to(circle, {
          r: 5,
          fill: "#42567a",
          strokeWidth: 0,
          duration: 0.25,
          ease: "power2.in",
        });
        gsap.to(label, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    });
  }, [hoveredIndex, selectedCategory, categories]);

  return (
    <div className="circle-picker-container">
      <div
        className="circle-picker"
        style={{
          width: size,
          height: size,
          position: "relative",
          overflow: "visible",
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ overflow: "visible", display: "block" }}
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#42567a"
            opacity={0.2}
            strokeWidth={2}
            fill="none"
          />

          {categories.map((cat, i) => {
            const index = i + 1;
            const baseDeg = (360 / categories.length) * index;
            const angleDeg = baseDeg + rotation;
            const angleRad = (angleDeg * Math.PI) / 180;

            const x = center + radius * Math.cos(angleRad);
            const y = center + radius * Math.sin(angleRad);

            const isSelected = index === selectedCategory;

            return (
              <g
                key={cat.id}
                transform={`translate(${x.toFixed(3)},${y.toFixed(3)})`}
                onClick={() => setSelectedCategory(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: "pointer" }}
              >
                {isSelected ? (
                  <>
                    <circle
                      r={18}
                      stroke="rgb(48, 62, 88, 0.5)"
                      strokeWidth={2}
                      fill="#f4f5f9"
                    />
                    <text
                      dominantBaseline="middle"
                      dy="2"
                      dx="-6"
                      fontSize={20}
                      fontStyle="regular"
                      fill="#42567a"
                    >
                      {index}
                    </text>
                    <text
                      ref={labelRef}
                      x={28}
                      dy="6"
                      fontFamily="PT Sans"
                      fontSize={20}
                      fontWeight="bold"
                      fill="#42567a"
                      style={{ whiteSpace: "nowrap", pointerEvents: "none" }}
                    >
                      {cat.type}
                    </text>
                  </>
                ) : (
                  <>
                    <circle
                      ref={(el) => {
                        circlesRef.current[i] = el;
                      }}
                      r={5}
                      fill="#42567a"
                    />
                    <text
                      ref={(el) => {
                        labelsRef.current[i] = el;
                      }}
                      dominantBaseline="middle"
                      dy="2"
                      dx="-6"
                      fontSize={20}
                      fill="#42567a"
                      opacity={0}
                      fontFamily="PT Sans"
                      style={{ pointerEvents: "none" }}
                    >
                      {index}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default CirclePicker;
