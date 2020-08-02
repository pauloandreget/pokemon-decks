export const styleWrapper = () => ``;
export const styleTools = () => `
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 16px;
  .input-search {
    flex: 1;
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid #e0e0e0;
  }
  .btn-new-deck {
    display: flex;
    align-items: center;
  }
`;

export const styleList = () => `
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  grid-gap: 8px;  

  div {
    border: 1px solid #757575;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: #fff;
    cursor: pointer;
    transition: box-shadow .2s linear 0s;

    &:hover, &:active, &:focus {
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, .2);
    }
  }
`;
