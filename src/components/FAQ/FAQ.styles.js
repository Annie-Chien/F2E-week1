import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const FAQContainer = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h3 {
    font-family: var(--ff-heading-en);
    font-size: var(--fz-h3);
    color: var(--clr-text-light);
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
  }
`;

export const TabList = styled.ul`
  width: 100%;
  overflow: scroll;
  display: flex;
  gap: 2rem;
  -ms-overflow-style: none;

  @media ${devices.tablet} {
    justify-content: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.li`
  white-space: nowrap;
  font-size: var(--fz-p2);
  color: ${(props) =>
    props.active ? 'var(--clr-text-light)' : 'var(--clr-text-gray)'};
  position: relative;
  padding-bottom: 1.5rem;
  cursor: pointer;

  &:after {
    content: '';
    width: 1.2rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 10rem;
    background-color: var(--clr-secondary);
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;

export const QAListContainer = styled.div`
  max-width: 680px;
`;

export const QAList = styled.ul`
  padding: 4rem 2rem;
  background-color: #fff;
  border-radius: 1.6rem;
  display: grid;
  gap: 4rem;
`;

export const QAListItem = styled.li`
  display: grid;
  gap: 1rem;

  & > span {
    font-family: var(--ff-heading-en);
    font-size: var(--fz-h4);
    color: var(--clr-primary-dark);
    font-weight: bold;
  }
  & > h5 {
    font-size: var(--fz-h4);
  }
  & > p {
    font-size: var(--fz-p2);
  }
`;
