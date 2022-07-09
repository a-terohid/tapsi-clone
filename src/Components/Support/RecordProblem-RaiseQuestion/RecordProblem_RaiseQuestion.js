import React , { useState , useEffect } from 'react';

//validate 
import { Validate } from "./Validate";

//styles
import styles from "./RecordProblem_RaiseQuestion.module.scss"

const RecordProblem_RaiseQuestion = () => {
    //state
    const [ data , setData ] = useState({
        NameLastname: "",
        PhoneNumber: "",
        Email:"",
        Message: "",
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
            Message: "",
        })
        setErrors({})
        setTuch({})
    }

    // destructuring
    const { NameLastname , PhoneNumber , Email , Message } = data
    
    return (
        <div className={ styles.RecordProblem_RaiseQuestion } >
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
                <textarea
                    name="Message" 
                    value={ Message }
                    rows="3" 
                    placeholder="متن پیام"
                    onChange={ changeHandler } 
                    onFocus={ focusHandler } 
                />
                { errors.Message && tuch.Message && <p>{ errors.Message }</p> }
            </div>
            <button className={ styles.button} onClick={ clickHandler }  >ارسال</button>
        </div>
    );
};

export default RecordProblem_RaiseQuestion;