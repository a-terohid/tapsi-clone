import React from 'react';

//styles
import styles from "./Section.module.scss"

//img 
import desktop from "./Screen Shot 1401-03-01 at 3.59.58 PM.webp"
import mobile from "./img2.webp"

//veido 
import veido from "./Corporate-Panel_How-to-Sign-Up.mp4"

const Section = () => {
    return (
        <div className={ styles.Section }>
           <h2 className={ styles.SectionTitle }>خدمات تپسی به شرکت ها و سازمان ها</h2>
           <div className={ styles.OrganizationPanel }>
                <div className={ styles.PanelText }>
                    <h2 className={ styles.title }>پنل سازمانی تپسی</h2>
                    <p className={ styles.Info }>پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست خودرو برای تعداد نامحدود از کارکنان، نظارت بر سفرها، دریافت صورتحساب خودکار و گزارش‌گیری آنلاین را برای شرکت‌ها و سازمان‌ها فراهم آورده است.</p>
                    <ul className={ styles.list }>
                        <li><div className={ styles.aquare } ></div>قابلیت درخواست چندین خودرو به صورت همزمان</li>
                        <li><div className={ styles.aquare } ></div>امکان انتخاب چند مقصد برای یک سفر</li>
                        <li><div className={ styles.aquare } ></div>امکان استفاده از تمامی سرویس های تپسی</li>
                        <li><div className={ styles.aquare } ></div>قابلیت مشاهده و دریافت گزارش سفرها</li>
                    </ul>
                    <div className={ styles.Buttons }>
                        <a className={ styles.Button } href="#">ثبت‌نام در پنل </a>
                        <a className={ styles.Button } href="#">ورود به پنل سازمانی</a>
                    </div>
                </div>
                <img className={ styles.IMG }  src={ desktop } alt="خدمات تپسی به شرکت ها و سازمان ها" />
           </div>
           <div className={ styles.travelCodes }>
            <img className={ styles.IMG }  src={ mobile } alt="کدهای سفر سازمانی تپسی" />
            <div className={ styles.codeText } >
                <h2 className={ styles.title } >کدهای سفر سازمانی تپسی</h2>
                <h2 className={ styles.title2 } >کد اعتبار</h2>
                <p className={ styles.Info }>کسب و کارها و سازمان ها می‌توانند به تعداد و مبلغ مورد نظرشان، کد اعتبار تهیه کرده و در اختیار اشخاص مدنظر، پرسنل و یا مشتریان خود قرار بدهند. با وارد کردن این کدها در قسمت "هدیه و تخفیف" در اپلیکیشن تپسی، اعتبار کاربر به میزان مبلغ کد افزایش می‌یابد و می‌تواند از محل آن، از سرویس‌های مختلف تپسی استفاده کند.</p>
                <div className={ styles.Buttons } ><a className={ styles.Button } href="#">خرید کد اعتبار</a></div>
                <h2 className={ styles.title2 } >کد تخفیف</h2>
                <p className={ styles.Info }>این کدها قابلیت سفارشی‌سازی دارند و می‌توانند به تعداد مورد نظر در اختیار کسب و کارها قرار بگیرند. از مهم‌ترین ویژگی‌های این راهکار، می‌توان به موارد زیر اشاره کرد:</p>
                <ul className={ styles.list }>
                    <li><div className={ styles.aquare } ></div>قابلیت سفارشی‌سازی بر اساس مبدا، مقصد، زمان و تاریخ</li>
                    <li><div className={ styles.aquare } ></div>امکان تعیین درصد و سقف مبلغ تخفیف</li>
                    <li><div className={ styles.aquare } ></div>امکان اتصال به کیف پول</li>
                    <li><div className={ styles.aquare } ></div>قابلیت دریافت گزارش سفرها در فواصل زمانی دلخواه</li>
                </ul>
                <p className={ styles.Info }>برای خرید کد تخفیف درخواست خود را به <a className={ styles.Link } href="mailto:info@tapsi.cab" >info@tapsi.cab</a> ارسال کرده یا با شماره <a className={ styles.Link } href="tel: 1630" >1630</a> داخلی4 در تماس باشید.</p>
            </div>
           </div>
           <div className={ styles.videoDiv }>
                <h2 className={ styles.title }>آموزش نحوه ثبت نام در پنل سازمانی تپسی</h2>
                <video src={ veido } controls className={ styles.video } />
           </div>
        </div>
    );
};

export default Section;