import React from 'react';

//styles
import styles from "./Support.module.scss"

//components
import CreditReturnRequest from './CreditReturnRequest/CreditReturnRequest';

const Support = () => {
    return (
        <div className={ styles.support } >
            <CreditReturnRequest />
        </div>
    );
};

export default Support;