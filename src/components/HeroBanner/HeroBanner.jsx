// Styled Components
import {
  HeroBannerContainer,
  HeroContent,
  Ticker,
  TickerItem,
} from './HeroBanner.styles';
import { Button, ImgContainer } from '../../shared/shared.styles';
//Images
import dashboardImg from '../../assets/images/dashboard.png';
import codeImg from '../../assets/images/HeroBanner/code.png';
import starImg from '../../assets/images/HeroBanner/star.svg';
import dottedLine from '../../assets/images/HeroBanner/dotted-arrow.png';
import pacman from '../../assets/images/HeroBanner/pacman.png';
//Framer Motion
import { motion } from 'framer-motion';
import { animations } from '../../utils/animate';

//=======================================//

const HeroBanner = () => {
  const { moveDown, moveUp } = animations;

  return (
    <HeroBannerContainer>
      <HeroContent>
        <ImgContainer
          width="12rem"
          bottom="100%"
          right="30vw"
          absolute="true"
          initial={moveUp.initial}
          animate={moveUp.animate}
          transition={{ duration: 1.5 }}
        >
          <img src={codeImg} alt="" />
        </ImgContainer>
        <ImgContainer
          width="15rem"
          top="100%"
          left="35vw"
          absolute="true"
          animate={moveDown.animate}
          initial={moveDown.initial}
          transition={{ duration: 1.5 }}
        >
          <img src={dashboardImg} alt="dashboard illustration" />
        </ImgContainer>
        <motion.h1
          initial={moveUp.initial}
          animate={moveUp.animate}
          transition={{ duration: 1.5 }}
        >
          <span>4th</span>The F2E
        </motion.h1>
        <p>互動式網頁設計</p>
        <a href="https://2022.thef2e.com" target="blank">
          <Button primary>立即報名</Button>
        </a>
        <ImgContainer width="20rem" absolute="true" bottom="0px" right="100%">
          <img src={dottedLine} alt="" className="deco" />
        </ImgContainer>
        <ImgContainer width="20rem" absolute="true" top="0px" left="100%">
          <img src={pacman} alt="" className="deco" />
        </ImgContainer>
      </HeroContent>

      <Ticker>
        <motion.div
          animate={{ x: '224px' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 5,
            ease: 'linear',
          }}
        >
          <TickerItem>
            <span>JOIN US</span>
            <img src={starImg} alt="" />
            <span>JOIN US</span>
            <img src={starImg} alt="" />
            <span>JOIN US</span>
            <img src={starImg} alt="" />
            <span>JOIN US</span>
            <img src={starImg} alt="" />
            <span>JOIN US</span>
            <img src={starImg} alt="" />
            <span>JOIN US</span>
            <img src={starImg} alt="" />
            <span>JOIN US</span>
            <img src={starImg} alt="" />
            <span>JOIN US</span>
            <img src={starImg} alt="" />
          </TickerItem>
        </motion.div>
      </Ticker>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
