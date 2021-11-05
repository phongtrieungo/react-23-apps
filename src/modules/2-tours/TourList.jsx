import React from 'react';
import { Tour } from './Tour';

export const TourList = ({ tours, removedTour }) => {
    return (
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <hr />
            </div>
            <ul>
                {
                    tours.map(tour => <Tour key={tour.id} {...tour} removedTour={removedTour} />)
                }
            </ul>
        </section>
    )
}
