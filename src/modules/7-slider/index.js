import React, { useEffect, useState } from "react";
import data from "./data";
import './slider.style.css';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';

export const SliderModule = () => {
  const [people, setPeople] = useState(data);
  const [personIndex, setPersonIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => goNext(personIndex), 3000);

    return () => clearInterval(slider);
  }, [personIndex]);

  const goPrevious = () => {
    if (personIndex === 0) {
      setPersonIndex(people.length - 1);
      return;
    }
    setPersonIndex(personIndex - 1);
  };

  const goNext = () => {
    if (personIndex === people.length - 1) {
      setPersonIndex(0);
      return;
    }
    setPersonIndex(personIndex + 1);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, name, quote, title } = person;
          let position = 'lastSlide';
          if (index === personIndex) {
            position = 'activeSlide';
          }

          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'nextSlide';
          }
          return (
            <article key={index} className={position}>
              <img src={image} alt={name} className="person-img" />
							<h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={goPrevious}><FiChevronLeft /></button>
        <button className="next" onClick={goNext}><FiChevronRight /></button>
      </div>
    </section>
  );
};
