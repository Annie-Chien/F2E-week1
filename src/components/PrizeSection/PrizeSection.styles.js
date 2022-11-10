import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const PrizeSectionContainer = styled.section`
  padding: 5rem 0;
  background-color: var(--clr-bg-dark);
  color: var(--clr-text-light);

  h4 {
    font-size: var(--fz-h4);
    text-align: center;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
  }
`;

export const Wrap = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: auto;

  @media ${devices.laptop} {
    max-width: 70%;
  }
`;

export const CarRacing = styled.div`
  margin: 4rem 0;
  width: 100%;
  border-bottom: 3px solid white;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 3rem;
  background-color: var(--clr-card-bg);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: -2px -2px 5px #313a65;
  transition: all 0.5s;

  & > h3 {
    color: var(--clr-primary);
    font-size: var(--fz-h3);
    text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
  }

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const CardText = styled.div`
  width: 100%;

  h4 {
    text-align: left;
    font-size: var(--fz-h5);
    margin: 2rem 0 1rem;
  }

  p {
    font-size: var(--fz-p2);
  }
  span {
    color: var(--clr-secondary);
  }

  small {
    display: block;
    font-size: var(--fz-p3);
    color: var(--clr-text-gray);
    margin-bottom: 2rem;
  }

  h5 {
    font-size: var(--fz-h5);
  }
`;
