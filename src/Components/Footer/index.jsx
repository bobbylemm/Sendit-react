import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import FooterComponent from '../styledComponent/FooterComp.jsx';

const Footer = () => (
  <FooterComponent>
    <p>© 2018 no rights reservered</p>
    <p>
      Designed by
      {' '}
      <span>
        <Link to="#">Nwoga Chidozie</Link>
      </span>
    </p>
  </FooterComponent>
);

export default Footer;
