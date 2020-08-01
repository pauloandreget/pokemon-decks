import client from './index';

const list = () => client.get('cards');

export default {
  list,
};
