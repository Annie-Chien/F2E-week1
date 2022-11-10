import styled from 'styled-components';

export const Ticker = styled.div`
  padding: 1rem 0;
  background: right
    linear-gradient(
      ${(props) => (props.bottom ? '-90' : '90')}deg,
      #9da4ff 0%,
      #55ffad 100%
    );
  background-size: 200%;
  position: absolute;
  top: ${(props) => (props.top ? props.top : 'auto')};
  right: 0;
  left: 0;
  bottom: ${(props) => (props.bottom ? props.bottom : 'auto')};
  overflow: hidden;
`;

export const TickerItem = styled.div`
  white-space: nowrap;
  display: flex;
  gap: 2rem;

  justify-content: ${(props) => (props.bottom ? 'start' : 'end')};
  align-items: center;

  & > p {
    color: var(--clr-text-light);
    text-transform: uppercase;
    font-size: 2rem;
    font-family: var(--ff-heading-en);
  }
`;

export const Dot = styled.div`
  min-width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--clr-text-light);
`;
