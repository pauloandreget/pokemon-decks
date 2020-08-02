/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '@atoms/Input';
import Button from '@atoms/Button';
import Card from '@molecules/Card';
import { MIN_CARDS, MAX_CARDS } from '@shared/constants';
import { list as listCardsAction } from '@store/cards/actions';
import { create as createDeckAction } from '@store/decks/actions';
import { styleWrapper, styleList, styleDeck } from './style';

const NewDeck = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cards, loading } = useSelector((state) => state.Cards.toJS());
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    if (cards === null) {
      dispatch(listCardsAction());
    }
  }, [dispatch]);
  const handleSaveDeck = () => {
    if (name.length > 0) {
      dispatch(createDeckAction({ name, cards: list }));
      history.push('/');
    }
  };
  const handleSelectCard = (card) => {
    setList([...list, { ...card, quantity: 1 }]);
  };
  const cardsCounter = () => list.reduce((prev, item) => prev + item.quantity, 0);
  const changeQuantity = (card, type) => {
    if (cardsCounter() === MAX_CARDS) {
      return;
    }
    if ((type === 'increase' && card.quantity < 4) || type === 'decrease') {
      const newList = list.reduce((prev, item) => {
        if (item.id === card.id) {
          const qty = item.quantity + (type === 'increase' ? 1 : -1);
          if (qty > 0) {
            prev.push({ ...item, quantity: qty });
          }
        } else {
          prev.push(item);
        }
        return prev;
      }, []);
      setList(newList);
    }
  };
  const filterCardName = (card) =>
    search.length === 0 || card.name.toLowerCase().includes(search.toLowerCase());
  return (
    <div css={styleWrapper}>
      <section css={styleList} className="list">
        <Input
          id="search"
          name="search"
          label="Pesquisar"
          placeholder="Pesquise pelo nome da carta"
          onChange={(event) => setSearch(event.target.value)}
        />
        {loading && <p>Carregando...</p>}
        <div className="cards">
          {cards &&
            cards.length > 0 &&
            cards
              .filter(filterCardName)
              .map((card) => (
                <Card
                  key={card.id}
                  data={card}
                  disabled={!!list.find((item) => item.id === card.id)}
                  onSelect={handleSelectCard}
                />
              ))}
        </div>
      </section>
      <section css={styleDeck} className="deck">
        <div className="btn-save">
          <Button type="button" disabled={cardsCounter() < MIN_CARDS} onClick={handleSaveDeck}>
            Salvar Deck
          </Button>
        </div>
        <Input
          id="name"
          name="name"
          label="Nome"
          placeholder="Informe um nome para este deck"
          onChange={(event) => setName(event.target.value)}
        />
        {list.length > 0 && <p className="cards-label">Cartas ({cardsCounter()})</p>}
        {list.map((item) => (
          <div key={item.id} className="deck-card">
            <span>{item.quantity}</span>
            <p>{item.name}</p>
            <button type="button" onClick={() => changeQuantity(item, 'decrease')}>
              -
            </button>
            <button type="button" onClick={() => changeQuantity(item, 'increase')}>
              +
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewDeck;
