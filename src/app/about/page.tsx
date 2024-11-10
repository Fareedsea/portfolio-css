
import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className="about" id="about">
        <div className="about-img">
          <Image src='/Assets/Fareed.jpg' height={400} width={400} alt='Fareed Picture'></Image>
        
        </div>
<   div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam tempora quisquam perferendis in vel accusamus provident corporis quis error nemo rerum, beatae mollitia distinctio atque aliquid. Nulla necessitatibus incidunt minima.</p>
        <a href="#" className="btn">Read More</a>
    </div>
</div>
  )
}

export default About