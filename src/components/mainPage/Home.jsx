import "./home.scss";
import { motion } from "framer-motion";


const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,

        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
      }
    }
}
const scrollVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-360%",
        transition:{
            duration:15,
            repeatType:"mirror",
            repeat:Infinity
        }
    },
}
const Home = () => {

  const rotationX = 0;
  const rotationY = 0;
  const scale = [2, 2, 2];
  const position = [1, 0, 0]; // Adjust as needed

  return (
    <div className="Hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>ASTRO</motion.h2>
          <motion.h1 variants={textVariants}>L U N A</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>ABOUT</motion.button>
            <motion.button variants={textVariants}>CONTACT US</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={scrollVariants} initial="initial" animate="animate">
        SPACE COSMOS ASTRONOMY STARS THE_MOON
      </motion.div>
    </div>
  );
};

export default Home;
