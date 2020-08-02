export const styleWrapper = () => `
  display: flex;

  .list {
    flex: 1;
    margin-right: 24px;
  }

  .deck {
    width: 300px;
  }
`;

export const styleList = () => `
  .cards {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
    grid-gap: 8px;
  }
`;

export const styleDeck = () => `
  .btn-save button {
    width: 100%;
    margin-bottom: 16px;
  }
  .cards-label {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #757575;
    letter-spacing: .04em;
    font-weight: bold;
    line-height: 16px;
  }
  .deck-card {
    margin-top: 8px;
    border: 1px solid #e0e0e0;
    padding: 8px 12px;
    border-radius: 4px;
    display: flex;

    p {
      flex: 1;
      margin: 0px;
    }

    span {
      border: 1px solid #757575;
      border-radius: 50%;
      padding: 0px 5px;
      margin-right: 4px;
    }

    button {
      margin-right: 4px;

      &:last-of-type {
        margin-right: 0px;
      }
    }

    &:first-of-type {
      margin-top: 24px;
    }
  }
`;
