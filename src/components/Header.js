import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <h1>Coronavirus (COVID-19)</h1>
        <ul>
          <li>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">CDC Info</a>
          </li>
          <li>
            <a href="https://github.com/kik-o/coronavirus-map-dashboard">
              <FaGithub /> Github
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
