import React from 'react';
import {gsap, Power4} from 'gsap';
import { useGSAP } from '@gsap/react';


function App() {
  useGSAP(()=>{
    gsap
    let tl = gsap.timeline();
    let ease = Power4.easeOut();
    tl.from(".section1 .logo", {
      y: -200,
      opacity: 0,
      ease: ease,
      delay: 0.3,
      duration: 0.4
    })

    tl.from(".section1 .menu h4", {
      y: 200,
      opacity: 0,
      delay: 0.3,
      duration: 0.4,
      stagger: 0.3,
      ease: "slow(0.5, 0.8)",
    })

    tl.from(".center-part1 h1, p, button", {
      y: 200,
      skewY: 10,
      opacity: 0,
      delay: 0.3,
      duration: 0.4,
      ease: ease,
    }, "-=0.8")


    tl.from(".center-part2 .image1", 1, {
      y: 1400,
      skewY: 40,
      opacity: 0,
      delay: 0.3,
      duration: 0.4,
      ease: ease,
      scale: 1.6
    }, "-=1")

    tl.from(".center-part2 .image2", 1, {
      y: 1400,
      skewY: 40,
      opacity: 0,
      delay: 0.3,
      duration: 0.4,
      ease: ease,
      scale: 1.6
    }, "-=1")

    tl.from(".center-part2 .image3", 1, {
      y: 1400,
      skewY: 40,
      opacity: 0,
      delay: 0.3,
      duration: 0.4,
      ease: ease,
      scale: 1.6
    }, "-=1")
  })
  return (
    <> 
      <section className='section1'>
        <nav>
          <h1 className='logo'>LOGO</h1>
          <div className="menu">
            <h4>HOME</h4>
            <h4>ABOUT</h4>
            <h4>PROJECTS</h4>
          </div>
        </nav>
        <div className="center">
          <div className='center-part1'>
            <h1>HARD WORK BEATS TALENT</h1>
            <h1>WHEN TALENT DOESN'T WORK</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dignissimos quae, odio porro nulla esse sunt cumque totam magnam corrupti.
            </p>
            <button>Contribution</button>
          </div>
          <div className='center-part2'>
            <div className='image1'></div>
            <div className='image2'></div>
            <div className='image3'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
