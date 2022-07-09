export const Validate = ( data ) => {
    const errors = {};

    //NameLastname CHECKING
    if ( !data.NameLastname ) {
        errors.NameLastname = "گزینه نام کامل الزامی است."
    } else {
        delete errors.NameLastname
    }

    //EMAIL CHECKING  
    if ( !data.Email ) {
        errors.Email = "گزینه ایمیل الزامی است."
    } else if ( !/\S+@\S+\.\S+/.test( data.Email ) ) {
        errors.Email = "فرمت پست الکترونیکی معتبر نیست."
    } else {
        delete errors.Email
    }

    // PhoneNumber CHECKING
    if ( !data.PhoneNumber ){
        errors.PhoneNumber = "گزینه تلفن الزامی است."
    } else if ( !/09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/.test( data.PhoneNumber ) ) {
        errors.PhoneNumber = "شماره موبایل وارد شده معتبر نیست."
    } else {
        delete errors.PhoneNumber
    }
    
    // PersonalID CHECKING
    if ( !data.PersonalID ){
        errors.PersonalID = 'گزینه شناسه ملی الزامی است.' 
    } else if ( data.PersonalID.length !== 10 ) {
        errors.PersonalID = " شناسه ملی باید ۱۰ رقم باشد." 
    } else if ( data.PersonalID[ 0 ] == 0 ){
        errors.PersonalID = "شناسه ملی وارد شده معتبر نیست."
    } else if ( isNaN( data.PersonalID ) ){
        errors.PersonalID = "شناسه ملی وارد شده معتبر نیست."
    }else {
        delete errors.PersonalID
    }

    // CardNumber CHECKING
    if ( !data.CardNumber ){
        errors.CardNumber = "گزینه شماره کارت الزامی است."
    } else if ( data.CardNumber.length !== 16 ){
        errors.CardNumber = "شماره کارت باید ‍۱۶ رقم باشد."
    } else if ( data.CardNumber[ 0 ] == 0 ){
        errors.CardNumber = "شماره کارت وارد شده معتبر نیست."
    } else if ( isNaN( data.CardNumber) ) {
        errors.CardNumber = "شماره کارت وارد شده معتبر نیست."
    } else {
        delete errors.CardNumber
    }

    // amount CHECKING
    if ( !data.amount ){
        errors.amount = "گزینه مبلغ الزامی است."
    }else if( data.amount[ 0 ] == 0 ){
        errors.amount = "مبلغ وارد شده معتبر نیست."
    } else if ( isNaN( data.amount ) ){
        errors.amount = "مبلغ وارد شده معتبر نیست."
    } else {
        delete errors.amount
    }

    return errors ;
}

