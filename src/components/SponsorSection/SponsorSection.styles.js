import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const SponsorSectionContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--clr-bg);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const SponsorSectionTitle = styled.div`
  line-height: 1.5;
  position: relative;

  & > h3 {
    text-transform: uppercase;
    font-family: var(--ff-heading-en);
    font-size: var(--fz-h3);
    text-align: center;
  }

  span {
    display: block;
    font-size: var(--fz-h4);
  }
`;

export const SponsorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;
