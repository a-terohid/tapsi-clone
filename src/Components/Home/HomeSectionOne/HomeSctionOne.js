import React from 'react';

//imgs
import macbook from "./img/macbook.webp";
import i_mac from "./img/i-mac.webp";

//icon
import { AiOutlineLeft } from "react-icons/ai";

//styles 
import styles from "./HomeSctionOne.module.scss"

const HomeSctionOne = () => {
    return (
        <div className={ styles.HomeSctionOne } >
            <div className={ styles.TapsiServices } >
                <img className={ styles.SectionOneImg } src={ i_mac } alt="خدمات تپسی ویژه کسب‌وکارها" />
                <div className={ styles.cuntainer }  >
                    <h1 className={ styles.title } >خدمات تپسی ویژه کسب‌وکارها</h1>
                    <p className={ styles.Info } >پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.</p>
                    <p className={ styles.Link } >اطلاعات بیشتر سرویس سازمانی<AiOutlineLeft/></p>
                    <a className={ styles.Button } >ورود و ثبت نام پنل سازمانی</a>
                </div>
            </div>
            <div className={ styles.BuyCode } >
                <img className={ styles.SectionOneImg } src={ macbook } alt={ "خرید کد اعتبار تپسی" } />
                <div className={ styles.cuntainer } >
                    <h1 className={ styles.title } >خرید کد اعتبار تپسی</h1>
                    <p className={ styles.Info } >کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند. این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را دارند.</p>
                    <a className={ styles.Button } >خرید کد اعتبار و تخفیف</a>
                </div>
            </div>
        </div>
    );
};

export default HomeSctionOne;