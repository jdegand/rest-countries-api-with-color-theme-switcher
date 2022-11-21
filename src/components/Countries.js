import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Countries.css";

function Countries() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="text-align-center">Loading...</div>;
  } else {
    return (
      <section className="grid">
        {items.map((item) => {
          const { name, population, region, capital, flags } = item;

          return (
            <article className="countries-article" key={name.official}>
              <Link to={`/countries/${name.common}`}>
                <img className="flag" src={flags.svg} alt="" />
              </Link>
              <div className="details">
                <h3 className="countryName">{name.common}</h3>
                <h3>
                  Population: <span>{population}</span>
                </h3>
                <h3>
                  Region: <span className="region">{region}</span>
                </h3>
                <h3>
                  Capital: <span>{capital}</span>
                </h3>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}

export default Countries;
