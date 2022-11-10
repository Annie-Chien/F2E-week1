import { CardContainer, TextContainer, Dash } from './ActivityCard.styles';
import { ImgContainer } from '../../shared/shared.styles';

//=======================================//

const ActivityCard = ({ img, data }) => {
  const { title, date1, date2, detail, timeDash } = data;
  return (
    <CardContainer>
      <ImgContainer width="60px">
        <img src={img} alt="" />
      </ImgContainer>
      <TextContainer>
        <h4>{title}</h4>
        <p>
          <span>{date1?.day}</span> {date1?.label}
        </p>
        <Dash show={timeDash} />
        <p>
          <span>{date2?.day}</span> {date2?.label}{' '}
        </p>
        <p>{detail}</p>
      </TextContainer>
    </CardContainer>
  );
};

export default ActivityCard;
