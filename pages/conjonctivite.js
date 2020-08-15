import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Sante from "../components/Sante";

const conjonctivite = () => {
    return (
        <Layout pageTitle="SoftVision | conjonctivite">
            <NavOne />
            <PageHeader title=" Conjonctivite : Symptômes, Causes Et Prévention" />
            <Sante
             paragraphe="La conjonctivite est une inflammation très courante des yeux et notamment de la conjonctive qui représente la couche transparente de cellules recouvrant toute la surface de l’œil y compris l’intérieur de la paupière. La conjonctivite appelée aussi “l’oeil rose”  provoque des démangeaison et une sensation d’inconfort, l’œil devient rouge et produit des écoulements qui peuvent former une croûte. La conjonctivite est une infection oculaire contagieuse, très fréquente chez les enfants."
             paragraphe1="<ul>
                        <li>Démangeaison</li>
                        <li>Rougeur</li>
                        <li>Des yeux larmoyant</li>
                        <li>L’apparition d’une croute</li>
                        <li>Les yeux peuvent aussi enfler</li>
                        <li>Sensation d’un grain de sable dans l’oeil</li>
                        <li>Des douleurs à un oeil ou aux deux yeux</li>
                        <li>Paupières collées au réveil</li>

                         </ul>" 
            paragraphe2="On distingue deux types de conjonctivite:
            <ul>
                <li> Les conjonctivites virales ou bactériennes: conjonctivite d’origine infectieuse causée généralement par un virus et rarement par une bactérie.</li>
                <li>La conjonctivite allergique: la conjonctivite peut être due à une réaction allergique à un corps étranger tels que le pollen ou la poussière.</li>
            </ul>"
            paragraphe3="<ul>
                        <li>Se laver les mains avant de mettre ou d’enlever les lentilles de contact.</li>
                        <li>Se laver les mains après s’être mouché et avoir éternué.</li>
                        <li>Éviter de se toucher ou de se frotter les yeux régulièrement, il faut s’assurer que les doigts sont propres avant tout contact avec les yeux.</li>
                        <li>Faire attention aux contacts avec un enfant atteint de conjonctivite.</li>
                        <li>Éviter le maquillage irritants (mascara, fard à paupière).</li>
                                             </ul>"
            paragraphe4="Si l’inflammation s’accompagne de fortes douleurs il est primordial de consulter votre ophtalmologue rapidement. Les signes d’aggravation sont:
            <ul>
                        <li>Une perte de l’acuité visuelle.</li>
                        <li>De la fièvre</li>
                        <li>La présence d’une autre maladie ophtalmique</li>
                        <li>Une photophobie intense</li>
                        <li>Enfants de moins de deux ans</li>

                        La conjonctivite viral se résorbe généralement d’elle-même en 5 à 15 jours, elle ne nécessite pas de traitement dans la plupart des cas. Pour soulager et limiter les symptômes vous pouvez utiliser:
                        <ul>
                        <li>Un collyre lubrifiant qui permet de diminuer les démangeaison et la sensation de sable dans l’œil.</li>
                        <li>Un collyres antiseptiques pour éviter les risques de surinfection bactérienne.</li>
                        <li>Vous pouvez également appliquer des compresse chaude sur les yeux afin de soulager les symptômes.</li>
                        <li>Éviter de regarder les écrans.</li>
                        <li>Si l’infection persiste n’hésitez pas à consulter votre médecin</li>
                                             </ul>
                                             Dans le cas de conjonctivite bactérienne il est nécessaire de consulter un médecin, car celle-ci nécessite un traitement spécifique. Le médecin peut vous prescrire un collyre antibiotique ou/et une pommade ophtalmique anti-inflammatoire…
            "
          
            titre="Défintion"
            titre1="Les symptômes de la conjonctivite"
            titre2="Les causes ?"
            titre3="Comment prévenir la conjonctivite ?"
            titre4="Traitement"
            />
            <Footer />
        </Layout>
    );
};

export default conjonctivite;
