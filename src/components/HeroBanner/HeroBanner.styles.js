import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const HeroBannerContainer = styled.section`
  height: 100vh;
  display: grid;
  place-content: center;

  @media ${devices.tabletS} {
    margin-top: -8rem;
  }

  h1 {
    font-family: var(--ff-heading-en);
    font-size: var(--fz-h2);
    color: white;
    text-transform: uppercase;
    text-shadow: -2px -2px var(--clr-secondary), 3px 2px var(--clr-primary);

    @media ${devices.tabletS} {
      font-size: var(--fz-h1);
    }
  }

  span {
    font-size: 2.7rem;
    font-family: var(--ff-pilot);
    display: block;
  }

  p {
    color: var(--clr-text-light);
    font-size: 2rem;
    letter-spacing: 0.7em;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  & img.deco {
    display: none;

    @media ${devices.tablet} {
      display: block;
    }
  }
`;

export const HeroContent = styled.div`
  display: grid;
  text-align: center;
  gap: 2rem;
  position: relative;
`;
export const Ticker = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
`;

export const TickerItem = styled.div`
  white-space: nowrap;
  display: flex;
  gap: 2rem;
  justify-content: end;

  & > span {
    color: var(--clr-bg-dark);
    font-size: 2.8rem;
    font-family: var(--ff-heading-en);
    display: inline-block;
    background: var(--gradient-2);
    -webkit-background-clip: text;
    -webkit-text-stroke: 3px transparent;
  }
`;
