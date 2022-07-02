import React from 'react';

//style
import styles from "./Banner.module.scss"

//IMG
import mobile from "../../../imgs/mockup-phone.webp"

//Icon 
import { IoArrowDownSharp } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { IoLogoPwa } from "react-icons/io5";


const Banner = () => {
    return (
        <div className={ styles.Banner } >
            <div className={ styles.Bannerinfo } >
                <h1>تپسی</h1>
                <h2>اپلیکیشن درخواست خودرو و پیک</h2>
                <div className={ styles.buttons } >
                    <a href="#" className={ styles.buttonUP }><IoArrowDownSharp className={ styles.icon } />دانلود اپلیکیشن مسافران</a>
                    <a href="#" className={ styles.buttonUP }><IoLogoPwa className={ styles.icon } />دانلود اپلیکیشن مسافران</a>
                    <a href="#" className={ styles.buttonDown }><IoArrowDownSharp className={ styles.icon } />دانلود اپلیکیشن رانندگان</a>
                    <a href="#" className={ styles.buttonDown }><IoCarSportSharp className={ styles.icon } />ثبت نام راننده</a>
                </div>
            </div>
            <img className={ styles.mobileIMG } src={ mobile } alt="mobile-tapsi" />
        </div>
    );
};

export default Banner;