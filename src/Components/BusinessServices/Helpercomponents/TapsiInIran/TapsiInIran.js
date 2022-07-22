import React from 'react';

//styles
import styles from "./TapsiInIran.module.scss"

import { cities } from "./cities.jsx"

const TapsiInIran = () => {
    return (
        <div className={ styles.TapsiInIran } >
            <div className={ styles.cities }>
                {
                    cities.map( (city) => <div className={ styles.city } id={ city.id } >
                                                <h2 className={ styles.FA }>{ city.FA }</h2>
                                                <h2 className={ styles.EN }>{ city.EN }</h2>
                                        </div>)
                }
            </div>
        </div>
    );
};

export default TapsiInIran;