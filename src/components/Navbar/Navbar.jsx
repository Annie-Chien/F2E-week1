import { useState } from 'react';
// Images
import logo from '../../assets/images/Navbar/logo.png';
import menuIcon from '../../assets/images/Navbar/icon-hamburger.svg';
import closeIcon from '../../assets/images/Navbar/icon-close.svg';
// Styled Components
import {
  NavbarContainer,
  Overlay,
  Logo,
  ToggleBtn,
  CloseBtn,
  Menu,
  NavbarList,
} from './Navbar.styles';
import { Button } from '../../shared/shared.styles';

//=======================================//

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  document.body.style.overflow = isShown ? 'hidden' : 'auto';

  return (
    <NavbarContainer>
      <Overlay
        className={isShown ? 'show' : null}
        onClick={() => setIsShown(false)}
      />
      <ToggleBtn onClick={() => setIsShown(!isShown)}>
        <img src={menuIcon} alt="hamburger icon" />
      </ToggleBtn>
      <Logo src={logo} alt="the f2e logo" />
      <a href="https://2022.thef2e.com" target="blank" className="btn">
        <Button>立即報名</Button>
      </a>
      <Menu className={isShown ? 'show' : null}>
        <CloseBtn onClick={() => setIsShown(!isShown)}>
          <img src={closeIcon} alt="x-mark icon" />
        </CloseBtn>
        <NavbarList>
          <li>
            <a href="https://2022.thef2e.com" target="blank">
              關卡資訊
            </a>
          </li>
          <li>
            <a href="https://2022.thef2e.com" target="blank">
              攻略資源
            </a>
          </li>
          <li>
            <a href="https://2022.thef2e.com" target="blank">
              求職專區
            </a>
          </li>
        </NavbarList>
        <Button>登入</Button>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
