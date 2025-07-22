import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const AnimatedTextLines = ({ text, className}) => {
    const  lineRefs = useRef([]);
    const containerRef = useRef(null);
    const lines = text.split("\n").filter((line) => line.trim() != "");
    useGSAP(() => {
        if (lineRefs.current.length > 0){
            gsap.from(lineRefs.current, {
            y:100,
            opacity:0,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger: containerRef.current,
            },
            });
        }
    });

    return (
        <div ref={containerRef} className={className}>
            {lines.map((line, index) => (
                <span
                    key={index}
                    ref={(el) => (lineRefs.current[index] = el)}
                    className="block leading-relaxed tracking-wide text-pretty">
                    {line}
                </span>
            ))}
        </div>
    )
};
