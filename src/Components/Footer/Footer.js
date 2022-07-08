import React from 'react';

//styles 
import styles from "./Footer.module.scss";

//img
import enamad from "./enamad-full-star.png";
import etehadie from "./etehadiye.png";
import samandehy from "./logo.aspx.png"

//icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={ styles.Footer } >
            <div className={ styles.Links }>
                <div className={ styles.Tapsi }>
                    <a className={ styles.TabsiSVG } >
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="22" viewBox="0 0 102 22">
                            <g fill-rule="evenodd">
                                <path fill="#ffffff" d="M102 5.946h-3.222v4.28H91.8v-4.28h-3.221v4.28h-5.637a1.878 1.878 0 0 1-1.879-1.872V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873 1.878 1.878 0 0 1-1.879-1.873V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873h-1.879V5.946h-3.22v4.28h-17.18v3.212h3.758v.535c0 2.656-2.167 4.816-4.831 4.816-2.664 0-4.832-2.16-4.832-4.816v-3.746H37.58v3.746c0 4.426 3.613 8.027 8.053 8.027 4.44 0 8.052-3.6 8.052-8.027v-.535H68.985a5.09 5.09 0 0 0 3.489-1.381 5.09 5.09 0 0 0 3.49 1.38 5.09 5.09 0 0 0 3.489-1.38 5.089 5.089 0 0 0 3.489 1.38H102V5.947z"></path>
                                <path fill="#ffffff" d="M84.702 19.297h3.854V22h3.304v-5.946h-7.158zM102 0h-6.561v2.973H102z"></path>
                                <path fill="#ffffff" d="M26.842 11.297H10.737V5.946h16.105zM26.842 22H0v-5.351h26.842z"></path>
                            </g>
                        </svg>
                    </a>
                    <h3 className={ styles.TapsiInfo } >اپلیکیشن درخواست خودرو و پیک</h3>
                    <p className={ styles.TapsiCopyright }>تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</p>
                </div>
                <ul className={ styles.list }>
                    <li><a href="#" >تپسی</a></li>
                    <li><a href="#" >وبلاگ تپسی</a></li>
                    <li><a href="#" >فرصت های شغلی</a></li>
                    <li><a href="#" >تماس با ما</a></li>
                    <li><a href="#" >لوگو و هویت سازمانی</a></li>
                    <li><a href="#" >معرفی راننده به تپسی</a></li>
                </ul>
                <ul className={ styles.list }>
                    <li><a href="#" >مسافران</a></li>
                    <li><a href="#" >دانلود اپ مسافر</a></li>
                    <li><a href="#" >نسخه وب تپسی</a></li>
                    <li><a href="#" >پرسش های متداول مسافران</a></li>
                    <li><a href="#" >شرایط و قوانین مسافران</a></li>
                    <li><a href="#" >باشگاه مشتریان</a></li>
                </ul>
                <ul className={ styles.list }>
                    <li><a href="#" >رانندگان</a></li>
                    <li><a href="#" >دانلود اپ سفیر</a></li>
                    <li><a href="#" >ثبت نام راننده تاکسی اینترنتی</a></li>
                    <li><a href="#" >پرسش های متداول سفیران</a></li>
                    <li><a href="#" >شرایط و قوانین سفیران</a></li>
                    <li><a href="#" >باشگاه سفیران</a></li>
                </ul>
                <ul className={ styles.list }>
                    <li><a href="#" >کسب و کارها</a></li>
                    <li><a href="#" >پتل سازمانی تپسی</a></li>
                    <li><a href="#" >خرید کد اعتبار و تخفیف</a></li>
                    <li><a href="#" >دریافت API</a></li>
                </ul>
                <div className={ styles.namad }>
                    <a href="https://www.ecunion.ir/verify/tapsi.ir?token=37746495acf0232a5306" target="_blank"><img src={ etehadie } /></a>
                    <a href='https://logo.samandehi.ir/Verify.aspx?id=165889&p=rfthgvkadshwmcsimcsipfvl' target="_blank" ><img src={ samandehy } /></a>
                    <a href='https://trustseal.enamad.ir/?id=134202&Code=7jelItGhNaXbhvYrHRN5' target="_blank" ><img src={ enamad } /></a>
                </div>
            </div>
            <div className={ styles.TapsiInSocialMedia }  >
                <h4 className={ styles.Info } >تپسی در شبکه های اجتماعی</h4>
                <p className={ styles.TapsiCopyright2 }>تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</p>
                <div className={ styles.icons }>
                    <a href="https://www.facebook.com/Tapsi.ir/" target="_blank" ><FaFacebookF className={ styles.icon } /></a>
                    <a href="https://www.instagram.com/tapsi_ir/" target="_blank" ><FaInstagram className={ styles.icon } /></a>
                    <a href="https://twitter.com/TAPSI_ir" target="_blank" ><FaTwitter className={ styles.icon } /></a>
                    <a href="https://www.linkedin.com/company/tap30" target="_blank" ><FaLinkedinIn className={ styles.icon } /></a>
                    <a href="https://t.me/tapsi_cab" target="_blank" ><FaTelegramPlane className={ styles.icon } /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;