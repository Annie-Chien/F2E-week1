import styled from 'styled-components';
import { devices } from '../../utils/constants';

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: var(--clr-bg-dark);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  z-index: 100;

  @media ${devices.tabletS} {
    position: relative;
  }

  & > a {
    @media ${devices.tabletL} {
      display: none;
    }
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: none;
  z-index: -1;

  &.show {
    display: block;
  }
`;

export const Logo = styled.img`
  width: 11rem;
  margin-right: auto;
`;

export const ToggleBtn = styled.button`
  display: flex;
  align-items: center;

  @media ${devices.tabletL} {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  transition: transform 0.5s;

  &:hover {
    transform: rotate(180deg);
  }

  @media ${devices.tabletL} {
    display: none;
  }
`;

export const Menu = styled.div`
  max-height: 0;
  padding: 0;
  background-color: var(--clr-bg-dark);
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: hidden;
  transition: all 0.4s;

  @media ${devices.tabletL} {
    position: relative;
    max-height: max-content;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  &.show {
    padding: 5rem 1.5rem;
    max-height: 50rem;
  }

  & > button:last-child {
    max-width: 30rem;
    width: 100%;
    margin: auto;
    align-self: stretch;

    @media ${devices.tabletL} {
      margin: 0;
      width: fit-content;
    }
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  @media ${devices.tabletL} {
    flex-direction: row;
  }

  & > li {
    &:hover a {
      color: var(--clr-secondary);
    }
  }

  & a {
    transition: color 0.25s;
    color: var(--clr-text-gray);
    text-decoration: none;
  }
`;
