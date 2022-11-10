import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 44rem;
  border: 3px solid white;
  border-radius: 1.6rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: all 0.25s;

  &:hover {
    background-color: rgba(110, 119, 233, 0.1);
    border: 3px solid var(--clr-primary);
    box-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h4 {
    font-size: var(--fz-h4);
  }

  span {
    color: var(--clr-secondary);
  }

  p {
    font-size: var(--fz-p2);
  }
`;

export const Dash = styled.div`
  width: 3px;
  height: 15px;
  background-color: #fff;
  border-radius: 10rem;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
