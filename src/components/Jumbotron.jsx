import React from 'react'
import jumboImg from '../assets/n-2.jpg'

const Jumbotron = () => {
    return (
        <div className='relative'>
            {/* Background image is imported in index.css */}
            <div 
                className="absolute left-0 right-0 h-screen w-full bg-fixed bg-cover bg-center
                           z-[-2] home-bg before:content-[''] before:absolute before:left-0 before:right-0 
                           before:h-full before:w-full before:bg-black/70 before:backdrop-blur-sm"
            ></div>
            {/* <div className="bg-green-200 h-full w-full bg-fixed bg-cover block"></div> */}
            {/* <div className="w-screen h-[90vh] object-contain">
                <img src={jumboImg} alt="" />
            </div> */}
            <div className='text-white py-[40vh] w-1/2 mx-auto text-center'>
                <h1>Teemah's confectionery</h1>
                <p>
                    Home to various confectionery.
                    Crafting cuisines to customer's
                    demands
                </p>
                <a href="" className="">
                    Our menu
                </a>
            </div>
        </div>
    )
}

export default Jumbotron