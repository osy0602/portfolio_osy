import React from 'react'
import {useRef} from 'react';
import {AnimatedTextLines} from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { context } from '@react-three/fiber';
const AnimatedNameSection = ({subTitle, title, text, withScrollTrigger = false}) => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: withScrollTrigger 
                ? {
                    trigger: contextRef.current,
                }
                :undefined,
            }
        );
        tl.from(contextRef.current, {
        y:"50vh",
        duration: 1,
        ease:"circ.out",
        });
        tl.from(headerRef.current, {
        opacity:0,
        y:"200",
        duration:1,
        ease:"circ.out",
        },"<+0.2");
    }, []);
  return (
    <div ref ={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
            <div 
            ref={headerRef}
            className='flex flex-col pt-16 sm:gap-16 px-10'>
                <p className={`text-sm font-light uppercase text-[32px] text-[rgba(229,223,161,1)]`}>
                    {subTitle}
                </p>
                <h1 className={`flex flex-col flex-wrap uppercase text-[158px] font-theater leading-[0.6] md:block tracking-[0.5rem] text-[rgba(229,223,161,1)] -mt-8`}>{title}</h1>
                <div className={`relative text-[rgba(229,223,161,1)] -mt-15`}>
                    <AnimatedTextLines 
                    text = {text}
                    className={`font-light uppercase text-3xl text-[rgba(229,223,161,1)]`}/>
        </div>
            </div>
        </div>
        
    </div>
  )
}

export default AnimatedNameSection
