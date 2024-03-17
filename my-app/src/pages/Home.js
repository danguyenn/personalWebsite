import './Home.css';
import React from 'react';
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useAnimation,
    MotionValue
  } from "framer-motion";

const SectionAnimation = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.9 }
};

const SectionHeader = ({input}) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <motion.div
            className="homeSectionHeader"
            ref={ref}
            variants={SectionAnimation}
            initial="hidden"
            animate={control}
        >
            <p className='homeHeader'>{input}</p>
        </motion.div> 
    );
};

const SectionText = ({input}) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <motion.div
            className="homeSectionText"
            ref={ref}
            variants={SectionAnimation}
            initial="hidden"
            animate={control}
        >
            <p className='homeText'>{input}</p>
        </motion.div> 
    );
};

const Home = () => {
    return(
        <div className='homeContainer'>
            <div className='intro'>
                <SectionHeader input={"Hi, I'm David Nguyen"}/>
                <div className='subIntro'>
                    <SectionText input={"Third Year Computer Science Student @ Santa Clara University"}/>
                    <SectionText input={"Current Technical Intern @ Intel | Prev Salesforce SWE Intern @ Calix"}/>
                    <SectionText input={"Food, Music, and Kitty Enthusiast"}/>
                </div>
                
            </div>
            <div className='footer'>
                <SectionText input={"Feel free to explore through my page to see what I've been up to..."}/>
            </div>
        </div>
    );
};

export default Home;