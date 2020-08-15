import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Sante from "../components/Sante";

const presbytie = () => {
    return (
        <Layout pageTitle="SoftVision | presbytie">
            <NavOne />
            <PageHeader title="Qu’est-Ce Que presbytie" />
            <Sante
            paragraphe="La presbytie est la perte graduelle de la capacité d’œil à voir nettement les objets de près. C’est liée au phénomène d’accommodation de l’oeil, avec l’âge le cristallin qui représente la lentille qui permet l’accommodation perd en souplesse et en élasticité. Ce défaut visuel se manifeste naturellement avec le vieillissement du cristallin et de sa capsule ainsi que l’affaiblissement des muscles intraoculaires. Cette diminution de l’acuité visuelle touche toutes les personnes à partir de 40-45 ans."
             paragraphe1="<ul>
                        <li>  L’un des premiers signes de la presbytie est de devoir allonger les bras pour pouvoir lire un livre, un journal ou pour consulter votre téléphone. </li>
                        <li>  Une gêne en vision de près, surtout pour les petits caractères ou les détails d’une image.</li>
                        <li>  Des difficultés à passer rapidement d’une vision de près à une vision de loin. </li>
                            <li>Difficultés de mise au point (accommodation).</li>
                            <li>Maux de tête.</li>
                            <li>Fatigue visuelle.</li>
                         </ul>" 
            titre="Défintion"
            titre1="Les différents niveaux de la myopie"
            />
            <Footer />
        </Layout>
    );
};

export default presbytie;
