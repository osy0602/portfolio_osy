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
    <div className='grid'>
        <div ref ={contextRef} className='row-start-1 col-start-1 flex min-h-screen items-center'>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
                <div 
                ref={headerRef}
                className='flex flex-col pt-16 sm:gap-16 px-10'>
                    <p className={`text-sm uppercase text-[29px] text-yellow font-unica`}>
                        {subTitle}
                    </p>
                    <h1 className={`flex flex-col flex-wrap uppercase text-[158px] font-theater leading-[0.6] md:block text-yellow -mt-8`}>{title}</h1>
                    <div className={`relative text-yellow -mt-15 self-end` }>
                        <AnimatedTextLines 
                        text = {text}
                        className={`uppercase text-[64px] -mt-8 text-black font-unica`}/>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="row-start-1 col-start-1 self-end justify-self-start m-8 flex flex-col items-center gap-4 z-10">
                <img src='images/staryellow.png' alt="star" className='w-45 h-9'/>
                <p className='font-unica text-yellow text-[26px] -mt-4'>- AGILE LEARNER -</p>
        </div>
        <div className="row-start-1 col-start-1 self-end justify-self-center m-8 flex flex-col items-center gap-4 z-10">
                <img src='images/starred.png' alt="star" className='w-45 h-9'/>
                <p className='font-unica text-red text-[26px] -mt-4'>- GROWTH MINDSET -</p>
        </div>
        <div className="row-start-1 col-start-1 self-end justify-self-end m-8 flex flex-col items-center gap-4 z-10">
                <img src='images/staryellow.png' alt="star" className='w-45 h-9'/>
                <p className='font-unica text-yellow text-[26px] -mt-4'>- CREATIVITY -</p>
        </div>
    </div>
  )
}

export default AnimatedNameSection
