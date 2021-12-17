import {createStore} from 'redux';
import { tokenReducer } from './token/tokensReducer';

const store = createStore(tokenReducer);

export default store;