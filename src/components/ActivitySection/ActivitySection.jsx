import React from 'react';
// React Components
import ActivityCard from '../UI/ActivityCard';
//Styled Components
import {
  ActivitySectionContainer,
  SectionTitle,
  CardContainer,
} from './ActivitySection.styles';
import { ImgContainer } from '../../shared/shared.styles';
//Images
import img1 from '../../assets/images/Activity/activity1.png';
import img2 from '../../assets/images/Activity/activity2.png';
import img3 from '../../assets/images/Activity/activity3.png';
import img4 from '../../assets/images/Activity/activity4.png';
import decoLeft from '../../assets/images/Activity/title-deco-l.svg';
import decoRight from '../../assets/images/Activity/title-deco-r.svg';
import arrow from '../../assets/images/Activity/icon-arrow.svg';
//Card Data & Img
import { ActivityData } from '../../shared/data';
const cardImages = [img1, img2, img3, img4];

//=======================================//

const ActivitySection = () => {
  return (
    <ActivitySectionContainer>
      <SectionTitle>
        <ImgContainer width="80px">
          <img src={decoLeft} alt="" />
        </ImgContainer>
        <h3>活動說明</h3>
        <ImgContainer width="80px">
          <img src={decoRight} alt="" />
        </ImgContainer>
      </SectionTitle>
      <CardContainer>
        {ActivityData.map((item, index) => (
          <React.Fragment key={index}>
            <ActivityCard img={cardImages[index]} data={item} />
            <img src={arrow} alt="" className="arrow" />
          </React.Fragment>
        ))}
      </CardContainer>
    </ActivitySectionContainer>
  );
};

export default ActivitySection;
