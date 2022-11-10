import styled from 'styled-components';
// import { devices } from '../utils/constants';
//Framer motion
import { motion } from 'framer-motion';

export const Button = styled.button`
  font-size: ${(props) => (props.primary ? '2rem' : '1.6rem')};
  padding: 0.8rem ${(props) => (props.primary ? '4rem' : '1.6rem')};
  font-family: inherit;
  color: ${(props) =>
    props.primary ? 'var(--clr-text-dark)' : 'var(--clr-text-light)'};
  background-color: ${(props) =>
    props.primary ? 'var(--clr-yellow)' : 'transparent'};
  border: ${(props) => (props.primary ? 'none' : '1px solid currentColor')};
  border-radius: 10rem;
  font-weight: ${(props) => (props.primary ? 'bold' : 'regular')};
  transition: all 0.25s;

  &:hover {
    background-color: ${(props) =>
      props.primary ? 'var(--clr-yellow-light)' : 'transparent'};
    color: ${(props) =>
      props.primary ? 'var(--clr-text-dark)' : 'var(--clr-secondary)'};
    box-shadow: ${(props) =>
      props.primary
        ? 'box-shadow: 0px 0px 10px rgba(255, 243, 133, 0.6)'
        : '0px 0px 10px rgba(85, 255, 173, 0.6);'};
  }
`;

export const ImgContainer = styled(motion.div)`
  width: ${(props) => props.width || 'max-content'};
  position: ${(props) => (props.absolute ? 'absolute' : 'static')};
  top: ${(props) => props.top || 'auto'};
  left: ${(props) => props.left || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  right: ${(props) => props.right || 'auto'};
`;
