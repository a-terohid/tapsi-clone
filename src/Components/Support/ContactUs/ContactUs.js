import React , { useState , useEffect } from 'react';

//style
import styles from "./ContactUs.module.scss"

//data
import { data } from "./Data.jsx"

//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const ContactUs = () => {

    const [ value , setvalue ] = useState("تهران")
    const [ CITY , setCITY ] = useState(data)

    const selectHandler = (  ) => {
       const select = document.getElementById('select')
       const city = select.options[select.selectedIndex].text;
       setvalue( city )
    }

    useEffect( () => {
        setCITY( data.find( x => x.city == value) )
        console.log( CITY )
    } , [ value ] )

    return (
        <div className={ styles.ContactUs }>
            <div className={ styles.mapDiv }>
                <select className={ styles.select }  id="select" onChange={ selectHandler } >
                    {
                        data.map( city => <option 
                                            value={ city.city }
                                            id={ city.id }
                                            selected={ city.selected }
                                            >{ city.city }</option> )
                    }
                </select>
                { CITY.location ? <a className={ styles.location } href={ CITY.location } target="_blank" ><img src={ CITY.img } alt={ CITY.city } /></a> : null }
                { CITY.tel ? <p className={ styles.CityInfo } >شماره تماس:<span>{ CITY.tel }</span></p> : null }
                { CITY.address ? <p className={ styles.CityInfo } >آدرس:<span>{ CITY.address }</span></p> : null }
                { CITY.code ? <p className={ styles.CityInfo } >کد پستی:<span>{ CITY.code }</span></p> : null }
            </div>
            <div className={ styles.info }>
                <div className={ styles.numbers }>
                    <div className={ styles.number }>
                        <h3><BsTelephone className={ styles.numbersIcons } />شماره تماس با پشتیبانی:</h3>
                        <a href="tel: 1630" >1630</a>
                    </div>
                    <div className={ styles.number }>
                        <h3><AiOutlinePrinter className={ styles.numbersIcons } />شماره فکس:</h3>
                        <a href="http://fax:+982141630680" >+98 (21) 41630680</a>
                    </div>
                    <div className={ styles.number }>
                        <h3><MdOutlineMail className={ styles.numbersIcons } />پست الکترونیکی:</h3>
                        <a href="mailto:info@tapsi.cab" >info@tapsi.cab</a>
                    </div>
                </div>
                <div className={ styles.icons }>
                    <a href="https://www.facebook.com/Tapsi.ir/" target="_blank" ><FaFacebookF className={ styles.icon } /></a>
                    <a href="https://www.instagram.com/tapsi_ir/" target="_blank" ><FaInstagram className={ styles.icon } /></a>
                    <a href="https://twitter.com/TAPSI_ir" target="_blank" ><FaTwitter className={ styles.icon } /></a>
                    <a href="https://www.linkedin.com/company/tap30" target="_blank" ><FaLinkedinIn className={ styles.icon } /></a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;