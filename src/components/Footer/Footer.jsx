//Styled Components
import { FooterContainer } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Copyright © 2022 Coded by
        <a href="https://github.com/Annie-Chien"> Annie Chien</a> / Designed by
        <a href="https://2022.thef2e.com/users/12061549261447630282">
          {' '}
          Jenny Wu
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
