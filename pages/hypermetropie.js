import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Sante from "../components/Sante";

const hypermetropie = () => {
    return (
        <Layout pageTitle="SoftVision | hypermetropie">
            <NavOne />
            <PageHeader title="Qu’est-Ce Que hypermetropie" />
            <Sante
             paragraphe="L’hypermétropie n’est pas une patologie mais un trouble de la vision qui se distingue par une vision nette de loin et une vision flou de près. Ce défaut visuel, assez courant, s’explique généralement par un œil trop court ou une cornée trop plate. En effet l’image d’un objet chez un oeil hypermétrope se forme dernière la rétine. Pour voir nettement les objets rapprochés la personne hypermétrope doit faire un effort de mise au point, ce phénomène d’accommodation permet de ramener l’image sur la rétine et d’avoir donc une vision plus nette. En revanche cet effort constant et plus important qu’une personne non-hypermétrope peut causer une fatigue visuelle et des maux de tête voir une migraine. Ces conséquences sont facilement évitables en portant une correction optique adaptée.."
             paragraphe1="En ophtalmologie et en optométrie on distingue deux types d’hypermétropie: modérée et forte. La gravité des défauts visuels est mesurés en dioptrie, et le degrés l’hypermétropie se traduit par une puissance positive (+).
                        <ul>
                        <li> L’hypermétropie est dites faible ou modérée si elle est inférieur à +3 dioptries                        </li>
                        <li>L’hypermétropie forte est au-delà +3 dioptries</li>
                        " 
            paragraphe2="
          <ul>
     <li>       Vision de près floue ou brouillée</li>
     <li>Fatigue oculaire</li>
     <li>Maux de tête</li>
     <li>Migraine</li>
     <li>Strabisme</li>
</ul>
            ."
            titre="Défintion"
            titre1="Les différents niveaux de l’hypermétropie            "
            titre2="Les symptômes de l’hypermétropie"
            />
            <Footer />
        </Layout>
    );
};

export default hypermetropie;
