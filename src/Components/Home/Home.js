import React from 'react';

//components
import Banner from './Banner/Banner';
import Tapsi_Services from './Tapsi-Services/Tapsi_Services';
import HomeSctionOne from './HomeSectionOne/HomeSctionOne';
import HomeSctionTwo from './HomeSectionTwo/HomeSectionTwo';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tapsi_Services />
            <HomeSctionOne />
            <HomeSctionTwo />
        </div>
    );
};

export default Home;