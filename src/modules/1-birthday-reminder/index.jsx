import React, { useState } from "react"
import { BirtdayReminderList } from './BirtdayRemiderList';
import { peopleData } from './people.const';

export const BirthdayReminderModule = () => {
    const [people, setPeople] = useState([]);

    return(
        <main>
            <section className="container">
                <h3>{people?.length || 0} birthdays today</h3>
                <BirtdayReminderList people={people}/>

                <button onClick={() => setPeople(peopleData)}>Load data</button>
                <button onClick={() => setPeople([])}>Clear all</button>
            </section>
        </main>
    )
}
