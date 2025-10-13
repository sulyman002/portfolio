import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseDot = () => {
    const dotRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;

        gsap.set(dot, { xPercent: -50, yPercent: -50 });

        const moveDot = (e) => {
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 1.2,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", moveDot);
        return () => window.removeEventListener("mousemove", moveDot)
    }, [])

  return (
    <div ref={dotRef} className='fixed top-0 left-0 w-3 h-3 bg-white/50 rounded-full pointer-events-none mix-blend-difference z-99 '>

    </div>
  )
}

export default MouseDot