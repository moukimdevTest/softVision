import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Correctrice from "../components/Correctrice";
import CallToActionOne from "../components/CallToActionOne";

const CorrectricePage = () => {
    return (
        <Layout pageTitle="Soft-vision | Lentille Contact Correctrice">
            <NavOne />
            <PageHeader title="Lentilles De Contact Correctrice" />
            <Correctrice />
            <Footer />
        </Layout>
    );
};

export default CorrectricePage;
