import React from 'react';

const PortfolioItem = ({ item }) => {
  const { img, title, description, link, git } = item;
  return (
    <div className="col-xl-4 col-lg-6 mb-4">
      <div className="carditem text-center"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        style={{ color: '#000' }}
      >
        <div className="card">
          <img className="card-img-top rounded shadow pb-2" src={img} alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.slice(0, 95)}, More..</p>
          </div>
        </div>
        <div className="linkArea text-center d-flex align-items-center justify-content-between">
          <button className="px-5 rounded"><a href={link} target="_blank" rel="noopener noreferrer">Live</a></button>
          <button className="px-5 rounded"><a href={git} target="_blank" rel="noopener noreferrer">Github</a></button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;