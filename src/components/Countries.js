import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../Countries.css";

function Countries(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="text-align-center">Loading...</div>;
  } else {
    return (
      <section className="grid">
        {items.map((item) => {
          const {numericCode, name, population, region, capital, flag} = item;

          return (
            <article className="countries-article" key={numericCode}>
                <Link to={`/countries/${name}`}><img className="flag" src={flag} alt={name} /></Link>
                <div className="details">
                  <h3 className="countryName">{name}</h3>
                  <h3>Population: <span>{population}</span></h3>
                  <h3>Region: <span className="region">{region}</span></h3>
                  <h3>Capital: <span>{capital}</span></h3>
                </div>
            </article>
          )
        })}
      </section>
    );
  }
}

export default Countries;
