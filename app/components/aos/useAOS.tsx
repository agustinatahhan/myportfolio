"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let __aosInited = false;

type AosOptions = {
  offset?: number; delay?: number; duration?: number; easing?: string;
  once?: boolean; mirror?: boolean; anchorPlacement?: string;
  disable?: boolean | (() => boolean);
  startEvent?: string; initClassName?: string; animatedClassName?: string;
  useClassNames?: boolean; disableMutationObserver?: boolean;
  debounceDelay?: number; throttleDelay?: number;
};

export function useAOS(options?: AosOptions) {
  useEffect(() => {
    if (!__aosInited) {
      AOS.init({
        duration: 400,
        once: true,
        offset: 80,
        ...options,
      });
      __aosInited = true;
    } else {
      AOS.refresh();
    }
  }, [options]);
}
