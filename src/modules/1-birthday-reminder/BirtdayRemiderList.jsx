import React from 'react';

export const BirtdayReminderList = ({ people }) => {
    return (
        <>
            {
                people.length ? people.map(p => {
                    const {id, name, age, image} = p;

                    return (
                        <article id={id} className="person">
                            <img src={image} alt={name} />
                            <div>
                                <h4>{name}</h4>
                                <p>{age} ages</p>
                            </div>
                        </article>
                    )
                }) : <div>No one</div>
            }
        </>
    )
}
