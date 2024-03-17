import './Contact.css';
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from 'typewriter-effect';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useAnimation,
  MotionValue
} from "framer-motion";
import { Link } from 'react-router-dom';

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
            className="sectionText"
            ref={ref}
            variants={SectionAnimation}
            initial="hidden"
            animate={control}
        >
            <p className='header'>{input}</p>
        </motion.div> 
    );
};

const SectionText = ({input, link}) => {
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
            className="contactSectionText"
            ref={ref}
            variants={SectionAnimation}
            initial="hidden"
            animate={control}
        >
            <Link className='sectionTitle' to={link} target='_blank'>
                <p className='contactText'>{input}</p>
            </Link>
        </motion.div> 
    );
};

const Contact = () => {
    return(
        <>
        <SectionHeader input={"Contact Me"}/>
        <div className='contactContainer'>
            <div className='contactInfo'>
                <SectionText input={"Email"} link={"mailto:danguyen@scu.edu"}/>
                <SectionText input={"LinkedIn"} link={"https://www.linkedin.com/in/davidnguyenprofile/"}/>
                <SectionText input={"Github"} link={"https://github.com/danguyenn"}/>
                <SectionText input={"Devpost"} link={"https://devpost.com/danguyen?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"}/>
            </div>
        </div>
        <div className='contactSpotify'>
            <SectionText input={"What I've been Listening to Recently (If you're interested)"} link={"https://open.spotify.com/user/dxvidnguyennn?si=cf7058ee442f445b"}/>
            <iframe className="embedSpotify" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpuQvun4zmWQA?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        </>
    );
};

export default Contact;