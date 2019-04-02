import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 0.1rem solid #78bdd2;
  box-shadow: 0rem 0.4rem 0.5rem -0.1rem rgba(0, 0, 0, 0.62);
  background: #fff;
`;

const Th = styled.th`
  border: 0.1rem solid #89bdd3;
  background: #89bdd3;
`;

const Thead = styled.thead`
  @media (max-width: 650px) {
    display: none;
    content: attr(data-title);
  }
`;

const Tr = styled.tr`
  height: 5.2rem;
  @media (max-width: 650px) {
    tr {
      text-align: unset !important;
    }
  }
`;

const Td = styled.td`
  text-align: center;

  @media (max-width: 650px) {
    display: block;
    font-size: 1.5rem;
    margin: 0.4rem;
    text-align: unset;

    .parcel-detail {
      float: right;
      margin: 0 1rem 0 0;
    }
  }
`;

const Tdbig = styled.td`
  width: 11rem;
  padding: 0 0.6rem;
  @media (max-width: 650px) {
    padding: 0 4px;
    width: 117px;
  }
`;

const SpanMobileView = styled.span`
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  display: none;

  @media (max-width: 650px) {
    display: inline-block;
    margin: 0 5rem 0 1rem;
    float: none !important;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const SpanView = styled.span`
  margin: 0 1rem 0 0;
  color: ${props => props.color || '#1A1A1C'};

  @media (max-width: 650px) {
    float: right;
  }
`;

const Select = styled.select`
  padding: 0.35rem 0.6rem;
  min-width: 80%;
  background: transparent;
  border-radius: 0.3rem;

  :disabled {
    background-color: rgb(134, 126, 126);
    color: #333;
  }
`;

export { Table, Th, Tr, Td, Tdbig, Thead, SpanView, SpanMobileView, Select };
