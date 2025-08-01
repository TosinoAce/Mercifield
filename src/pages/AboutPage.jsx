import React from 'react'
import CEO from '../components/CEO'
import MV from "../components/MV"
import AboutIntro from "../components/AboutIntro"
import MainLayout from '../layouts/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutIntro />
      <CEO />
      <MV />
    </MainLayout>
  )
}

export default AboutPage