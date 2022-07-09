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

    //Message CHECKING
    if( !data.Message ){
        errors.Message = "گزینه متن الزامی است."
    }


    return errors ;
}

