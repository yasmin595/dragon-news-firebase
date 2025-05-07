import React from 'react';

const NewsDeatilsCard = ({news}) => {
    console.log(news)
    return (
        <div>
            <h2>{news.title}</h2>
        </div>
    );
};

export default NewsDeatilsCard;