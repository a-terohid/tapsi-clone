import React , { useState , useEffect } from 'react';

//components
import ItemBar from './ItemBar';

//Data
import { Data } from "./Data";

//styles
import styles from "./Tapsi_Services.module.scss"

const Tapsi_Services = () => {

    const [ items , setItems ] = useState( Data )


    //filter function
    const FilterItems = ( title = "تپسی کلاسیک" ) => {
        const newItems = Data.filter( ( item ) => item.title === title )
        setItems( newItems )
        // console.log( items )
    }
    

    return (
        <div className={styles.TapsiServices} >
            <h1 className={ styles.TapsiServicestitle } >سرویس‌های تپسی</h1>
            <ItemBar Data={ Data } FilterItems={ FilterItems } value={ items[0].title } />
            <div className={ styles.TapsiServicesInfo} >
                <div  >
                <p className={ styles.InfoTitle }>{ items[0].title }</p>
                <p className={ styles.InfoText } >{ items[0].info }</p>
                </div>
                <img className={ styles.Infoimg } src={ items[0].img } alt={ items[0].title } />
            </div>
        </div>
    );
};

export default Tapsi_Services;