import { createStore } from 'vuex';
import modules from '@/store/modules';

// TODO: fix this typing error
// @ts-ignore
const store = createStore({
  modules,
  strict: import.meta.env.NODE_ENV !== 'production'
});

export default store;
