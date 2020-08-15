import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Sante from "../components/Sante";

const secheresseOculaire = () => {
    return (
        <Layout pageTitle="SoftVision | Secheresse Oculaire">
            <NavOne />
            <PageHeader title=" Yeux Secs : La Sécheresse Oculaire, Symptômes, Causes Et Prévention" />
            <Sante
             paragraphe="La sécheresse oculaire est une maladie qui implique les larmes et la surface des yeux. Elle est due à une mauvaise qualité ou une production insuffisante de larmes. Le syndrome de l’oeil sec est fréquent et le plus souvent bénin."
             paragraphe2="<ul>
                        <li>Le syndrome de l’oeil sec provoque un inconfort visuel et peut aussi entraîner des irritations de la cornée.</li>
                        <li>Sensation d’un corps étranger dans les yeux.</li>
                        <li>Des picotements.</li>
                        <li>La rougeur oculaires</li>
                        <li>Difficulté au port de lentilles de contact.</li>
                        <li>Photophobie</li>
                        <li>Des paupières collées le matin.</li>
                        <li>Fatigue visuelle.</li>

                         </ul>
                         Les symptômes peuvent varier d’une personne à une autre. La sécheresse oculaire peut être intermittente chez certaines personnes, tandis que les symptômes peuvent être toujours présents à un certain degré chez d’autres." 
            paragraphe1="La sécheresse ophtalmique est le résultat de la diminution de la quantité des larmes produite par les glandes lacrymales qui sont par la suite étalées sur toute la surface de l’oeil grâce au clignement des paupières. Les larmes servent à humidifier et nourrir la cornée et de la protéger des agressions extérieurs tels que les bactéries ou la poussière. Le phénomène des yeux sec est souvent lié au vieillissement. On note que la sécheresse oculaire peut être également provoquer par la prise de certains médicaments, par des maladies tels que (la diabète, le psoriasis ou les maladies thyroïdiennes..) ainsi que d’autres facteurs environnementaux tel que la pollution."
            paragraphe3="<ul>
                        <li>Éviter le tabagisme et la fumée de cigarettes.</li>
                        <li>Éviter l’air conditionné.</li>
                        <li>Il ne faut pas porter ses lentilles de contact en permanence, alterner avec le port des lunettes.</li>
                        <li>Protéger vos yeux du vent en portant des lunettes.</li>
                        <li>Consulter la notice des médicaments pour voir les effets indésirables</li>
                        <li>Consulter un ophtalmologue.</li>
                       
            "
          
            titre="Défintion"
            titre1="Les causes"
            titre2="Quelles sont les de la sécheresse oculaire ?"
            titre3="Ce qu’il faut faire en cas de sécheresse oculaire"
            />
            <Footer />
        </Layout>
    );
};

export default secheresseOculaire;
