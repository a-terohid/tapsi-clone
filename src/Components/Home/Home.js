import React from 'react';

//components
import Banner from './Banner/Banner';
import Tapsi_Services from './Tapsi-Services/Tapsi_Services';
import HomeSctionOne from './HomeSectionOne/HomeSctionOne';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tapsi_Services />
            <HomeSctionOne />
        </div>
    );
};

export default Home;