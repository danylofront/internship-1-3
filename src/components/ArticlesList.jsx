import React from 'react';
import PropTypes from "prop-types";
import { ListElement } from './ListElement';
import { useHistory } from "react-router-dom";

export const ArticlesList = ({data}) => {
    const history = useHistory();
    const handleClick = (id) => history.push(`/article?id=${id}`);
    
    return (
        <div className="card-group p-4 mx-3 justify-content-center">   
            {data.map(item => (
                <ListElement 
                    title={item.title} 
                    imageUrl={item.imageUrl} 
                    key={item.id} 
                    onClick={handleClick}
                    id={item.id}
                />
            ))}    
        </div>
    )
}

ArticlesList.propTypes = {
    data: PropTypes.array.isRequired,
}