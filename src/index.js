import { bugAdded } from "./actions";
import store from "./store";

const unsubscribe = store.subscribe(()=>{
  console.log('store changed', store.getState());
})

store.dispatch(bugAdded("test 1"));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
