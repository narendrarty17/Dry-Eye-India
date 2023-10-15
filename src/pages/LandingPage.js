import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

import Articles from "../components/LandingComp/Articles";
import Cover from "../components/LandingComp/Cover";
import OurServices from "../components/LandingComp/OurServices";
import DryEyeGlasses from "../components/LandingComp/DryEyeGlasses";
import DryEyeKit from "../components/LandingComp/DryEyeKit";
import DownloadMobileApp from "../components/LandingComp/DownloadMobileApp";
import Testimonials from "../components/LandingComp/testimonials";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
    const navigate = useNavigate();

    const onConsultBtnClick = useCallback(() => {
        navigate("/consult");
    }, [navigate]);

    return (
        <div className={styles.landingPage}>
            <Header />
            <Cover />
            <OurServices />
            <DryEyeGlasses />
            <DryEyeKit />
            <DownloadMobileApp />
            <Testimonials />
            <Articles />
            <Footer />
        </div>
    );
};

export default LandingPage;
