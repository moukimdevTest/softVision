import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Guide from "../components/Guide";
import CallToActionOne from "../components/CallToActionOne";

const GuidePage = () => {
    return (
        <Layout pageTitle="Soft-vision | Guide">
            <NavOne />
            <PageHeader title="Guide" />
            <Guide />
            <Footer />
        </Layout>
    );
};

export default GuidePage;
