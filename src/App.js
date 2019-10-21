import React from 'react';

import styles from './assets/styles/styles.module.scss';


function App() {
  return (
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
          
          <div className={styles.card}>
            DELCINE SALVAGE
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
