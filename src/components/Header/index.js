/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const white = '#f0f0f0';
const red = '#f00000';
const black = '#222224';

const Header = styled.div`
  width: calc(100%-8px);
  margin: -8px;
  margin-left:-8px;
  margin-bottom: 8px;
  padding: 16px 16px 0px 16px;
  /* padding: 8px; */
  
  color: ${white};
  background-color: ${red};
  
  border-width: 8px;
  border-bottom-left-radius: 8px 8px;
  border-bottom-right-radius: 8px 8px;
  border-style: groove;
  border-color: ${black};

  align-items: center;
  overflow: hidden;
  font-size: 240%;
  font-family: 'Russo One';
  text-align: center;
`;

Header.Circle = styled.div`
    position: relative;
    margin: auto;
    height: 30px;
    width: 60px;
    border-top-left-radius: 150px 150px;
    border-top-right-radius: 150px 150px;
  
    /* border-radius: 150px; */
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    
    border-width: 10px;
    border-color: ${black};
    background-color: ${white};
`;
Header.Text = styled.div`
  padding: 8px;
`;

const HeaderPokeball = (props) => (
  <Header>
    <Header.Text>
      {props.children}
    </Header.Text>
    <Header.Circle />
  </Header>
);

export default HeaderPokeball;
