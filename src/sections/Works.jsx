import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import {projects} from '../constants'
import { Icon } from "@iconify/react/dist/iconify.js";
const Works = () => {
    const text = `Featured projects that have been meticulously crafted with passion to drive results and impact.`;
  return (
    <section id='work' className="flex flex-col min-h-screen">
        <AnimatedHeaderSection
            subTitle={"Logic meets Aesthetics, Seamlessly"}
            title={"Works"}
            text={text}
            textColor={"text-black"}
            withScrollTrigger={true}
        />
        <div className="relative flex flex-col font-light">
            {projects.map((projects, index) =>(
                <div
                    key={projects.id}
                    id="project"
                    className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
                >
                {/* title */}
                <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                    <h2 className="lg:text-[32px] text-[26px] leading-none">{projects.name}</h2>
                <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
                </div>
                {/* divider */}
                <div className="w-full h-0.5 bg-black/80" />

                {/* frameworks */}
                <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                    {projects.frameworks.map((framework) => (
                        <p key ={framework.id} className="text-black transition-colors duration-500 md:group-hover:text-white">{framework.name}</p>
                    ))}
                </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Works
