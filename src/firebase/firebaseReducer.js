export const ADD_ARTICLES = 'GET_ARTICLES';
export const SHOW_LOADER = 'SHOW_LOADER';

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_ARTICLES]: (state, {payload}) => ({...state, articles: payload, loading: false}),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}