import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const white = '#f0f0f0';
const black = '#222224';

const Footer = styled.div`
  width: calc(100%-8px);
  margin: -8px;
  margin-left: -8px;
  margin-top: 8px;
  padding: 0px 16px 16px 16px;
  overflow: hidden;

  color: ${black};
  background-color: ${white};

  border-width: 8px;
  border-top-left-radius: 8px 8px;
  border-top-right-radius: 8px 8px;
  border-style: solid;
  border-color: ${black};

  align-items: center;
  font-size: 140%;
  font-family: 'PT Sans Narrow';
  text-align: center;
`;

Footer.Circle = styled.div`
  position: relative;
  margin: auto;
  margin-top: 0px;
  height: 30px;
  width: 60px;
  border-bottom-left-radius: 150px 150px;
  border-bottom-right-radius: 150px 150px;

  /* border-radius: 150px; */
  border-bottom-style: solid;
  border-right-style: solid;
  border-left-style: solid;

  border-width: 10px;
  border-color: ${black};
  background-color: ${white};
`;

Footer.Text = styled.div`
  padding: 16px;
`;

const FooterPokeball = ({ children }) => (
  <Footer>
    <Footer.Circle />
    <Footer.Text>{children}</Footer.Text>
  </Footer>
);

FooterPokeball.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterPokeball;
