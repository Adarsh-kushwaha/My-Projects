import React, { useState } from 'react'

const Card = ({ image, title, category, link }) => {

    const [open, setOpen] = useState(false);

    const unhover = () => {
        setOpen(false);
    }

    return (
        <a href={link} className="relative w-full">
            {open === true ? (<div className="absolute z-[100]  drop-shadow-2xl backdrop-blur-lg rounded-lg brightness-110" >
                <img src={open === true ? image : ""} alt="img" className='rounded-lg w-auto h-[350px] object-scale-down' />
            </div>) : null}

            <div className='flex flex-col gap-4 p-4 bg-white m-4 rounded-lg shadow-md hover:shadow-xl h-[400px]  w-[340px] hover:opacity-90 ' >
                <img src={image} alt={title} className="rounded-lg h-[350px] object-cover hover:transition hover:duration-300 hover:delay-150 hover:scale-[1.02]" />
                <div className='flex justify-between items-start'>
                    <div>
                        <h2 className='font-bold text-lg'>{title}</h2>
                        <h4 className='font-semibold text-[15px] capitalize text-gray-500 '>{category}</h4>
                    </div>
                    <div className='p-1' onMouseOver={() => setOpen(true)} onMouseOut={unhover}>
                        <a href={link}><span className=' underline text-gray-800 hover:text-black'>view</span> 🚀</a>
                    </div>
                </div>

            </div>
        </a>
    )
}

export default Card