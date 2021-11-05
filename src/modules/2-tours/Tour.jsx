import React, { useState } from 'react';

export const Tour = ({ id, name, image, info, price, removedTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="single-tour">
            <img src={image} alt={name} srcset="" />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substr(0, 100)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{ readMore ? 'Show less' : 'Show more' }</button>
                </p>
                <button className="btn-delete" onClick={() => removedTour(id)}>Not interested</button>
            </footer>
        </article>
    )
}
