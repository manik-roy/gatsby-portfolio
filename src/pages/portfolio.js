import React, { useEffect } from 'react';
import './card.css'
import Typist from 'react-typist';
import PortfolioItem from '../components/PortfolioItem';
import Person from '../components/indexdata'

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio- Manik"
  }, []);
  return (
    <div className="container pt-2 portfolio-area">
      <div className="text-center">
        <Typist cursor={{ show: false }}> <h2 className="text-center  d-inline px-5"> <em>Portfolio Items</em></h2></Typist>
      </div>
      <div className="row mt-5 pt-2 d-flex justify-content-center">
        {Person.portfolios.map(item => <PortfolioItem key={item.link} item={item} />)}
      </div>
    </div>
  );
};

export default Portfolio;