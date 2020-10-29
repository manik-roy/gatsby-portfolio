import React, { useEffect } from "react"
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import Person from '../components/indexdata'

export default () => {
  useEffect(() => {
    document.title = "Manik Roy"
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pt-5 pb-3">
          <div className="image-container w-50 m-auto text-center">
            <div data-sal="zoom-in"
              data-sal-delay="400"
              data-sal-easing="ease">
              <img className="rounded-circle w-50 m-auto" id="imggg" src={Person.img} alt="manik roy" />
            </div>
          </div>
        </div>
        <div className="col-md-8 m-auto pt-2">
          <div className="text-container text-center">
            <h4 data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease" className={classes.name}>Hi, I am <span >{Person.name}</span></h4>
            <p data-sal="slide-left"
              data-sal-delay="600"
              data-sal-easing="ease" >{Person.description}</p>
          </div>
          <div className={`${classes.socialsIcons} pt-2`} data-sal="slide-top"
            data-sal-delay="700"
            data-sal-easing="ease" >
            <ul className="pl-0">
              <li>
                <a href="https://facebook.com/manikroy89" target="_blank" rel="noopener noreferrer">
                  <div> <FontAwesomeIcon icon={faFacebookF} /> </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/manik-roy" target="_blank" rel="noopener noreferrer">
                  <div> <FontAwesomeIcon icon={faGithub} /> </div>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/manik-roy" target="_blank" rel="noopener noreferrer">
                  <div>  <FontAwesomeIcon icon={faLinkedinIn} /> </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};