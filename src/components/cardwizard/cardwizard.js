import React, { useState, useEffect,useContext } from 'react';

import { AppContext } from '../../appstate/appcontext'
import styles from '../../assets/styles/styles.module.scss';


const CardWizard = ({ children, title }) => {
  
  const { step,setstep, _onsubmit } = useContext(AppContext)

  // I could have used children prop directly, but i used React.Children.toArray to 
  // make the code a lil scary
  const [activatedstep, setactivatedstep] = useState(React.Children.toArray(children)[step])
 
  useEffect(() => {
    setactivatedstep(React.Children.toArray(children)[step])
  },[step,children])
  
  const prevstep = () => {
    setstep((prevState) => Math.max(prevState - 1,0))
  }
  const nextstep = (e) => {
    _onsubmit(e)
    console.log(activatedstep);
    
    setstep((prevState) => Math.min(prevState + 1,children.length - 1))
  }

  const finish = () => {
    console.log(activatedstep);
    
  }

  

  return(
      <div className={styles.card}>
          <div className={styles.cardtitle}>
            <i className="fas fa-life-ring"></i>
            { title }
          </div>
          <div className={styles.cardbody}>
            { activatedstep }
          </div>
          {/* <div className={styles.footer}>
            { !!step && <button className={styles.btnprimary} onClick={() => prevstep()}>Previous</button>}
            { step === children.length - 1 ?             
                <button className={styles.btnprimary} onClick={() => finish()}>Finish</button>
              : <button className={styles.btnprimary} onClick={(e) => nextstep(e)}>Next</button>
            } 
          </div> */}
      </div>
  )
}


export default CardWizard;