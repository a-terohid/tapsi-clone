import React from 'react';

//style
import styles from "./NewBlogs.module.scss";

//imgs
import blog from "./blog2-scaled.jpeg";
import jetdk from "./jetdk.jpeg";
import etehadie from "./etehadie-no-logo-scaled.jpeg";


const NewBlogs = () => {
    return (
        <div className={ styles.NewBlogs }>
           <h1 className={ styles.title } >تازه‌ترین‌های وبلاگ تپسی</h1>
           <div className={ styles.blogs }>
                <div className={ styles.blog} >
                    <img className={ styles.blogImg } src={ etehadie } alt="دومین دوره انتخابات اتحادیه مسب و کارهای مجازی" />
                    <h2 className={ styles.blogTitle }>دومین دوره انتخابات اتحادیه مسب و کارهای مجازی</h2>
                    <p className={ styles.blogInfo } >دیدگاه و اهداف میلاد منشی‌پور، کاندیدای دومین دوره انتخابات اتحادیه کسب و کارهای مجازی درباره‌ من من میلاد منشی پـ...</p>
                </div>
                <div className={ styles.blog} >
                    <img className={ styles.blogImg } src={ jetdk } alt="تخفیف ویژه دیجی‌کالا جت برای کاربران تپسی" />
                    <h2 className={ styles.blogTitle }>تخفیف ویژه دیجی‌کالا جت برای کاربران تپسی</h2>
                    <p className={ styles.blogInfo } >سوپرمارکت آنلاین «دیجی‌کالا جت» با ارسال سریع محصولات سوپرمارکتی شروع به کار کرده است و سفارش‌های آنلاین سوپرمارکتی را ...</p>
                </div>
                <div className={ styles.blog} >
                    <img className={ styles.blogImg } src={ blog } alt="برای دریافت دزسوم واکسن٬ با تخفیف به مراکز واکسیناسیون بروید!" />
                    <h2 className={ styles.blogTitle }>برای دریافت دزسوم واکسن٬ با تخفیف به مراکز واکسیناسیون بروید!</h2>
                    <p className={ styles.blogInfo }>تپسی با همراهی شرکت سیناژن (تولیدکننده واکسن اسپایکوژن) برای رفتن به مراکز واکسیناسیون و تزریق دز سوم، تخفیف و...</p>
                </div>
           </div>
        </div>
    );
};

export default NewBlogs;