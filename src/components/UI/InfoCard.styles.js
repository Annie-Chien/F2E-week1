import styled from 'styled-components';
//Framer Motion
import { motion } from 'framer-motion';

export const Container = styled.div`
  color: var(--clr-primary-dark);
  width: 100%;
  max-width: 30rem;

  perspective: 150rem;
  position: relative;
  backface-visibility: hidden;

  & .front,
  & .back {
    backface-visibility: hidden;
  }
`;
export const CardFront = styled(motion.div)`
  padding: 2rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  gap: 1rem;
  & > h4 {
    font-size: var(--fz-h4);
  }

  & > small {
    font-size: var(--fz-h5);
  }
`;
export const Tag = styled.span`
  font-size: 1.6rem;
  padding: 0.4rem 0.8rem;
  color: var(--clr-text-dark);
  background-color: var(--clr-secondary);
  border-radius: 0.8rem;
`;

export const InfoDetail = styled.div`
  font-size: 1.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: var(--clr-primary);
    font-family: var(--ff-en);
    text-transform: uppercase;
  }

  a {
    display: flex;
    font-weight: bold;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.25s;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 0px;
      height: 2px;
      background-color: var(--clr-primary);
      bottom: 0;
      transition: all 0.3s;
    }
  }

  a:hover {
    &:after {
      width: 8.5rem;
    }
  }

  img {
    width: 20px;
  }
`;

export const CardBack = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 1.6rem;
  background: var(--gradient-1);
  display: grid;
  place-items: center;
  justify-content: center;

  & > h3 {
    font-family: var(--ff-heading-en);
    font-size: var(--fz-h3);
  }
`;
