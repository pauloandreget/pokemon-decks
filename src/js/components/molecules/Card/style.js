/* eslint-disable import/prefer-default-export */
export const styleWrapper = (isDisabled) => `
  width: 240px;
  height: 330px;
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
  border-radius: 8px;
  transition: box-shadow .2s linear 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity .1s linear 0s;
    opacity: ${isDisabled ? '0.6' : '1'};
  }

  &:hover, &:active, &:focus {
    box-shadow: ${isDisabled ? 'none' : '2px 2px 10px 0px rgba(0, 0, 0, .2)'};
  }
`;
