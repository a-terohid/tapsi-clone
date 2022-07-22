import React from 'react';

//style
import styles from "./Banner.module.scss"

const Banner = () => {
    return (
        <div className={ styles.banner } >
            <h1 className={ styles.title } >مزایای استفاده از پنل سازمانی تپسی</h1>
            <div className={ styles.info } >
                <h3>دسترسی به خودرو در تمام روزهای هفته و ۲۴ ساعت شبانه روز</h3>
                <h3>سهولت در درخواست خودرو بدون نیاز به تماس تلفنی</h3>
                <h3>انجام سفرهای روزانه با قیمت های به صرفه و اقتصادی</h3>
            </div>
        </div>
    );
};

export default Banner;