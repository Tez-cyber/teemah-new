import React from 'react'
import jumboImg from '../../assets/n-2.jpg'

const Jumbotron = () => {
    return (
        <div className='relative'>
            {/* Background image is imported in index.css */}
            <div
                className="absolute left-0 right-0 h-full w-full bg-fixed bg-cover bg-center
                           z-[-2] home-bg animate-zoomInOut before:content-[''] before:absolute before:left-0 before:right-0 
                           before:h-full before:w-full before:bg-black/70 before:backdrop-blur-sm"
            ></div>
            <div className='text-white py-[40vh] w-1/2 mx-auto text-center'>
                <h1 className='text-6xl font-romantic pb-6'>Teemah's confectionery</h1>
                <p className='text-xl'>
                    Home of delicious confectionery.
                    Crafting cuisines to customer's
                    demands
                </p>
                <div className="my-6 relative flex items-center justify-center">
                    <span className='absolute w-[105px] h-[40px] bg-mainColor'></span>
                    <a href="" className="border-[2px] font-bold text-lg text-black border-mainColor px-4 py-3 rounded-sm z-10">
                        Our menu
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron