import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 
const ContactSummary = () => {
    const containerRef = useRef(null);
    const items = [
        "passionate", 
        "Precision",
        "Collaboration",
        "trust", 
        "diligent",
    ];
    const items2 =[
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
        "Get in Touch",
    ]

    useGSAP(() =>{
        gsap.to(containerRef.current,{
            scrollTrigger:{
                trigger: containerRef.current,
                start: "center center",
                end: "+=800 center",
                scrub : 0.5,
                pin:true,
                pinSpacing:true,
                markers: false,
            },
        });
    }, []);
    return (
    <section
        ref = {containerRef}
        className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
        {/* Marquee */}
        <Marquee items = {items} />
        <div className="overflow-hidden font-light text-center contact-text-responsive">
            <p>" Let's build a  <br />
            <span className="font-normal">memorable</span> & <span className="italic">inspiring</span> <br/> web application <span className="text-gold">together</span> "
            </p>
        </div>
        <Marquee items= {items2} reverse = {true} className="text-black bg-transparent border-y-2" iconClassName="stroke-gold stroke-2 text-primary"
        icon ="material-symbols:dark-mode"
        />

    </section>
  )
}

export default ContactSummary
