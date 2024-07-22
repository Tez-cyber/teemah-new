import React from 'react'

const Navbar = () => {
    const navLinks = [
        { name: "home", url: "#" },
        { name: "about", url: "#" },
        { name: "our menu", url: "#" },
        { name: "Contact us", url: "#" },
    ]
    return (
        <div className='bg-darkHueBg text-white w-screen'>
            <div className="  mx-auto flex justify-between items-center py-6 px-8 md:w-contain">
                <div className="text-3xl font-bold">
                    Teemah
                </div>
                {/* ---------Nav for large screen */}
                <div className="gap-5 capitalize hidden md:flex ">
                    {
                        navLinks.map((link, i) => (
                            <a href={link.url} className=" ml-5 text-xl pb-2 after:content-[''] after:block after:h-[2px] after:w-[3px] after:bg-inherit after:transition-all after:duration-500 after:hover:w-full after:hover:bg-[#eaa023]">
                                {link.name}
                            </a>
                        ))
                    }
                </div>
                {/* ========Nav for mobile screens */}
                <div className="md:hidden">
                    <button
                        className='w-10 h-8 flex flex-col justify-between'>
                        <div className="w-10 h-1 bg-white rounded origin-left"></div>
                        <div className="w-10 h-1 bg-white rounded"></div>
                        <div className="w-10 h-1 bg-white rounded origin-left"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
