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
            <li><i className="fa fa-home"></i>Affiliates</li>
            <li><i className="fa fa-envelope"></i>hello</li>
            <li><i className="fa fa-truck"></i>hii</li>
            <li><i className="fa fa-tags"></i>hello</li>
            <li><i className="fa fa-users"></i>hello</li>
            <li><i className="fa fa-truck"></i>hii</li>
            <li><i className="fa fa-tags"></i>hello</li>
            <li><i className="fa fa-users"></i>hello</li>
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
