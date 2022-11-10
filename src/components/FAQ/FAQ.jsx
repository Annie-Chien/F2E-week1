import { useState } from 'react';
// Styled Components
import {
  FAQContainer,
  TabList,
  Tab,
  QAListContainer,
  QAList,
  QAListItem,
} from './FAQ.styles';
import { Button } from '../../shared/shared.styles';
// Card Data
import { faqData } from '../../shared/data';

//=======================================//

const FAQ = () => {
  const [curTab, setCurTab] = useState(0);

  const handleClickTab = (index) => {
    setCurTab(index);
  };

  return (
    <FAQContainer>
      <h3>Q&A</h3>
      <TabList>
        {faqData.map((data, index) => (
          <Tab
            key={index}
            onClick={() => handleClickTab(index)}
            active={curTab === index}
          >
            {data.category}
          </Tab>
        ))}
      </TabList>
      <QAListContainer>
        <QAList>
          {faqData[curTab].QAs.map((data, index) => (
            <QAListItem key={index}>
              <span>Q{index + 1}</span>
              <h5>{data.q}</h5>
              <p>{data.a}</p>
            </QAListItem>
          ))}
        </QAList>
      </QAListContainer>
      <Button primary>立即報名</Button>
    </FAQContainer>
  );
};

export default FAQ;
