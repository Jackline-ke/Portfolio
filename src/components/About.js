import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
//import CountUp from "react-countup";
import profile from "../assets/profile.jpg"
import {useInView} from "react-intersection-observer"

function About(){
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return(
        <div id="about" className="section text-white" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
                    <div className="flex-1 mix-blend-lighten bg-top" data-aos="fade-right">
                        <img src={profile}/>
                    </div>
                    <div className="flex-1" data-aos="fade-left">
                        <h2 className="h2 text-accent">About Me.</h2>
                        <h3 className="h3 mb-4">A Frontend Developer and a UI/UX Designer who designs and implement high end web application.</h3>
                        <p className="mb-4">A Frontend Developer and a UI/UX Designer who designs and implement high end web application.A Frontend Developer and a UI/UX Designer who designs and implement high end web application.</p>
                        <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 pt-4">
                            <button className="btn btn-sm">Contact Me</button>
                            <a href="#" className="text-gradient btn-link">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;