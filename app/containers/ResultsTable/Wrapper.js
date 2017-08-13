import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  table {
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 3px;
    box-shadow: 5px 5px 5px #eee;
    thead tr {
        border-bottom: 1px solid lightgrey;
    }

    tr {
      &:nth-child(even) {
          background-color: lightgrey;
      }  
    }

    td, th {
        text-align: left;
        padding: 12px;
    }
  }
`;

export default Wrapper;