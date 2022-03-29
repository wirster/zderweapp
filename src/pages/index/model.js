// src/pages/index/model

export default {
    namespace: 'users',
    state: {
      title: '整点儿GIS'
    },
  
    effects: {},
  
    reducers: {
      save(state, { payload }) {
        return { ...state, ...payload };
      },
    },
  };
  