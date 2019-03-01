import { setValueEventHandler } from '../helpers/helpers';
import storeCreator from './storeCreator';

export const initialStore = () => ({
  youScore: 0,
  theyScore: 0,
  yourChoice: '',
  theirChoice: '',
});

const dataStore = storeCreator(setValueEventHandler, initialStore());

export default dataStore;
