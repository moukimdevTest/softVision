import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Sante from "../components/Sante";

const lastigmatisme = () => {
    return (
        <Layout pageTitle="SoftVision | l'astigmatisme">
            <NavOne />
            <PageHeader title=" Qu’est-Ce Que l'astigmatisme" />
            <Sante
             paragraphe="L’astigmatisme est un défaut visuel qui peut survenir seul ou plus fréquemment en association avec d’autres troubles de la vision. Les astigmates sont souvent myopes ou hypermétropes. Un oeil astigmate est caractérisé par une vision floue et déformée des objets de loin comme de près ainsi qu’une difficulté à distinguer les lignes horizontales, verticales et obliques. Une personne astigmate à tendance à confondre les signes tels que lettres ou les chiffres qui se rapprochent ( La lettre N et M ou Le chiffre 8 ou 9)."
             paragraphe1="On parle d’astigmatisme lorsque l’image ne se projette pas de façon nette sur la rétine. Cela est liée à un défaut de courbure de la cornée ou du cristallin. En effet la forme de la cornée ou du cristallin se révèle plus ovale que ronde et n’a pas de courbure régulière ce qui entraîne une distorsion des rayons lumineux qui pénètrent dans l’œil. La vision est donc imprécise."
             paragraphe2="<ul>
                     <li> Vision floue de loin et de près</li> 
                     <li>Vision imprécise et brouillée</li>
                     <li>Les signes proches sont confondus </li>
                     <li>Difficultés à la lecture de loin et de près </li>
                     <li>Difficultés à distinguer certaines formes et détails</li>
                     
                                 </ul>
      Un astigmatisme non corrigé peut causer des maux de tête, une fatigue oculaire, une migraine et un plissement très régulier des yeux."
             
             paragraphe3="<ul>
            <li>Lunettes</li>
            <li>Lentilles de contact</li>
            <li>Chirurgie LASIK</li>
            </ul>"
            titre="Défintion"
            titre1="Les causes de l’astigmatisme"
            titre2="les symptômes de l’astigmatisme"
            titre3="La correction de l’astigmatisme"
            />
            <Footer />
        </Layout>
    );
};

export default lastigmatisme;
