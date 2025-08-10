import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { socials } from '../constants'
import Marquee from '../components/Marquee'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = () => {
    const text = `Let's connect👩‍💻 \nprofessional inquiries and collaborations`;
    const items = [
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
        "Turning imagination into reality",
    ];
    useGSAP(() =>{
        gsap.from(".social-link",{
           y: 100,
           opacity:0,
           delay:  0.5,
           duration : 1,
           stagger:0.3,
           ease:'back.out' ,
           scrollTrigger:{
                trigger: ".social-link",
           },
        });
    })
  return (
    <section id ="contact" className='flex flex-col justify-between min-h-screen bg-yellow'>
        <div>
            <AnimatedHeaderSection 
                subTitle={"Let's connect"}
                title={"Contact"}
                text={text}
                textColor={"text-sky"}
                withScrollTrigger={true}
            />
            <div className='flex px-10 font-unica uppercase text-sky lg:text-[32px] text-[26px] leading-none mb-10'>
                <div className='flex flex-col w-full gap-10'>
                    <div className='social-link'>
                        <h2>E-mail</h2>
                        <div className='w-full h-px my-2 bg-sky/30' />
                        <p className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl'>osy5318@gmail.com</p>
                    </div>
                    <div className='social-link'>
                        <h2>Social Media</h2>
                        <div className='w-full h-px my-2 bg-sky/30' />
                        <p className='flex flex-wrap gap-2'>
                            {socials.map((social, index) =>(
                                <a key ={index} href={social.href} className='text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200'>
                                    {"{ "}
                                    {social.name}
                                    {" }"}
                                </a>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Marquee items={items} className='text-red bg-sky font-unica'/>
    </section>
  )
}

export default Contact
