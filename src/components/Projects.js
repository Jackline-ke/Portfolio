import React from "react";
import marketHub from "../assets/marketHub.png"

function Projects(){
    return(
        <div id="projects" className="section text-white">
           <div className="h-screen w-full">
            <div className="flex justify-center mt-2">
                <h2 className="h2 text-accent">Projects</h2>
            </div>
            <div className="flex justify-center">
                <div className="w-9/12 p-8 grid grid-cols-3 gap-2  border border-orange-400 rounded-lg shadow-lg shadow-orange-300/50 place-items-center">
                    <div className="border border-orange-200 rounded-lg  p-4">
                        <div>
                            <img src={marketHub} className="rounded-lg" />
                            <h3 className="text-gradient mt-2">marketHub</h3>
                            <p className="mt-2">A little description</p>
                            <h5 className="mt-2">Stack/tool</h5>
                        </div>
                    </div>
                    <div className="border border-orange-200 rounded-lg p-4 ml-8">
                        <div>
                            <img src={marketHub} className="rounded-lg" />
                            <h3 className="text-gradient mt-2">marketHub</h3>
                            <p className="mt-2">A little description</p>
                            <h5 className="mt-2">Stack/tool</h5>
                        </div>
                    </div>
                    <div className="border border-orange-200 rounded-lg p-4 ml-8">
                        <div>
                            <img src={marketHub} className="rounded-lg" />
                            <h3 className="text-gradient mt-2">marketHub</h3>
                            <p className="mt-2">A little description</p>
                            <h5 className="mt-2">Stack/tool</h5>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Projects;