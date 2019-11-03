import React from 'react';

import { TopNav, SideNav, Footer } from '../components'
import MainRoutes from './mainroutes';


const MainLayout = (props) => {

    return(
        
        <div className='grid-container'>
            
            <TopNav />
            
            <main className='main'>
                <SideNav />
                <div className="routes">
                    <MainRoutes />
                </div>
            </main>
            <Footer />
        </div>
        
        
    )
}

export default MainLayout;