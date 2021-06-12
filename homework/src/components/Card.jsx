import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';
export default function Card ({min, max, name, img, onClose, id}) {
//  <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
    return (
      <div className="cardAll">
         <button className='cardButton' onClick={onClose}>X</button>
        <div className="cardBody">
          <Link to={`/city/${id}`}>
            <h5 className="cardTitle">{name}</h5>
          </Link>
          <div className="CardTemp">
              <p className='CardMin'>Min</p>
              <p className='CardMinOne'>{min}°</p>
              <p className='CardMax'>Max</p>
              <p className='CardMaxOne'>{max}°</p>
              </div>
              <img className="cardWeatherIcon" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
        </div>
      </div>
    );
};
