import styled from 'styled-components';

const Header = styled.header`
  background: #ffffff;
  color: #333;
  min-width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 1.4rem;
  box-shadow: 0rem 0.3rem 0.8rem -0.1rem rgba(0, 0, 0, 0.55);
`;

const Nav = styled.nav`
  float: right;
  margin-top: 1.7rem;

  @media (max-width: 600px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    float: none;
  }
`;

export { Header, Nav };
