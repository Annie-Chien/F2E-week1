import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const InfoSectionContainer = styled.section`
  font-size: 2rem;
  min-height: 100vh;
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

export const Wrap = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;

  p {
    max-width: 18rem;
    font-size: var(--fz-p2);

    @media ${devices.tablet} {
      max-width: 100%;
    }
  }
`;

export const InfoHeading = styled.div`
  padding: 2rem 4rem;
  color: var(--clr-secondary);
  border: 3px solid currentColor;
  border-radius: 10rem;
  text-shadow: 0px 0px 10px rgba(85, 255, 173, 0.6);
  position: relative;

  h3 {
    min-width: 20.5rem;
    font-size: var(--fz-h3);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${devices.laptopS} {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;
