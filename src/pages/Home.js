import React from 'react';
import { ArticlesList } from '../components/ArticlesList';
import {FirebaseContext} from '../firebase/firebaseContext';
import {Loader} from '../components/common/Loader';

export const Home = () => {
    const {loading, articles, getArticles} = React.useContext(FirebaseContext);

    React.useEffect(() => {
        if (!articles.length) getArticles();
    }, []);
    return (
        <div className="overlay">
            {loading  ? <Loader /> : <ArticlesList data={articles}/>}
        </div>
    )
}