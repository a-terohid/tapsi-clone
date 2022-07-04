import React from 'react';

//styles
import styles from "./TapsiAdvantages.module.scss"

//img
import driver from "./driver.webp"

const TapsiAdvantages = () => {
    return (
        <div className={ styles.TapsiAdvantages } >
            <div className={ styles.div }>
                <h1 className={ styles.title }>مزایای تپسی برای رانندگان تاکسی اینترنتی</h1>
                <p className={ styles.info } >رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.</p>
                <div className={ styles.cuntainer } >
                    <h3 className={ styles.titleTwo }>کسب درآمد روزانه، پایدار و بدون محدودیت</h3>
                    <p className={ styles.info }>۱. امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز</p>
                    <p className={ styles.info }>۲. طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه به‌طور دوره‌ای</p>
                    <p className={ styles.info }>۳. نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی</p>
                </div>
                <div className={ styles.cuntainer } >
                    <h3 className={ styles.titleTwo }>تضمین امنیت و پشتیبانی رانندگان</h3>
                    <p className={ styles.info }>۱. پشتیبانی ۲۴ ساعته</p>
                    <p className={ styles.info }>۲. امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته تیم امنیت</p>
                </div>
                <div className={ styles.cuntainer } >
                    <h3 className={ styles.titleTwo }>واریز سهمیه بنزین ویژه رانندگان تپسی</h3>
                    <p className={ styles.info }>۱. نمایش میزان پیمایش ماهانه درون اپلیکیشن</p>
                    <p className={ styles.info }>۲. محاسبه‌ی مسافت طی شده تا مسافر در پیمایش</p>
                </div>
                <div className={ styles.cuntainer } >
                    <h3 className={ styles.titleTwo }>استفاده از مزایای<a className={ styles.Link } href='#' > باشگاه رانندگان تپسی</a></h3>
                    <p className={ styles.info }>۱. تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و...</p>
                    <p className={ styles.info }>۲. تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید اقساطی و ...</p>
                </div>
                <div className={ styles.Buttons }>
                    <a className={ styles.button} href="#" >ثبت نام راننده تاکسی آنلاین</a>
                    <a className={ styles.button} href="#" >دانلود برنامه تپسی راننده</a>
                </div>
            </div>
            <img src={ driver } className={ styles.driver } alt="مزایای تپسی برای رانندگان تاکسی اینترنتی" />
        </div>
    );
};

export default TapsiAdvantages;