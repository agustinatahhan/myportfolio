// app/[locale]/_components/SectionWave.tsx
"use client";

type Props = {
  position?: "top" | "bottom";
  color?: string;       // color del bloque vecino (ej: #f3efff)
  height?: number;      // alto del svg en px
  className?: string;
};

export default function SectionWave({
  position = "top",
  color = "#f3efff",
  height = 110,
  className = "",
}: Props) {
  const isTop = position === "top";
  return (
    <div
      className={[
        "absolute inset-x-0 leading-[0] overflow-hidden pointer-events-none",
        isTop ? "-top-px" : "-bottom-px",
        className,
      ].join(" ")}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height }}
        className={isTop ? "block w-full rotate-180" : "block w-full"}
      >
        <path
          fill={color}
          d="M0,40 C180,80 360,0 540,18 C720,36 900,100 1080,92 C1260,84 1380,40 1440,36 L1440,120 L0,120 Z"
          opacity="0.6"
        />
        <path
          fill={color}
          d="M0,28 C200,70 340,12 520,22 C740,34 900,78 1120,70 C1260,64 1380,28 1440,24 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
