import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.primary ? '#5680E9' : '#3AAFA9')};
  border-radius: 0.3rem;
  text-align: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: ${props => (props.primary ? '0.1rem solid #5680E9' : '0.1rem solid #3AAFA9')};
  margin: 1rem;
  padding: ${props => (props.small ? '0.4rem 0.5rem' : '1.2rem 0.5rem')};
  box-shadow: -0.1rem 0.3rem 0.5rem 0rem rgba(0, 0, 0, 0.66);
  text-transform: uppercase;
  transition: all 0.3s;
  display: ${props => (props.inlineButton ? 'inline-block' : 'block')};
`;

export default Button;
