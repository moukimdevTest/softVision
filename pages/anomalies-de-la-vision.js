import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Anomalies from "../components/Anomalies";

const FaqPage = () => {
    return (
        <Layout pageTitle="SoftVision | FAQ">
            <NavOne />
            <PageHeader title="Anomalies de la visions" />
            <Anomalies />
            <Footer />
        </Layout>
    );
};

export default FaqPage;
