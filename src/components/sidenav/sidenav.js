import React from 'react';


import styles from '../../assets/styles/styles.module.scss';



const SideNav = () => {

    return (
        <aside className={styles.sidenav}>
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
        </aside>
    )
} 

export default SideNav;