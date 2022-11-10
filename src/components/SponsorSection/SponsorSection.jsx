//Styled Components
import {
  SponsorSectionContainer,
  SponsorSectionTitle,
  SponsorList,
} from './SponsorSection.styles';
import { ImgContainer } from '../../shared/shared.styles';
//Images
import blockLogo from '../../assets/images/Sponsor/block.png';
import kdanLogo from '../../assets/images/Sponsor/kdan.png';
import titanLogo from '../../assets/images/Sponsor/titan.png';
import star from '../../assets/images/Sponsor/star.svg';
import starSm from '../../assets/images/Sponsor/star-sm.svg';

//=======================================//

const SponsorSection = () => {
  return (
    <SponsorSectionContainer>
      <SponsorSectionTitle>
        <h3>
          Sponsors<span>鑽石級贊助商</span>
        </h3>
        <ImgContainer absolute="true" top="-25%" left="100%">
          <img src={starSm} alt="" />
        </ImgContainer>
        <ImgContainer absolute="true" top="25%" right="100%">
          <img src={star} alt="" />
        </ImgContainer>
      </SponsorSectionTitle>

      <SponsorList>
        <li>
          <img src={blockLogo} alt="" />
        </li>
        <li>
          <img src={kdanLogo} alt="" />
        </li>
        <li>
          <img src={titanLogo} alt="" />
        </li>
      </SponsorList>
    </SponsorSectionContainer>
  );
};

export default SponsorSection;
