import React from "react";

function Header(){
    return(
        <div className="bg-black text-white py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-gradient">QlynnReact</h1>
                    <button className="btn btn-sm">Work With Me</button>
                </div>
            </div>
        </div>
    )
}
export default Header;