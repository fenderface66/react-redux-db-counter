import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  margin: 6px 0;
  max-width: 700px;

  select {
    padding: 5px;
    display: block;
    border:none;
    border-bottom: 1px solid lightgrey;
    outline: none;
  }

  button, input[type="submit"] {
    color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 5px 5px 5px #eee;
    text-shadow: none;
    padding: 5px 15px;
    margin: 6px 0;
    cursor: pointer;
    display: block;
    transition: .2s;
    outline: none;
  }

  label {
    font-weight: bold;
  }

  input[type="submit"] {
    background: #94c6f1;
    &:hover {
      background: #016ABC;
      border: 1px solid #eee;
    }
  }

  &.intro {
    transition: .3s;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    input[type="submit"], select {
      display: inline-block;
    }
  }
`;

export default Wrapper;