//import { RootStateTypes } from "./types";
// const state: RootStateTypes = {
//   author: "pjn",
//   list: []
// };
interface State {
  author: string,
  list: StoreState.list[],
  searchVal: string
}
let state: State = {
  author: 'pjn',
  list: [],
  searchVal: ''
}
export default state;
