import React, { useContext } from 'react';

import { AppContext } from '../../appstate/appcontext';


const TopNav = () => {
    const { props } = useContext(AppContext);

    const route = (url) => {
      props.history.push(url)
    }
    return(
        <nav className='topnav'>
          <h1>logo</h1>
          <ul>
            <li onClick={() => route('/searchpage')}><i className="fa fa-tachometer-alt"></i> Dashboard</li>
            <li onClick={() => route('/member')}><i className="fa fa-plus"></i> New Member</li>
            <li><i className="fa fa-cogs"></i> Set up</li>
            <li><i className="fa fa-money-bill-alt"></i> Finance</li>
            <li><i className="fa fa-chart-line"></i> Reports</li>
          </ul>
        </nav>
    )
}

export default TopNav;