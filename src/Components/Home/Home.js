import React from 'react';

//components
import Banner from './Banner/Banner';
import Tapsi_Services from './Tapsi-Services/Tapsi_Services';
import HomeSctionOne from './HomeSectionOne/HomeSctionOne';
import HomeSctionTwo from './HomeSectionTwo/HomeSectionTwo';
import HomeSctionThree from './HomeSectionThree/HomeSectionThree';

const Home = () => {
    return (
        <div style={{ background: "#ffffff"}} >
            <Banner />
            <Tapsi_Services />
            <HomeSctionOne />
            <HomeSctionTwo />
            <HomeSctionThree/>
        </div>
    );
};

export default Home;