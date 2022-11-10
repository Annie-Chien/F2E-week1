import { useEffect, useRef } from 'react';
// Styled Components
import { TopicBannerContainer, SectionTitle } from './TopicBanner.styles';
import { ImgContainer } from '../../shared/shared.styles';
//Images
import topicImg from '../../assets/images/TopicBanner/title.png';
import rightHand from '../../assets/images/TopicBanner/right-hand.png';
import leftHand from '../../assets/images/TopicBanner/left-hand.png';
import smallStamp from '../../assets/images/TopicBanner/stamp-sm.svg';
import bigStamp from '../../assets/images/TopicBanner/stamp-lg.svg';
// React Components
import NewsTicker from '../UI/NewsTicker';
//Framer Motion
import { motion, useInView, useAnimationControls } from 'framer-motion';
import { animations } from '../../utils/animate';
// Custim hook
import { useMediaQuery } from '../../utils/customHooks';

//=======================================//

const TopicBanner = () => {
  const scrollRef = useRef(null);
  const control = useAnimationControls();
  const isInView = useInView(scrollRef, { once: true, amount: 0.8 });
  const { handDown, handUp, handLeft, handRight, scaleUp, moveUp, moveDown } =
    animations;
  const isLarge = useMediaQuery('(min-width: 650px)');

  useEffect(() => {
    if (isInView) {
      control.set('initial');
      control.start('animate');
    }
  }, [isInView, control]);

  return (
    <TopicBannerContainer ref={scrollRef}>
      <NewsTicker msg="Interactive web design" top="0"></NewsTicker>
      <ImgContainer
        absolute="true"
        width="120px"
        top="6rem"
        right="0rem"
        variants={moveDown}
        animate={control}
        initial="initial"
        transition={{ duration: 2 }}
      >
        <img src={smallStamp} alt="" />
      </ImgContainer>
      <ImgContainer
        absolute="true"
        width="250px"
        bottom="-1rem"
        left="-5rem"
        variants={moveUp}
        animate={control}
        initial="initial"
        transition={{ duration: 2 }}
      >
        <img src={bigStamp} alt="" />
      </ImgContainer>
      <ImgContainer
        width="160px"
        variants={isLarge ? handLeft : handUp}
        animate={control}
        initial="initial"
      >
        <img src={leftHand} alt="" className="rotated" />
      </ImgContainer>
      <SectionTitle>
        <motion.div variants={scaleUp} initial="initial" animate={control}>
          <img src={topicImg} alt="互動式網頁設計" />
        </motion.div>
        <small>前端工程師 x UI設計師</small>
      </SectionTitle>
      <ImgContainer
        width="160px"
        variants={isLarge ? handRight : handDown}
        animate={control}
        initial="initial"
      >
        <img src={rightHand} alt="" className="rotated" />
      </ImgContainer>
      <NewsTicker msg="Interactive web design" bottom="0"></NewsTicker>
    </TopicBannerContainer>
  );
};

export default TopicBanner;
