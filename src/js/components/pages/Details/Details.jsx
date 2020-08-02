import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Details = ({ match }) => {
  const decks = useSelector((state) => state.Decks.get('decks'));
  const { params } = match;
  const deck = decks.find((item) => item.id === Number(params.id));
  return (
    <section>
      <h1>{deck && deck.name}</h1>
    </section>
  );
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }),
};

Details.defaultProps = {
  match: null,
};

export default Details;
