//Styled Components
import {
  Container,
  Tag,
  InfoDetail,
  CardBack,
  CardFront,
} from './InfoCard.styles';
import { ImgContainer } from '../../shared/shared.styles';
// Images
import linkIcon from '../../assets/images/icon-link.svg';
import lockImg from '../../assets/images/Info/lock.png';

//=======================================//

const InfoCard = ({ img, data, week }) => {
  const { tag, title, subtitle } = data;
  return (
    <Container>
      <CardFront
        className="front"
        whileInView={{ rotateY: 0 }}
        initial={{ rotateY: -180 }}
        viewport={{ once: 'true' }}
        transition={{ duration: 1, delay: week - 1 }}
      >
        <Tag className="tag">{tag}</Tag>
        <h4>{title}</h4>
        <small>{subtitle}</small>
        <ImgContainer width="140px">
          <img src={img} alt="" />
        </ImgContainer>
        <InfoDetail>
          <span>Week {week}</span>
          <a href="https://2022.thef2e.com" target="blank">
            查看關卡細節
            <img src={linkIcon} alt="" />
          </a>
        </InfoDetail>
      </CardFront>

      <CardBack
        className="back"
        whileInView={{ rotateY: 180 }}
        viewport={{ once: 'true' }}
        transition={{ duration: 0.8, delay: week - 1 }}
      >
        <h3>Week {week}</h3>
        <ImgContainer width="140px">
          <img src={lockImg} alt="" />
        </ImgContainer>
      </CardBack>
    </Container>
  );
};

export default InfoCard;
