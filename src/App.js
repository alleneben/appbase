import React, {useState, useEffect} from 'react';

import { AppContext } from './appstate/appcontext';
 
import { CardWizard,Field } from './components';
import { AddForm } from './forms';
import styles from './assets/styles/styles.module.scss';


function App() {
  const [step, setstep] = useState(0);
  const [steps, setsteps] = useState(4)

  useEffect(() => {

  },[steps])



  const _onsubmit = () =>{
    
  }
  const _prevstep = (form) => {
    setstep((prevState) => Math.max(prevState - 1,0))
  }
  const _nextstep = (form) => {   
    setstep((prevState) => Math.min(prevState + 1,steps - 1))
  }

  return (
    <AppContext.Provider value={{step,steps,setstep,_prevstep,_nextstep,_onsubmit}}>      
      <div className={styles.app}>
        <div className={styles.navline}></div>
        <nav className={styles.nav}>
          <h1>logo</h1>
          <ul>
            <li><i className="fa fa-tachometer-alt"></i> Dashboard</li>
            <li><i className="fa fa-plus"></i> New Member</li>
            <li><i className="fa fa-cogs"></i> Set up</li>
            <li><i className="fa fa-money-bill-alt"></i> Finance</li>
            <li><i className="fa fa-chart-line"></i> Reports</li>
          </ul>
        </nav>

        <div className={styles.main}>
          <div className={styles.sidemenu}>
            <ul>
              <li><i className="fa fa-home"></i><span>Affiliates</span></li>
              <li><i className="far fa-envelope"></i><span>Email Servers</span></li>
              <li><i className="fa fa-truck"></i><span>Fulfillment</span></li>
              <li><i className="fa fa-tags"></i><span>Gateways</span></li>
              <li><i className="fa fa-users"></i><span>Integrations</span></li>
              <li><i className="fa fa-truck"></i><span>Merchants</span></li>
              <li><i className="fa fa-tags"></i><span>Products</span></li>
            </ul>
            <p>TOOLS</p>
            <ul>
              <li className={styles.iso}><i className="fas fa-life-ring"></i>Decline Salvage</li>
            </ul>
          </div>
          <div className={styles.content}>
            <CardWizard title="DELCINE SALVAGE" >
              <AddForm
                fields={[
                  {lbl:'Home Aress',cnl:'', cni:'',id:'had',typ:'text',val:'allen',plh:'John',ftp:"input"},
                  {lbl:'Postal Address',cnl:'',cni:'',id:'pad',typ:'text',val:'',plh:'Mensah',ftp:"input"},
                  {lbl:'Hometown',cnl:'',cni:'',id:'htn',typ:'number',val:'',plh:'77777',ftp:"input"},
                  {lbl:'Region',cnl:'',cni:'',id:'rgi',typ:'text',val:'',plh:'77777',ftp:"select",cbd:['New Mexico','New York', 'Bay Area']},
                  {lbl:'Region',cnl:'',cni:'',id:'rgi',typ:'text',val:'',plh:'77777',ftp:"select",cbd:['New Mexico','New York', 'Bay Area']}
                ]}
              />
              <AddForm
                fields={[
                  {lbl:'Home Address',cnl:'', cni:'',id:'bnn',typ:'text',val:'',plh:'John',ftp:"input"},
                ]}
              />
              <AddForm
                fields={[
                  {lbl:'Home Aress',cnl:'', cni:'',id:'had',typ:'text',val:'allen',plh:'John',ftp:"input"},
                  {lbl:'Postal Address',cnl:'',cni:'',id:'pad',typ:'text',val:'',plh:'Mensah',ftp:"input"},
                  {lbl:'Hometown',cnl:'',cni:'',id:'htn',typ:'number',val:'',plh:'77777',ftp:"input"},
                  {lbl:'Region',cnl:'',cni:'',id:'rgi',typ:'text',val:'',plh:'77777',ftp:"select",cbd:['New Mexico','New York', 'Bay Area']},
                  {lbl:'Region',cnl:'',cni:'',id:'rgi',typ:'text',val:'',plh:'77777',ftp:"select",cbd:['New Mexico','New York', 'Bay Area']}
                ]}
              />
              <AddForm
                fields={[
                  {lbl:'Home Aress',cnl:'', cni:'',id:'had',typ:'text',val:'allen',plh:'John',ftp:"input"},
                  {lbl:'Postal Address',cnl:'',cni:'',id:'pad',typ:'text',val:'',plh:'Mensah',ftp:"input"},
                  {lbl:'Hometown',cnl:'',cni:'',id:'htn',typ:'number',val:'',plh:'77777',ftp:"input"},
                  {lbl:'Region',cnl:'',cni:'',id:'rgi',typ:'text',val:'',plh:'77777',ftp:"select",cbd:['New Mexico','New York', 'Bay Area']},
                  {lbl:'Region',cnl:'',cni:'',id:'rgi',typ:'text',val:'',plh:'77777',ftp:"select",cbd:['New Mexico','New York', 'Bay Area']}
                ]}
              />
            </CardWizard>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
