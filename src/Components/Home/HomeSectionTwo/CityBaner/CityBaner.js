import React from 'react';

//styles
import styles from "./CityBaner.module.scss"

const CityBaner = () => {
    return (
        <div className={ styles.CityBaner } >
           <div className={ styles.countainer } >
                <h3 className={ styles.title } >بسته امنیت سفر</h3>
                <p className={ styles.info } >امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی</p>
           </div>
           <div className={ styles.wall } ></div>
           <div className={ styles.countainer } >
                <h3 className={ styles.title } >درخواست تلفنی</h3>
                <p className={ styles.info } >امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰</p>
           </div>
           <div className={ styles.wall } ></div>
           <div className={ styles.countainer } >
                <h3 className={ styles.title } >دسترس‌پذیری برای توان‌یابان</h3>
                <p className={ styles.info } >امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر کمیسیون از سفر مسافران ویلچردار</p>
           </div>
           <div className={ styles.wall } ></div>
           <div className={ styles.countainer } >
                <h3 className={ styles.title } >امکانات هوشمند</h3>
                <p className={ styles.info } >سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و پیشنهادهای ویژه شما</p>
           </div>
        </div>
    );
};

export default CityBaner;