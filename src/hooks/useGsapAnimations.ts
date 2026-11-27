
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const items = gsap.utils.toArray(
        ".rts_jump_animation-wrapper .rts-jump__item"
      );

      if (items.length && window.innerWidth > 991) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            scale: 1.15
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: "bounce",
            scrollTrigger: {
              trigger: items[0],
              start: "top 95%",
              once: true
            }
          }
        );
      }

      [".images", ".images-r", ".images-2"].forEach((selector) => {
        gsap.utils.toArray(selector).forEach((element) => {
          gsap.to(element, {
            x: selector === ".images" ? -250 :
               selector === ".images-r" ? 250 : 0,
            y: selector === ".images-2" ? -290 : 0,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        });
      });

    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);
}
