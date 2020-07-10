import React, { useEffect } from 'react';

const Achievement = () => {
  useEffect(() => {
    document.title = "Achievement"
  }, []);

  return (
    <div className="container" >
      <div className="row ">
        <div className="col">
          <img className="w-100" src="https://media-exp1.licdn.com/dms/image/C5622AQFwXHNeUbJkKg/feedshare-shrink_2048_1536/0?e=1597276800&v=beta&t=lUEUF3iXyfOGmzXBO7gUX2fSuMADdYXiVCC3JoJkb78" alt="certificate manik roy" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
