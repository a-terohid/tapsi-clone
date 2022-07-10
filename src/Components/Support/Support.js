import React , { useState } from 'react';

//styles
import styles from "./Support.module.scss"

//components
import CreditReturnRequest from './CreditReturnRequest/CreditReturnRequest';
import RecordProblem_RaiseQuestion from './RecordProblem-RaiseQuestion/RecordProblem_RaiseQuestion';
import ContactUs from "./ContactUs/ContactUs";

const Support = () => {

    const [ component , setComponennt ] = useState("ContactUs")

    const clickHandler = ( name ) => {
        setComponennt( name )
    }

    return (
        <div style={{ background: "#fff" }} >
            <div className={ styles.support } >
                <div className={ styles.header }>
                    <h3 className={ component == "ContactUs" ? styles.title : null } onClick={ () => clickHandler( "ContactUs" ) } >تماس با ما</h3>
                    <h3 className={ component == "CreditReturnRequest" ? styles.title : null } onClick={ () => clickHandler( "CreditReturnRequest" ) } >درخواست بازگشت اعتبار</h3>
                    <h3 className={ component == "RecordProblem_RaiseQuestion" ? styles.title : null } onClick={ () => clickHandler( "RecordProblem_RaiseQuestion" ) } >ثبت مشکل یا طرح پرسش</h3>
                </div>
                { component == "ContactUs" ? <ContactUs className={ styles.component } /> : null }
                { component == "CreditReturnRequest" ? <CreditReturnRequest className={ styles.component } /> : null }
                { component == "RecordProblem_RaiseQuestion" ? <RecordProblem_RaiseQuestion className={ styles.component } /> : null }
            </div>
        </div>
    );
};

export default Support;