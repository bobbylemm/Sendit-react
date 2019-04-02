import styled from 'styled-components';

const FormCard = styled.div`
  max-width: 50rem;
  margin: 5rem auto;
  border: 0.1rem solid #efefef;
  background: #efefef;
  box-shadow: -0.2rem 1rem 1.6rem -0.2rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  color: #333;

  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1.3rem;
    text-transform: capitalize;
  }

  select {
    border-radius: 4px;
    display: block;
    padding: 0.7rem;
    width: 100%;
    background: #cee5f2;
  }
`;
export default FormCard;
