import React , { useState , useEffect } from 'react';

//styles 
import styles from "./ItemBarElement.module.scss"

const ItemBarElement = ({ title , icon , FilterItems , value }) => {

    const [ opacity , setOpacity ] = useState(0.5) 

    useEffect( () => {
        if( value === title){
            setOpacity( 1 )
        } else{
            setOpacity( 0.5)
        }
         
    } , [ title , value ] )

    return (
        <div onClick={ () => FilterItems( title ) } className={ styles.itemBarElement } > 
            <img src={ icon } alt={ title } className={ styles.icon } style={{ opacity: opacity }} />
            <h5 className={ styles.title } >{ title }</h5>
           
        </div>
    );
};

export default ItemBarElement;