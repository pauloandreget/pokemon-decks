import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '@atoms/Input';
import Button from '@atoms/Button';
import { styleWrapper, styleTools, styleList } from './style';

const Home = () => {
  const history = useHistory();
  const decks = useSelector((state) => state.Decks.get('decks'));
  const [search, setSearch] = useState('');
  const handleNewDeck = () => {
    history.push('/new-deck');
  };
  const handleDetailsDeck = (deck) => {
    history.push(`/details/${deck.id}`);
  };
  const filterDeckName = (deck) =>
    search.length === 0 || deck.name.toLowerCase().includes(search.toLowerCase());
  return (
    <div css={styleWrapper}>
      <section css={styleTools}>
        <div className="input-search">
          <Input
            id="search"
            name="search"
            label="Pesquisar"
            placeholder="Pesquise pelo nome do deck"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="btn-new-deck">
          <Button type="button" onClick={handleNewDeck}>
            Novo Deck
          </Button>
        </div>
      </section>
      <section css={styleList}>
        {decks &&
          decks.filter(filterDeckName).map((deck) => (
            <div role="presentation" key={deck.id} onClick={() => handleDetailsDeck(deck)}>
              {deck.name}
            </div>
          ))}
      </section>
    </div>
  );
};

export default Home;
