import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  line-height: 1.3;
  padding: 1rem;
  margin-bottom: 1.9rem;
  height: 3.5rem;
  border: 0.1rem solid #b3aaaa;
  border-radius: 0.5rem;
  cursor: auto;
  display: inline-block;
  outline: none;
}
::placeholder {
  opacity: 0.5;
}
`;

export default Input;
