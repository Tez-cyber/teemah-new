import React from 'react'
import abtImg from '../../assets/n-4.jpg'

const AboutSection = () => {
  return (
    <div className='bg-[#16161d] text-white py-7'>
      <div className="row">
        <div className="section-title">
          <h2 data-title="our story">about us</h2>
        </div>
      </div>
      <div className="row justify-between items-center md:w-[90%] md:mx-auto ">
        <div className="w-1/2 pr-10">
          <h3 className='text-4xl font-romantic pb-4'>Welcome To Teemah's Confectionery</h3>
          <p className='text-lg'>
            Every meal prepared is made with passion and
            care by our dexterous chef and culinary team.
            Being more passionate than ever that we can truly change
            people's lives with delicious and clean eating!
          </p>
          <p className='text-lg'>
            Our mission is to prepare eating simple and convenient,
            making sure a customer never have to sacrifice, flavor,
            nutrition and most of all, QUALITY. Which is why we offer
            the highest quality ingredients in our meals.
          </p>
          <a href="#" class="">See more</a>
        </div>
        <div className="w-1/2">
          <div className="relative before:content-[''] before:absolute before:h-[100px] before:w-[100px] before:border-[3px] before:border-solid before:border-mainColor before:top-[45%] before:left-[40%]">
            <h3 className='absolute top-1/2 w-full text-center text-2xl text-white'>10+ years Experience</h3>
            <img className='w-[700px] h-[700px] object-contain' src={abtImg} alt="about img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection