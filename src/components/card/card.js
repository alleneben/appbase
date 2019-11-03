import React from 'react';


const Card = ({ children, title, footer }) => {
  
 

  return(
      <div className='card'>
          <div className='card-title'>
            <i className="fas fa-life-ring"></i>
            { title }
          </div>
          <div className='card-body'>
            { children }
          </div>
          <div className='card-footer'>
            { footer }
          </div>
      </div>
  )
}


export default Card;