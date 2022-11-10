import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const ActivitySectionContainer = styled.section`
  min-height: 100vh;
  color: white;
  padding: 5rem 0;
  text-align: center;
  background-color: var(--clr-bg);

  h3 {
    font-size: var(--fz-h3);
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
  }
`;
export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const CardContainer = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media ${devices.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    align-items: stretch;
    justify-content: space-around;
    row-gap: 10rem;
  }

  & > div:nth-child(5) {
    @media ${devices.desktop} {
      order: 100;
    }
  }

  & > img {
    @media ${devices.desktop} {
      position: absolute;
    }
  }

  & > img:nth-child(2) {
    @media ${devices.desktop} {
      transform: rotate(-90deg);
      position: absolute;
      top: 20%;
    }
  }
  & > img:nth-child(6) {
    @media ${devices.desktop} {
      position: absolute;
      transform: rotate(0deg);
      top: 46%;
      right: 22%;
    }
  }

  & > img:nth-child(4) {
    @media ${devices.desktop} {
      position: absolute;
      transform: rotate(90deg);
      bottom: 20%;
    }
  }

  & > img:last-child {
    display: none;
  }
`;
