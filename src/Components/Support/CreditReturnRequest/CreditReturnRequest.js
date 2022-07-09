import React , { useState , useEffect } from 'react';

//validate 
import { Validate } from "./Validate";

//style 
import styles from "./CreditReturnRequest.module.scss"
import { click } from '@testing-library/user-event/dist/click';

const CreditReturnRequest = () => {

    //state
    const [ data , setData ] = useState({
        NameLastname: "",
        PhoneNumber: "",
        Email:"",
        PersonalID: "",
        CardNumber: "",
        amount: "",
    })
    const [ errors , setErrors ] = useState({})
    const [ tuch , setTuch ] = useState({})

    //Functions
    useEffect ( () => {
        setErrors( Validate( data ) )
    } , [ data , tuch ] )

    const changeHandler = ( event ) => {
        const value = event.target.value;
        const Name = event.target.name
        setData({ ...data , [ Name ] : value})
    }

    const focusHandler = ( event ) => {
        const Name = event.target.name
        setTuch( { ...tuch , [ Name ] : true } )
    }

    const clickHandler = () => {
        setData({
            NameLastname: "",
            PhoneNumber: "",
            Email:"",
            PersonalID: "",
            CardNumber: "",
            amount: "",
        })
        setErrors({})
        setTuch({})
    }

    // destructuring
    const { NameLastname , PhoneNumber , Email , PersonalID , CardNumber , amount } = data

    return (
        <div className={ styles.CreditReturnRequest } >
            <div className={ styles.input }>
                <input
                    type="text"
                    name="NameLastname" 
                    value={ NameLastname }
                    placeholder="نام و نام خانوادگی" 
                    onChange={ changeHandler }
                    onFocus={ focusHandler }  
                />
                { errors.NameLastname && tuch.NameLastname && <p>{ errors.NameLastname }</p> }
            </div>
            <div className={ styles.input } >
                <input
                    type="text"
                    name="PhoneNumber" 
                    value={ PhoneNumber }
                    placeholder="شماره تماس" 
                    onChange={ changeHandler } 
                    onFocus={ focusHandler } 
                />
                { errors.PhoneNumber && tuch.PhoneNumber && <p>{ errors.PhoneNumber }</p> }
            </div>
            <div className={ styles.input } >
                <input
                    type="Email"
                    name="Email" 
                    value={ Email } 
                    placeholder="ایمیل"
                    onChange={ changeHandler } 
                    onFocus={ focusHandler } 
                />
                { errors.Email && tuch.Email && <p>{ errors.Email }</p> }
            </div>
            <div className={ styles.input } >
                <input
                    type="text"
                    name="PersonalID" 
                    value={ PersonalID } 
                    placeholder="شماره ملی"
                    onChange={ changeHandler } 
                    onFocus={ focusHandler } 
                />
                { errors.PersonalID && tuch.PersonalID && <p>{ errors.PersonalID }</p> }
            </div>
            <div className={ styles.input } >
                <input
                    type="text"
                    name="CardNumber" 
                    value={ CardNumber } 
                    placeholder="شماره کارت"
                    onChange={ changeHandler } 
                    onFocus={ focusHandler } 
                />
                { errors.CardNumber && tuch.CardNumber && <p>{ errors.CardNumber }</p> }
            </div>
            <div className={ styles.input } >
                <input
                    type="text"
                    name="amount" 
                    value={ amount } 
                    placeholder="مبلغ به تومان"
                    onChange={ changeHandler } 
                    onFocus={ focusHandler } 
                />
                { errors.amount && tuch.amount && <p>{ errors.amount }</p> }
            </div>
            <button className={ styles.button} onClick={ clickHandler }  >ارسال</button>
        </div>
    );
};

export default CreditReturnRequest;