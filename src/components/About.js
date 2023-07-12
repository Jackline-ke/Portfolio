import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"

function About(){
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])
    return(
        <div id="about" className="section text-white">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
                    <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top" data-aos="fade-right">
                       {/* image */}
                    </div>
                    <div className="flex-1" data-aos="fade-left">
                        <h2 className="h2 text-accent">About Me.</h2>
                        <p className="mb-4">Hello! I'm a passionate Software Engineer with a strong background in UI/UX design,
                            full stack development, and a solid foundation in Information Technology. With my 
                            expertise in IT, I bring a comprehensive understanding of the technical landscape 
                            and its applications in software development.</p>
                        <a href="#" className="text-gradient btn-link">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;