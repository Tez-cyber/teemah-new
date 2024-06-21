import React from 'react'
import abtImg from '../../assets/n-late.jpg'

const AboutSection = () => {
  return (
    <div className='bg-[#16161d] text-white py-7'>
      <div className="row">
        <div className="section-title">
          <h2 data-title="our story">about us</h2>
        </div>
      </div>
      {/*------------- Text - section ------------- */}
      <div className="row gap-5 items-center md:w-[90%] md:mx-auto ">
        <div className="lg:w-1/2">
          <h3 className='text-4xl font-romantic pb-4'>Welcome To Teemah's Confectionery</h3>
          <p className='text-lg my-2'>
            Every meal prepared is made with passion and
            care by our dexterous chef and culinary team.
            Being more passionate than ever that we can truly change
            people's lives with delicious and clean eating!
          </p>
          <p className='text-lg my-2'>
            Our mission is to prepare eating simple and convenient,
            making sure a customer never have to sacrifice, flavor,
            nutrition and most of all, QUALITY. Which is why we offer
            the highest quality ingredients in our meals.
          </p>
          <div className="my-4">
            <a href="#" className=" font-bold text-lg text-black bg-mainColor px-4 py-3 rounded-sm">See more</a>
          </div>
        </div>
        {/*------------- Img - section ------------- */}
        <div className="lg:w-1/2">
          <div className="relative before:content-[''] before:absolute before:h-[100px] before:w-[100px] before:animate-spins before:border-[3px] before:border-solid before:border-mainColor before:top-[45%] before:left-[40%] before:z-[10]">
            <h3 className='absolute top-1/2 w-full text-center text-2xl text-white z-[10]'>10+ years Experience</h3>
            <div className="relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black/70 before:rounded-xl">
              <img className='z-10 rounded-xl' src={abtImg} alt="about img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection