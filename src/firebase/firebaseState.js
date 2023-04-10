import React, {useReducer} from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import {FirebaseContext} from './firebaseContext';
import {firebaseReducer} from './firebaseReducer';
import {SHOW_LOADER, ADD_ARTICLES} from './firebaseReducer'

const url = 'https://acrticles-default-rtdb.europe-west1.firebasedatabase.app';

export const FirebaseState = ({children}) => {
    const initialState = {
        articles: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const getArticles = async () => {
        showLoader();
        const response = await axios.get(`${url}/articles.json`);

        const payload = response.data;

        dispatch({type: ADD_ARTICLES, payload})
    }
    

    return (
        <FirebaseContext.Provider value={{
            getArticles,
            loading: state.loading,
            articles: state.articles,
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

FirebaseState.propTypes = {
    children: PropTypes.node.isRequired,
}