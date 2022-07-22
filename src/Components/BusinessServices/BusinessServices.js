import React from 'react';

//style
import styles from "./BusinessServices.module.scss"

//components
import Banner from './Helpercomponents/Banner';
import TapsiInIran from "./Helpercomponents/TapsiInIran/TapsiInIran"
import Section from './Helpercomponents/Section/Section';
import MoreInfo from './Helpercomponents/MoreInfo/MoreInfo';

const BusinessServices = () => {
    return (
        <div className={ styles.BusinessServices } >
            <Banner/>
            <TapsiInIran/>
            <Section />
            <MoreInfo />
        </div>
    );
};

export default BusinessServices;