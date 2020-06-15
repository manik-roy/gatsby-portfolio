import React, { useEffect } from 'react';
import classes from './blog.module.css'
import Person from '../components/indexdata'

const Blog = () => {
  useEffect(() => {
    document.title = "Blog- Manik"
  }, []);

  return (
    <div className="container">
      {Person.blogs.map((item, i) => {
        return (
          <div className="row" key={i + item.title.split(' ').join('')} >
            <div className="col-md-6 m-auto">
              <div className={`${classes.post} shadow card my-3 p-3 text-capitalize`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" >
                  <h2> {item.title} </h2>
                  <p>{item.description.slice(55)} more ......</p>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Blog;