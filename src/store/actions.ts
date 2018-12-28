import state from './state'
import axios from 'axios'
import TYPES from './types';
import { ActionTree } from 'vuex'

const actions: ActionTree<any, any> = {
  // SET_AUTHOR_ASYN({ commit, state: RootStateTypes }, data: string) {
  //   commit('SET_AUTHOR', data);
  // },
  // ajax 初始化
  async initAjax({ dispatch }) {
    dispatch("getList");
  },
  // 获取列表
  async getList({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios
      .get("/list")
      .then(res => res.data)
      .catch((e: string) => console.log(e));
    if (res && res.code == 200) {
      commit(TYPES.SET_LIST, res.result.list);
    }
  },
  // 搜索内容
  setSearchVal({commit}, value: string) {
    commit(TYPES.SET_SEARCH_VAL, value);
  }
};

export default actions
