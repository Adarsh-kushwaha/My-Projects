import React from 'react'
import profile from "../assets/profile.jfif"
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"
import { SiFiverr } from "react-icons/si"


const Header = () => {
    return (
        <div className='relative bg-gradient-to-r from-[#765AFC] via-[#4bfde8] to-[#4BFD83] w-[100vw] h-[30vh] flex flex-col items-center justify-end '>
            <div className=' absolute top-[55%]'>
                <img src={profile} alt="profile" width={180} height={180} className='rounded-full shadow-md ' />
                <div className='absolute text-center top-[90%] bg-gray-50 shadow-md px-2 py-1 w-full rounded-full font-bold'><p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-600 '>Adarsh Kushwaha</p></div>
            </div>
            <div className='absolute top-[140%] md:top-[150%] flex items-center gap-4 cursor-pointer'>
                <a href="https://twitter.com/heyadarshhere">
                    <AiFillTwitterCircle size={30} fill="#1DA1F2" />
                </a>
                <a href='https://github.com/Adarsh-kushwaha'>
                    <AiFillGithub size={30} fill="#333" />
                </a>
                <div className='px-3 rounded-2xl bg-[#1DBF73]'>
                    <a href='https://www.fiverr.com/webdev_artist'>
                        <SiFiverr size={30} fill="white" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header