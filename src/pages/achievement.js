import React, { useEffect } from 'react';

const Achievement = () => {
  useEffect(() => {
    document.title = "Achievement"
  }, []);

  return (
    <div className="container" >
      <div className="row ">
        <div className="col">
          <img className="w-100 img-fluid" style={{
            border: '10px solid #fed115',
            borderRadius: '15px'
          }} src="https://i.ibb.co/xXHpLJ7/image.jpg" alt="certificate manik roy" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
