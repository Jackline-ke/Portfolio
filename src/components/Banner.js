import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import image from "../assets/profile.jpg";
import {FaGithub, FaLinkedin, FaTwitter, FaMedium} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Banner(){
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])

    return(
        <div id="home" className="min-h[85vh] lg:min-h-[78vh] flex items-center text-white">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <h1 data-aos="zoom-in" className="text-[55px] font-bold leading-[0.8] text-[72px] text-white">JACKLINE <span>ADHIAMBO</span></h1>
                        <div data-aos="fade-up" className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                            <span className="mr-4 text-white">I am a</span>
                            <TypeAnimation sequence={[
                                'Designer',
                                2000,
                                'Developer',
                                2000,
                            ]}
                            speed={50}
                            className="text-accent"
                            wrapper="span"
                            repeat={Infinity}
                            />
                        </div>
                        <p className="mb-8 max-w-lg mx-auto lg:mx-0">A Frontend Developer and a UI/UX Designer who designs and implement high end web application.</p>
                        <div  data-aos="fade-up" className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <button className="btn btn-sm">Contact Me</button>
                            <a href="#" className="text-gradient btn-link">My Resume</a>
                        </div>
                        <div className="flex text-[20px] max-w-max mx-auto lg:mx-0">
                            <a href="https://github.com/Jackline-ke"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/jackline-adhiambo-5049631a7/" className="ml-4"><FaLinkedin /></a>
                            <a href="https://twitter.com/JacklineOdhia19" className="ml-4"><FaTwitter /></a>
                            <a href="https://medium.com/@antoninahodhiambo" className="ml-4"><FaMedium /></a>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="hidden lg:flex flex-1 max-w-[320px] lgmax-w-[482px]">
                        <img src={image} className="rounded-full" width="250" height="250" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Banner;