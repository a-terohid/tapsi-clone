import React , { useState } from 'react';

//styles
import styles from "./MoreInfo.module.scss"

const MoreInfo = () => {

    //ICONS
    const TElicon = "https://tapsi.ir/images/icon/old-tel.svg";
    const Email = "https://tapsi.ir/images/icon/old-email.svg";

    //data
    const [ data , setData ] = useState({
        FullName:"",
        OrganizationName:"",
        number:"",
    })


    const changeHandler = ( event ) => {
        const value = event.target.value;
        const Name = event.target.name
        setData({ ...data , [ Name ] : value})
    }

    const clickHandler = () => {
        setData({
            FullName:"",
            OrganizationName:"",
            number:"",
        })
    }

    const { FullName , OrganizationName , number } = data

    return (
        <div className={ styles.MoreInfo } >
            <h2 className={ styles.Title }>دریافت اطلاعات بیشتر</h2>
            <div className={ styles.div }>
                <div className={ styles.text }>
                    <p className={ styles.info }>برای دریافت اطلاعات بیشتر، مشخصات خود و سازمان خود را در این قسمت وارد کنید. همکاران ما در اولین زمان با شما تماس خواهند گرفت.</p>
                    <p className={ styles.info }>همچنین شما می‌توانید از راه‌های زیر با ما در ارتباط باشید:</p>
                    <div className={ styles.links }>
                        <div className={ styles.link }>
                            <h3 className={ styles.linkName } ><img src={ TElicon } className={ styles.icon } />شماره تماس:</h3>
                            <h4 className={ styles.linkNumber }>021 - 41630333</h4>
                        </div>
                        <div className={ styles.link }>
                            <h3 className={ styles.linkName } ><img src={ Email } className={ styles.icon } />پست الکترونیک:</h3>
                            <h4 className={ styles.linkNumber }>corporate@tapsi.cab</h4>
                        </div>
                    </div>
                </div>
                <div className={ styles.IPUTS }>
                    <div className={ styles.input } >
                        <label for="FullName">نام و نام خانوادگی:</label>
                        <input 
                            type="text" 
                            id="Fname" 
                            name="FullName"
                            value={ FullName }
                            onChange={ changeHandler } 
                        />
                            
                    </div>
                    <div className={ styles.input } >
                        <label for="OrganizationName">نام سازمان:</label>
                        <input 
                            type="text" 
                            id="Oname" 
                            name="OrganizationName"
                            value={ OrganizationName }
                            onChange={ changeHandler } 
                        />
                            
                    </div>
                    <div className={ styles.input } >
                        <label for="number">شماره تماس:</label>
                        <input 
                            type="text" 
                            id="number"
                            name="number"
                            value={ number } 
                            onChange={ changeHandler }
                        />    
                    </div>
                    <div className={ styles.Button }>
                        <button onClick={ clickHandler } className={ styles.button } >ارسال مشخصات</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default MoreInfo;