import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import {useRef} from 'react';
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; 
const About = () => {
    const text = "Passionate about clean architecture\n I build scalable, high-performance solutions from\n prototype to production";
    const aboutText =  
    ` 💡 From building a personalized travel planner(TripPass) to creating a brainwave-responsive media interface(Emotion Palette), I enjoy turning abstract ideas into responsive, user-friendly products using React, JavaScript and Unity.

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
    <section id ="about" className='min-h-screen rounded-b-4xl bg-black'>
        <AnimatedHeaderSection
            subTitle={"Code with purpose, Built to scale"}
            title={"About"}
            text={text}
            textColor={"text-white"}
            withScrollTrigger={true}
        />
        <div className='flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
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
