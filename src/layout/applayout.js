import React, {useState, useEffect} from 'react';

import { AppContext } from '../appstate/appcontext';
import AppRoutes from './approutes';


function AppLayout(props) {
  const [step, setstep] = useState(0);
  const [steps, setsteps] = useState(4)


  useEffect(() => {

  },[steps])



  const _onsubmit = (form) =>{
    console.log(form);
    
  }

  return (
    <AppContext.Provider value={{_onsubmit,props}}>
      <AppRoutes />
    </AppContext.Provider>
  );
}

export default AppLayout;
