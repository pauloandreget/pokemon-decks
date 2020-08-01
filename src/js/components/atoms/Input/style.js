/* eslint-disable import/prefer-default-export */
export const styleWrapper = () => `
  position: relative;

  label {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #757575;
    letter-spacing: .04em;
    font-weight: bold;
    line-height: 16px;
  }

  input {
    border: 1px solid #e0e0e0;
    background-color: #fff;
    padding: 10px 12px;
    margin-top: 8px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #424242;
    -webkit-appearance: none;
    transition: border-color 0.2s linear 0s;
    display: flex;
    width: 100%;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: none;
    box-sizing: border-box;
    line-height: 18px;

    &::placeholder {
      color: #757575;
      font-weight: normal;
    }

    &:focus:enabled, &:hover:enabled {
      outline: none;
      border-color: #019849;
    }

    &[disabled],
    &[readonly],
    fieldset[disabled] &{
      background: #f5f5f5;
      color: #757575;
      cursor: not-allowed;
    }
  }
`;
