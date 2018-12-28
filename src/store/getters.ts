import state from './state';
//import { RootStateTypes } from './types'
import { GetterTree } from 'vuex'

// const getters: GetterTree<RootStateTypes, any> = {
//   author: (state: RootStateTypes) => state.author,
//   list: (state: RootStateTypes) => state.list
// }
const getters: GetterTree<any, any> = {
  load(state): boolean {
    const {list} = state
    return !!(list.length)
  }
}

export default getters
