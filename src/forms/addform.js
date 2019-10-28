import React, { useState, useContext } from 'react';

import { AppContext } from '../appstate/appcontext'

import { Field } from '../components'
import styles from '../assets/styles/styles.module.scss';

let form;
const AddForm = ({ fields }) => {
    const [val, setval] = useState(fields)
    const { step,steps,_onsubmit,_nextstep,_prevstep } = useContext(AppContext)

    

    const _onchange = (e,id) => {
        setval({...val,[e.currentTarget.id]:e.target.value})
    }
    const onsubmit = (e,btn) => {
        e.preventDefault()

        if(btn === 'next'){
            _nextstep(form)
        } else if(btn === 'prev'){
            _prevstep(form)
        } else {
            _onsubmit(form)
        }
    }

    const buildFormUI = () => {
       let buildfields = fields.map((fld, key) => {
           return(
               <Field
                    key={'0 '+key} 
                    lbl={fld.lbl} 
                    cnl={fld.cnl} 
                    cni={fld.cni} 
                    id={fld.id} 
                    typ={fld.typ}
                    plh={fld.plh} 
                    ftp={fld.ftp}
                    cbd={fld.cbd}
                    onchange={(e) => _onchange(e,fld.id)}
                    val={val[fld.id]}
                    required={fld.required}
               />
           )
       })

       let formUi = <form>
                        {buildfields}
                        <div className={styles.footer}>
                            {!!step && <button className={styles.btnprimary} onClick={(e) => onsubmit(e,'prev')}>Previous</button>}
                            {step === steps-1 ? 
                                <button className={styles.btnprimary} onClick={(e) => onsubmit(e,'fini')}>Finish</button> : 
                                <button className={styles.btnprimary} onClick={(e) => onsubmit(e,'next')}>Next</button>
                            }
                        </div>
                    </form>

       return formUi;
    }


    return (
        <>
            { form= buildFormUI() }
        </>
    )
}

export default AddForm;