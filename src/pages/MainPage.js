import React from "react";
import Header from "../components/shared/Header";
import Hero from "../components/main-page/Hero";
import Info from "../components/main-page/Info";
import Footer from "../components/shared/Footer";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Info />
            <Footer />   
        </div>
    );
}

export default MainPage;
