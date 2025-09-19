// components/PickerWheel.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type List = { id: number; type: string };

export default function PickerWheel({
  list,
  current,
  onChange,
}: {
  list: List[];
  current: number;
  onChange: (n: number) => void;
}) {
  const size = 340;
  const center = size / 2;
  const radius = 130;
  const anglePerItem = 360 / list.length;

  // позиция выбранного типа даты
  const desiredAngleDeg = -60;

  const initialRotation = desiredAngleDeg - anglePerItem * current;

  const rotationRef = useRef({ val: initialRotation });
  const [rotation, setRotation] = useState<number>(
    Number(initialRotation.toFixed(3))
  );

  const labelRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    const target = desiredAngleDeg - anglePerItem * current;

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
  }, [current, anglePerItem]);

  return (
    <div
      className="picker-wheel"
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
          stroke="#e6e9ee"
          strokeWidth={2}
          fill="none"
        />

        {list.map((cat, i) => {
          const index = i + 1;
          const baseDeg = (360 / list.length) * index;
          const angleDeg = baseDeg + rotation;
          const angleRad = (angleDeg * Math.PI) / 180;

          const x = center + radius * Math.cos(angleRad);
          const y = center + radius * Math.sin(angleRad);

          const xStr = Number(x.toFixed(3));
          const yStr = Number(y.toFixed(3));

          const isSelected = index === current;

          return (
            <g
              key={cat.id}
              transform={`translate(${xStr},${yStr})`}
              onClick={() => onChange(index)}
              style={{ cursor: "pointer" }}
            >
              {isSelected ? (
                <>
                  <circle r={18} stroke="#2f3b5a" strokeWidth={2} fill="#fff" />
                  <text
                    textAnchor="middle"
                    dy="6"
                    fontSize={14}
                    fontWeight={700}
                    fill="#2f3b5a"
                  >
                    {index}
                  </text>

                  <text
                    ref={labelRef}
                    x={28}
                    dy="6"
                    fontSize={13}
                    fontWeight={600}
                    fill="#2f3b5a"
                    style={{ whiteSpace: "nowrap", pointerEvents: "none" }}
                  >
                    {cat.type}
                  </text>
                </>
              ) : (
                <circle r={5} fill="#2f3b5a" opacity={0.75} />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
