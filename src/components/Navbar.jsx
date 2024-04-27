import React from 'react'

const Navbar = () => {
    const navLinks = [
        { name: "home", url: "#"},
        { name: "about", url: "#"},
        { name: "our menu", url: "#"},
        { name: "Contact us", url: "#"},
    ]
  return (
    <div className='bg-[#0b1215] text-white'>
        <div className=" w-[1200px] mx-auto flex justify-between items-center p-6">
            <div className="text-3xl  xl font-bold">
                Teemah
            </div>
            <div className="flex gap-4 capitalize ">
                {
                    navLinks.map((link, i) => (
                        <a href={link.url} className="text-xl">
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
