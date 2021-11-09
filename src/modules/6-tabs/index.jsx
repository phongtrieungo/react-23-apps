import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './tabs.style.css';

const url = 'https://course-api.com/react-tabs-project'

export const TabsModule = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setJobs(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return (<section className="section loading">
            <h1>loading...</h1>
        </section>)
    }

    const { company, dates, duties, title } = jobs[value];

    return (
        <section className="section">

            <div className="title">
                <h2>Experiences</h2>
                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {
                        jobs.map((job, index) => {
                            return(
                                <button key={index} onClick={() => setValue(index)} className={`job-btn ${value === index && 'active-btn'}`}>
                                    {job.company}
                                </button>
                            )
                        })
                    }
                </div>
                {/* jon info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>

                    {
                        duties.map((duty, index) => {
                            return(
                                <div key={index} className="job-desc">
                                    <FaAngleDoubleRight className="job-icon" />
                                    <p>{duty}</p>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
        </section>
    )
}
