import state from './state';
import TYPES from './types'
import { MutationTree } from 'vuex'

// const mutations: MutationTree<RootStateTypes> = {
//   SET_AUTHOR(state: RootStateTypes, data: string) {
//     state.author = data;
//   },
//   SET_LINE(state: RootStateTypes, list): void {
//     state.list = list;
//   }
// };
const mutations: MutationTree<any> = {
  [TYPES.SET_LIST](state, list): void {
    state.list = list;
  },
  [TYPES.SET_SEARCH_VAL](state, value): void {
    state.searchVal = value;
  }
}

export default mutations
