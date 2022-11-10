import styled from 'styled-components';
import bgImage from '../../assets/images/TopicBanner/bg-grid.svg';
import { devices } from '../../utils/constants';

export const TopicBannerContainer = styled.section`
  height: calc(100vh - 65px);
  background: center url(${bgImage});
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media ${devices.tabletS} {
    height: 100vh;
    max-height: 680px;
    flex-direction: row;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;

  img {
    width: 80%;
    margin: auto;
    max-width: 500px;
  }

  & > small {
    font-family: var(--ff-ch);
    font-weight: bold;
    font-size: 1.4rem;
    word-spacing: 2rem;

    @media ${devices.tabletS} {
      font-size: 2rem;
    }
  }
`;
