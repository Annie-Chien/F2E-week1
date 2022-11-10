import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const ProblemBannerContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 90%;
    margin: auto;

    @media ${devices.tablet} {
      width: 100%;
    }
  }
`;
