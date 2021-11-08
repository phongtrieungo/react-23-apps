import React from 'react';

import './reviews.css';
import { Reviews } from './Reviews';

export const ReviewsModule = () => {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our reviews</h2>
                    <div className="underline"></div>
                    <Reviews />
                </div>
            </section>
        </main>
    )
}
