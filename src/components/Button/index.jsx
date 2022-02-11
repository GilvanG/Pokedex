import PropTypes from 'prop-types';
import styled from 'styled-components';

const white = '#f0f0f0';
const red = '#f00000';
const black = '#222224';

const Button = styled.button`
  margin: 0.5rem;
  background-color: ${red};
  color: ${white};
  
  border-style: solid;
  border-color: ${black};
  border-radius: 1rem;
  border-width: 0.2rem;

  padding: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover, &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: ${white};
    color: ${black};
    border-color: ${red};
    cursor: not-allowed;
    &:hover{
      opacity: .6;
    }
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
