import React from "react";

function Contact(){
    return(
        <div id="contact" className="py-16 lg:section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <div>
                            <h4 className="text-2xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
                            <h2 className="text-[45px] lg:text-[72px] leading-none mb-12 text-white">Let's work <br/> together!</h2>
                        </div>
                    </div>
                    <form className="flex-1">
                        <input className="bg-transparent border-b py-3 outline-none w-full place:text-white focus:border-orange-400 transition-all" type="text" placeholder="Your name" />
                        <input className="bg-transparent border-b py-3 outline-none w-full place:text-white focus:border-orange-400 transition-all" type="text" placeholder="Your email" />
                        <textarea className="bg-transparent border-b py-12 outline-none w-full place:text-white focus:border-orange-400 transition-all resize-none mb-12 " placeholder="Your message"></textarea>
                        <button className="btn btn-sm">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;