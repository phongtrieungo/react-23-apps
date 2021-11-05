import React, { useEffect, useState } from "react";
import { TourList } from "./TourList";
import "./tour.style.css";

const url = "https://course-api.com/react-tours-project";

export const ToursModule = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  const removedTour = (id) => {
    const tourInCart = tours.filter((t) => t.id !== id);
    setTours(tourInCart);
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return <main>Loading...</main>;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTour()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <TourList tours={tours} removedTour={removedTour} />
    </main>
  );
};
