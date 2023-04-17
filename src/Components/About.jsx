import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>know about me</h2>
      <div className="words">
      Hello, I’m [Jay], I started my coding journey about 3 years ago and now I'm working full time and doing freelance projects on the side for my friends and I’m passionate about everything that goes into making websites work well and look good. The web is my passion because it’s where I can find the most exciting projects to work on. It’s also where I get to express my creativity in ways that are hard to find elsewhere. I love working with clients who want something more than just another website; they want their site to be more than just another website. They want it to be memorable, engaging, and valuable—and that’s where I come in!
      </div>
    </div>
  )
}
export default About;
