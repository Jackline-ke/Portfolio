import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import ruby from "../images/ruby.png";
import tailwind from "../images/tailwind.png";
import figma from "../images/figma.png";

function Skills(){
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])
    return(
        <div id="skills" className="section text-white p-8">
            <div className="bg-black h-screen w-full ">
                <div className="flex justify-center mt-2">
                    <h2 className="h2 text-accent">My Skills</h2>
                </div>
                <div id="skills" className="flex justify-center">
                    <div className="w-9/12 p-4 grid grid-cols-3  border border-orange-400 rounded-lg shadow-2xl place-items-center">
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={html} alt="html" className="" width="70" height="70"/>
                            <h4 className="pt-2 font-semibold">HTML</h4>
                        </div>
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={css} alt="css" className="" width="70" height="70"/>
                            <h4 className="pt-2 font-semibold">CSS</h4>
                        </div>
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={js} alt="js" className="" width="70" height="70"/>
                            <h4 className="pt-2 font-semibold">JavaScript</h4>
                        </div>
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={ruby} alt="ruby" className="pt-6" width="100" height="100"/>
                            <h4 className="pt-2 font-semibold">Ruby</h4>
                        </div>
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={react} alt="react" className="pt-6" width="70" height="70"/>
                            <h4 className="pt-2 font-semibold">React</h4>
                        </div>
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={tailwind} alt="tailwind" className="pt-6" width="70" height="70"/>
                            <h4 className="pt-2 font-semibold">Tailwind</h4>
                        </div>
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={figma} alt="figma" className="pt-6" width="70" height="70"/>
                            <h4 className="pt-2 font-semibold">Figma</h4>
                        </div>
                        <div className="grid place-items-center" data-aos="zoom-in">
                            <img src={figma} alt="figma" className="pt-6" width="70" height="70"/>
                            <h4 className="pt-2 font-semibold">Figma</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;