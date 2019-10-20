import React from 'react';

import styles from './assets/styles/styles.module.scss';


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.navline}></div>
      <nav className={styles.nav}>
        <h1>logo</h1>
        <ul>
          <li>Dashboard</li>
          <li>New Member</li>
          <li>Set up</li>
          <li>Finance</li>
          <li>Reports</li>
        </ul>
      </nav>

      <div className={styles.main}>
        <div className={styles.sidemenu}>
          hdh
        </div>
        <div className={styles.content}>
          
          <div className={styles.card}>
            content
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
