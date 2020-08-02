/* eslint-disable import/prefer-default-export */
export const styleBase = () => `
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #fff;
  background-color: #019849;
  border: 1px solid #019849;
  padding: 0px 24px;
  letter-spacing: 0.04em;
  cursor: pointer;
  border-radius: 8px;
  min-height: 48px;
  transition: color .1s linear 0s,
              background-color .1s linear 0s,
              border-color .1s linear 0s,
              opacity .2s linear 0s;

  &:hover, &.disabled, &[disabled] {
    color: #fff;
    background-color: #018A42;
    border: 1px solid #018A42;
  }

  &:not(:disabled):not(.disabled):active {
    color: #fff;
    box-shadow: none;
    background-color: #215C41;
    border: 1px solid #215C41;
  }

  &.disabled, &[disabled] {
    cursor: not-allowed;
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    color: #fff;
  }
`;
