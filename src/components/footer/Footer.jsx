import React from 'react';
import SocialCard from '../SocilaCard';
import Loanding from '../Loanding'
import ToolTips from '../ToolTips';

const Footer = () => {
  return (
    <footer id='footer'>
      <p>© 2023 David Domínguez Bueno. Todos los derechos reservados.</p>
      <SocialCard/>
      <Loanding />
      <ToolTips />
    </footer>
  );
};

export default Footer;
