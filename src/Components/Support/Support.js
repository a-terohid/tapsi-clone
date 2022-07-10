import React from 'react';

//styles
import styles from "./Support.module.scss"

//components
import CreditReturnRequest from './CreditReturnRequest/CreditReturnRequest';
import RecordProblem_RaiseQuestion from './RecordProblem-RaiseQuestion/RecordProblem_RaiseQuestion';
import ContactUs from "./ContactUs/ContactUs";

const Support = () => {
    return (
        <div className={ styles.support } >
            <ContactUs />
        </div>
    );
};

export default Support;