import React from 'react';
import PropTypes from "prop-types";

export const ListElement = ({title, imageUrl, onClick, id}) => {
    const handleClick = () => onClick(id);
    return (
        <div className="card mb-5 mx-3 mt-4" onClick={handleClick}>
            <img className="card-img-top" src={imageUrl} alt="image" />
            <div className="card-body">
                <h5 className="card-title font-weight-bold text-center">{title}</h5>
            </div>
        </div>
    )
}

ListElement.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}
