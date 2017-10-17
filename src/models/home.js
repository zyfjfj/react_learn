import {hashHistory} from 'dva/router';

export default {
  namespace: 'homes',
  state: {
    sub1s: [],
  },
  effects: {
    * query() {
    },
  },
  reducers: {
    querySuccess(state) {
      const sub1s= ['option1', 'option2', 'option3', 'option6'];
      return {...state, sub1s};
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        dispatch({
          type: 'querySuccess',
          payload: {},
        });
      });
    },
  }
}
