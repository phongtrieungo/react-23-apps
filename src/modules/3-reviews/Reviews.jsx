import React, { useState } from 'react';
import person from './data';
import { FaChevronLeft, FaQuoteRight, FaChevronRight } from 'react-icons/fa';

export const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text, id } = person[index];

    const checkIndex = (index) => index > person.length - 1 ? 0 : index < 0 ? person.length - 1 : index;

    const nextPerson = () => setIndex(index => checkIndex(index + 1));

    const prevPerson = () => setIndex(index => checkIndex(index - 1));

    const randomPerson = () => setIndex(index => checkIndex(Math.floor(Math.random() * person.length)));

    return (
        <article className="review">
            <div className="image-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="pre-btn" onClick={prevPerson}><FaChevronLeft /></button>
                <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
                <button className="random-btn" onClick={randomPerson}>surprise me</button>
            </div>
        </article>
    )
}
