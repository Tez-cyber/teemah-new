import React from 'react'
import { FaTruck, FaCookieBite } from 'react-icons/fa'
import { BiFoodMenu } from 'react-icons/bi'

const Works = () => {
  return (
    <div className='bg-black text-white pt-10 pb-20'>
      {/*------------- Heading ------------- */}
      <div className="row">
        <div className="section-title">
          <h2 data-title="" className='text-white '>How it works</h2>
        </div>
      </div>
      {/*----------------------- Content ------------------------- */}
      <div className="row gap-10 px-10 lg:w-contain lg:mx-auto lg:gap-4 lg:px-0">
        <div className="px-5">
          {/*------ Works-head------ */}
          <div className="worksHead">
            <i className="text-3xl"><BiFoodMenu /></i>
            <h5 className="">Place order</h5>
          </div>
          {/*------ Works-content------ */}
          <p className='worksContent'>
            Select from our wide variety of signature dishes,
            custom, or specialty meal options. Dishes prepared
            with highest quality ingredient to deliver utmost
            satisfaction

          </p>
        </div>
        <div className="px-5">
          {/*------ Works-head------ */}
          <div className="worksHead">
            <i className="text-3xl"><FaCookieBite /></i>
            <h5 className="">Cook</h5>
          </div>
          {/*------ Works-content------ */}
          <p className='worksContent'>
            Our staffs will carefully prepare, cook and package
            all your meals and have them fresh and ready to go !
          </p>
        </div>
        <div className="px-5">
          {/*------ Works-head------ */}
          <div className="worksHead">
            <i className="text-3xl"><FaTruck /></i>
            <h5 className="">Pickup / Delivery</h5>
          </div>
          {/*------ Works-content------ */}
          <p className='worksContent'>
            You get to choose to pick up your meals
            in our very own location or even choose a
            delivery method at your convinience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Works