import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import modi from '../../assets/modi.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div className='hero'>
      {/* <img src={profile_img} alt='' /> */}
     <img src= {modi} alt='' className='modi'/>

      <h1><span>I'm Mahmoud Fahmi,</span> Computer Engineer</h1>
      {/* <p>I am a frontend developer fromCalifornia ,USA with 10 years of experience.</p> */}
      <div className="hero-action">
      <div className="hero-connect"><AnchorLink  className='anchor-link' offset={50} href='#contact'>
          Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>

    </div>
  )
}

export default Hero