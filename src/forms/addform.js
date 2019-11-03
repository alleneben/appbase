import React, { useState, useContext } from 'react';

import { AppContext } from '../appstate/appcontext'

import { Field, Card } from '../components'
import styles from '../assets/styles/styles.module.scss';

let form;
const AddForm = ({ fields }) => {
    const [val, setval] = useState({fields})
    const { _onsubmit } = useContext(AppContext)

    

    const _onchange = (e,id) => {
        setval({...val,[e.currentTarget.id]:e.target.value})
    }
    const onsubmit = () => {
        _onsubmit(form)
    }

    const buildfield = (lbl,id,typ,plh,ftp,cbd,val,req) => {

        return <Field lbl={lbl} id={id} typ={typ} plh={plh} ftp={ftp} cbd={cbd} onchange={(e) => _onchange(e)} val={val} required={req}/>
    }

    const buildFormUI = () => {
        const snm = buildfield('Surname','snm','text','Mensah','input','',val.snm?'h':'k',true);
        const fnm = buildfield('Firstname','fnm','text','Allen','input','',val.fnm,true);
        const dob = buildfield('Date of Birth','dob','date','2000-01-20','input','',val.dob,true);
        const sex = buildfield('Gender','sex','','Female','select','',val.sex,true);
        const tel = buildfield('Phone','tel','text','+23334000000','input','',val.tel,true);
        const mob = buildfield('Mobile','mob','text','+23334000000','input','',val.mob,true);
        const eml = buildfield('Email','eml','email','alleneben@gmail.com','text','',val.eml?'h':'k',true);
        const mst = buildfield('Marital Status','mst','','Single','select','',val.mst,true);
        const coi = buildfield('Nationality','coi','','Ghanaian','select','',val.coi,true);
        const had = buildfield('Postal Address','had','text','','area','',val.had,true);
        const pfi = buildfield('Profession','pfi','','','select','',val.pos,true);
        const emp = buildfield('Place of Work/Name of Employer','emp','text','','input','',val.emp,true);
        const grp = buildfield('Group','grp','','','select','',val.grp,true);

        const res = buildfield('Residence','res','text','Mampongten','input','',val.res,true);
        const lnm = buildfield('Nearest Landmark','lnm','text','Behind COP Church','area','',val.lnm,true);
        const htn = buildfield('Hometown','htn','text','Mampongten','input','',val.htn,true);
        const rei = buildfield('Group','rei','','','select','',val.rei,true);
        const fan = buildfield('Fathers Name','fan','text','Mr Daniels','input','',val.fan,true);
        const fad = buildfield('Life Status','fad','','','select','',val.fad,true);
        const man = buildfield('Mothers Name','man','text','Mampongten','input','',val.man,true);
        const mad = buildfield('Life Status','mad','','','select','',val.mad,true);
        const bbi = buildfield('Baptism by Immersion','bbi','','','select','',val.bbi,true);
        const bdt = buildfield('Date of Baptism','bdt','date','2000-01-20','input','',val.bdt,true);
        const bch = buildfield('Church you were Baptized','bch','text','Pensa','input','',val.bch,true);
        const pch = buildfield('Previous Church','pch','text','Pensa','input','',val.pch,true);
        const bbs = buildfield('Baptized by Holy Spirit','bbs','','','select','',val.bbs,true);

        const btn = <button className={styles.btnprimary} onClick={(e) => onsubmit()}>Save</button>
        
        let formUi = <Card title='Member Form' footer={btn} className="test">
                        <fieldset>
                            <legend>Personal Details 1</legend>
                            {snm}{fnm}{dob}{sex}{tel}{mob}{eml}
                        </fieldset>
                        <fieldset>
                            <legend>Personal Details 2</legend>
                            {mst}{coi}{had}{pfi}{emp}{grp}
                        </fieldset>
                        <fieldset>
                            <legend>Personal Details 3</legend>
                            {res}{lnm}{htn}{rei}{fan}{fad}{man}
                        </fieldset>
                        <fieldset>
                            <legend>Personal Details 4</legend>
                            {man}{mad}{bbi}{bdt}{bch}{pch}{bbs}
                        </fieldset>
                    </Card>

        return formUi;
     }


    return (
        <>
            { form= buildFormUI() }
        </>
    )
}

export default AddForm;