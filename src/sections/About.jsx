import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import {useRef} from 'react';
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; 
const About = () => {
    const text = `Starting with the question\n "Could this be possible?"\n I build products that users genuinely enjoy.`;
    const aboutText =  
    ` 💡 Creative Developer. I design unique user experiences with React, JavaScript, and Unity. From AI travel planners (TripPass) to brainwave-responsive media art (Emotion Palette), I turn ideas into reality.

    🌏 I recently began a working holiday in New Zealand to explore new cultures and work environments. While I may not have years of experience, I bring strong problem solving skills, adaptability, and a genuine curiosity for learning.

    ☕ Always open to collaborating with diverse team that value innovation and impact.`;
    const imgRef = useRef(null);
    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger:{
                trigger:"#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers:false,
            },      
            ease: "power1.inOut",
            });

            gsap.set(imgRef.current,{
                clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            });
            gsap.to(imgRef.current,{
                clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 2,
                ease:"power4.out",
                scrollTrigger: {trigger: imgRef.current},
            });
    });
  return (
    <section id ="about" className='min-h-screen rounded-b-4xl bg-sky'>
        <AnimatedHeaderSection
            subTitle={"Crafting interactive experiences from code"}
            title={"About"}
            text={text}
            textColor={"text-black"}
            withScrollTrigger={true}
        />
        <div className='flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-black/60'>
            <img
                ref = {imgRef}
                src="images/me.jpg" 
                alt="me" 
                className='w-md rounded-3xl'     
            />
            <AnimatedTextLines text ={aboutText} className={"w-full"}/>
        </div>
    </section>
  )
}

export default About
