import React from 'react'

const Navbar = () => {
    const navLinks = [
        { name: "home", url: "#"},
        { name: "about", url: "#"},
        { name: "our menu", url: "#"},
        { name: "Contact us", url: "#"},
    ]
  return (
    <div className='bg-darkHueBg text-white'>
        <div className=" w-contain mx-auto flex justify-between items-center p-6">
            <div className="text-3xl  xl font-bold">
                Teemah
            </div>
            {/* ---------Nav for large screen */}
            <div className="flex gap-5 capitalize ">
                {
                    navLinks.map((link, i) => (
                        <a href={link.url} className=" ml-5 text-xl pb-2 after:content-[''] after:block after:h-[2px] after:w-[3px] after:bg-inherit after:transition-all after:duration-500 after:hover:w-full after:hover:bg-[#eaa023]">
                            {link.name}
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
