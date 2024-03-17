import './Experience.css';
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
import ReactPlayer from "react-player";
import intelLogo from '../images/intelLogo.jpg';
import calixLogo from '../images/calixLogo.png';
import glyfLogo from '../images/glyfLogo.png';
import broncoBytesLogo from '../images/broncoBytesLogo.png';
import tripfolioLogo from '../images/tripfolioLogo.png';
import glyfScreen1 from '../images/glyfScreen1.png';
import glyfScreen2 from '../images/glyfScreen2.png';
import tripfolioScreen1 from '../images/tripfolioScreen1.png';
import tripfolioScreen2 from '../images/tripfolioScreen2.png';
import tripfolioScreen3 from '../images/tripfolioScreen3.png';
import healthMatchLogo from '../images/healthMatchLogo.png';
import broncoBytesScreen1 from '../images/broncoBytesScreen1.png';
import broncoBytesScreen2 from '../images/broncoBytesScreen2.png';
import broncoBytesScreen3 from '../images/broncoBytesScreen3.png';
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

const SectionTitle = ({input, logoLink, link}) => {
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
            className="sectionTitle"
            ref={ref}
            variants={SectionAnimation}
            initial="hidden"
            animate={control}
        >
            <Link className='sectionTitle' to={link} target='_blank'>
                <p className='title'>{input}</p>
                <img src={logoLink} alt="logo" className='logo'/> 
            </Link>
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
            className="sectionText"
            ref={ref}
            variants={SectionAnimation}
            initial="hidden"
            animate={control}
        >
            <p className='text'>{input}</p>
        </motion.div> 
    );
};

const SectionTime = ({input}) => {
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
            <p className='timeText'>{input}</p>
        </motion.div> 
    );
};

const SectionImage = ({image}) => {
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
            <img className='projectScreen' src={image} alt="project screen"/>
        </motion.div> 
    );
};

const Experience = () => {
    return(
        <>
        <div className='container'>
            <div className='content'>
                <SectionHeader input={"Experience"}/>
                <div classname='sectionContainer'>
                    <div className='section'>
                        <SectionTitle input={"Technical Intern @ Intel"} logoLink={intelLogo} link='https://www.intel.com/content/www/us/en/homepage.html'></SectionTitle>
                        <SectionText input={"Despite being a full time student, I am currently interning at Intel as a part-time Technical Intern."}/>
                        <SectionText input={"During my time here, I will be executing comprehensive audits within Intel's Data Center infrastructure,"}/>
                        <SectionText input={"applying meticulous attention to detail to ensure adherence to industry standards, security protocols,"}/>   
                        <SectionText input={"and internal compliance requirements. I will also be transitioning to a software-orientented role"}/>   
                        <SectionText input={"throughout the course of this internship."}/>
                        <SectionTime input={"[January 2024 - Present]"}/>
                    </div>
                    <div className='section'>
                        <SectionTitle input={"Salesforce Software Engineer Intern @ Calix"} logoLink={calixLogo} link='https://www.calix.com/'></SectionTitle>
                        <SectionText input={"In Summer 2023, I completed my first internship at Calix as a Salesforce Software Engineer Intern!"}/>
                        <SectionText input={"Salesforce developers typically complete certificates before entering this field due to its niche nature."}/>
                        <SectionText input={"However, without the help of a prior certificate, I was challenged to be an agile learner at my very first internship opportunity."}/>
                        <SectionText input={"While learning a handful of new tools including Apex, Salesforce Web Components, and Triggers,"}/>
                        <SectionText input={"I designed and developed new and existing custom solutions build on the Force.com platform."}/>
                        <SectionTime input={"[June 2023 - Sept 2023]"}/>
                    </div>
                </div>
                <SectionHeader input={"Projects"}/>
                <div className='sectionContainer'>
                    <div className='section'>
                        <SectionTitle input={"Glyf - Culture Preservation Database Webapp"} logoLink={glyfLogo} link='https://devpost.com/software/glyph-h2jfor'></SectionTitle>
                        <div className='projectImageContainer'>
                            <SectionImage image={glyfScreen1}/>
                            <SectionImage image={glyfScreen2}/>
                        </div>
                        <SectionText input={"~ Awarded Most Likely to Become a Startup @ Hack for Humanity 2024 ~"}/>
                        <SectionText input={"Techstack: HTML, CSS, JS, Python, Flask, OpenAI APIs, PyAudio, Pandas"}/>
                        <SectionTime input={"[February 2024]"}/>
                    </div>
                    <div className='section'>
                        <SectionTitle input={"BroncoBytes - Dining Hall Food Review Mobile Application"} logoLink={broncoBytesLogo} link='https://github.com/samrach9/BroncoBytes'/>
                        <div className='projectImageContainer'>
                            <SectionImage image={broncoBytesScreen1}/>
                            <SectionImage image={broncoBytesScreen2}/>
                            <SectionImage image={broncoBytesScreen3}/>
                        </div>
                        <SectionText input={"Techstack: React Native, Expo, AWS (SAM, S3, API Gateway, Lambda, DynamoDB, CloudWatch)"}/>
                        <SectionTime input={"[November 2023]"}/>
                    </div>
                    <div className='section'>
                        <SectionTitle input={"HealthMatch - Medical Specialist Advisor Webapp"} logoLink={healthMatchLogo} link='https://devpost.com/software/appointmentaide'/>
                        <div className='projectImageContainer'>
                            <ReactPlayer
                                    url={"https://www.youtube.com/embed/Qlsucobu6p8"}
                                    playing={true}
                                    autoStart={true}
                                    loop={true}
                                    className="videoPlayer"
                                />
                        </div>
                        <SectionText input={"~ Hack for Humanity 2023 ~"}/>
                        <SectionText input={"Techstack: HTML, CSS, JS, Python, Flask, OpenAI API, Yelp Fusion API"}/>
                        <SectionTime input={"[Februrary 2023]"}/>
                    </div>

                    <div className='section'>
                        <SectionTitle input={"Tripfol.io - Optimized Routing Mobile Application"} logoLink={tripfolioLogo} link='https://devpost.com/software/bay-trips'></SectionTitle>
                        <div className='projectImageContainer'>
                            <SectionImage image={tripfolioScreen1}/>
                            <SectionImage image={tripfolioScreen2}/>
                            <SectionImage image={tripfolioScreen3}/>
                        </div>
                        <SectionText input={"~ Awarded 1st Place @ INRIX Hack 2022 ~"}/>
                        <SectionText input={"Techstack: HTML, CSS, JS, Python, Flask, Yelp Fusion API, INRIX (Incidents, Parking, Routing APIs)"}/>
                        <SectionTime input={"[November 2022]"}/>
                    </div> 
                </div>       
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 20,
                        deleteSpeed:10,
                        strings:["This is all my experience so far but feel free to contact me if you would like to help me add more to this page!"],
                        wrapperClassName: 'experienceFooter',
                    }}
                />
            </div>
        </div>
        </>
    );
};

export default Experience;