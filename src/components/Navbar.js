import React from "react";
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import {Link} from 'react-scroll';

function Navbar (){
    return(
        <div className="text-black fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ">
            <div className="container mx-auto">
                <div className="w-full bg-black h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex text-2xl text-white">
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-2">
                        <BiHomeAlt />
                    </Link>
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-12">
                        <BiUser />
                    </Link>
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-12">
                        <BsClipboardData />
                    </Link>
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-12">
                        <BsBriefcase />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;