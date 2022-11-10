import { useRef } from 'react';
// Styled Components
import {
  PrizeSectionContainer,
  Wrap,
  CarRacing,
  CardContainer,
  Card,
  CardText,
} from './PrizeSection.styles';
import { ImgContainer } from '../../shared/shared.styles';
//Images
import flagIcon from '../../assets/images/Prize/icon-flag.svg';
import carIcon from '../../assets/images/Prize/icon-car.svg';
import clipboard from '../../assets/images/Prize/clipboard.png';
import coin from '../../assets/images/Prize/coin.png';
//Framer motion
import { motion } from 'framer-motion';
//Custom Hooks
import { useMediaQuery } from '../../utils/customHooks';

//=======================================//

const PrizeSection = () => {
  const carRaceRef = useRef(null);
  const isLarge = useMediaQuery('(min-width: 350px)');

  return (
    <PrizeSectionContainer>
      <Wrap>
        <h4>
          區區修煉已經無法滿足了嗎？
          <br />
          還有比賽等著你！
        </h4>
        <CarRacing ref={carRaceRef}>
          <motion.div
            whileInView={{ rotate: -45 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: 'true' }}
          >
            <img src={flagIcon} alt="" />
          </motion.div>
          <motion.div
            whileInView={{
              x: isLarge ? -(carRaceRef.current.offsetWidth - 120) : '-280px',
            }}
            transition={{ duration: 2 }}
            viewport={{ once: 'true' }}
          >
            <img src={carIcon} alt="" />
          </motion.div>
        </CarRacing>
        <CardContainer>
          <Card>
            <ImgContainer width="80px">
              <img src={clipboard} alt="" />
            </ImgContainer>
            <h3>評審機制</h3>
            <CardText>
              <h4>初選：</h4>
              <p>將由六角學院前端、UI 評審進行第一波篩選。</p>
              <h4>決選：</h4>
              <p>
                由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                由評審進行直播公布名單！
              </p>
            </CardText>
          </Card>
          <Card>
            <ImgContainer width="80px">
              <img src={coin} alt="" />
            </ImgContainer>
            <h3>獎金</h3>
            <CardText>
              <h4>初選佳作：</h4>
              <p>
                共六十位 <span>數位獎狀</span>
              </p>
              <small>每週主題個人組十位、團體組十組</small>
              <h4>個人企業獎：</h4>
              <p>
                共六位 <span>NTD 3,000/位</span>
              </p>
              <small>每週主題個人組十位、團體組十組</small>
              <h4>團體企業獎：</h4>
              <p>
                共三組 <span>NTD 10,000/組</span>
              </p>
              <small>每週主題各 1 組</small>
              <h5>以上皆提供完賽數位獎狀</h5>
            </CardText>
          </Card>
        </CardContainer>
      </Wrap>
    </PrizeSectionContainer>
  );
};

export default PrizeSection;
