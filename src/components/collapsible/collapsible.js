import React, { useState } from 'react'


const Collapsible = ({ title, children }) => {
    const [open, setopen] = useState(false)
    

    const toggle = () => {
        
        setopen((prevState) => !prevState)        
    }

    return(
        <div className='collapsible'>
            <div onClick={(e) => toggle(e)} className='collapsibleheader'>{title}</div>
            { <div className={open ? null : 'bodyopened'}>{ children }</div>  }
        </div>
    )
}

export default Collapsible;