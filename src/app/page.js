"use client";

import Lenis from "@studio-freight/lenis";
import Card from "./components/Card";
import { projects } from "./data";

import { useScroll } from "framer-motion";

import { useEffect, useRef } from "react";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className="main">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            {...project}
            i={i}
          />
        );
      })}
    </main>
  );
}
