// import React from 'react';

import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {

    // navigation says that if else conditionally 
    const navigation = useNavigation();

    // location says that in which path or page you  currently are
    const location = useLocation();
    console.log("location", location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;