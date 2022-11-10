// Images
import dashboardImg from '../../assets/images/dashboard.png';
import canvasImg from '../../assets/images/canvas.png';
import draggableImg from '../../assets/images/draggable.png';
import deco from '../../assets/images/Info/decoration.svg';
//Styled Components
import { ImgContainer } from '../../shared/shared.styles';
import {
  InfoSectionContainer,
  Wrap,
  InfoHeading,
  CardContainer,
} from './InfoSection.styles';
//React Components
import InfoCard from '../UI/InfoCard';
// Card Data & images
import { infoData } from '../../shared/data';
const cardImages = [dashboardImg, canvasImg, draggableImg];

//=======================================//

const InfoSection = () => {
  return (
    <InfoSectionContainer>
      <Wrap>
        <InfoHeading>
          <h3>年度最強合作三大主題來襲</h3>
          <ImgContainer absolute="true" width="50px" top="-50%" right="-10%">
            <img src={deco} alt="" />
          </ImgContainer>
        </InfoHeading>
        <p>
          各路廠商強強聯手
          <br />
          共同設計出接地氣的網頁互動挑戰關卡
        </p>
        <CardContainer>
          {infoData.map((item, index) => (
            <InfoCard
              key={index}
              img={cardImages[index]}
              data={item}
              week={index + 1}
            />
          ))}
        </CardContainer>
      </Wrap>
    </InfoSectionContainer>
  );
};

export default InfoSection;
