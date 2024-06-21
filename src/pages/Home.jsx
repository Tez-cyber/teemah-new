import React from 'react'
import Jumbotron from '../components/HomePage/Jumbotron'
import AboutSection from '../components/HomePage/AboutSection'
import Works from '../components/HomePage/Works'

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <AboutSection />
      <Works />
    </div>
  )
}

export default Home