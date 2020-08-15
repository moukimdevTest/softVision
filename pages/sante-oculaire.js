import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SanteOculaire from "../components/SanteOculaire";

const santeOculaire = () => {
    return (
        <Layout pageTitle="SoftVision | FAQ">
            <NavOne />
            <PageHeader title="Santé Oculaire" />
            <SanteOculaire />
            <Footer />
        </Layout>
    );
};

export default santeOculaire;
