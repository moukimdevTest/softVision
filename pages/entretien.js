import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Sante from "../components/Sante";

const entretien = () => {
    return (
        <Layout pageTitle="SoftVision | entretien">
            <NavOne />
            <PageHeader title=" INSTRUCTION D’UTILISATION ET D’ENTRETIEN" />
            <Sante
             paragraphe="Avant la manipulation de vos lentilles de contact Soft Vision , prenez la précaution de toujours vous laver et vous sécher les mains.
NB: Ne jamais prêter  vos lentilles de contact, celles-ci sont à usage personnel.
<strong>Pose et dépose de vos lentilles de contact souples </strong>
<ol>
<li>Pose de la lentille</li>
<ul>
<li><strong>Sortir vos lentilles du blister:</strong> les lentille Soft Vision  sont conditionnées dans un blister stérile. La première étape consiste à soulever  délicatement la protection en aluminium et par la suite faire glisser la lentille sur votre doigt pour la sortir du blister. 
NB: N’utilisez pas vos ongles, vous risquerez d’endommager les lentilles et de les déchirer.</li>
<li><strong>Trouver le bon sens:</strong>placez la lentille sur le bout de votre index et observez sa courbure et son profil. Si les bords sont évasés, elle est à l’envers. Si elle ressemble à un bol au bord lisse, elle est prête à l’emploi.</li>

<li><strong>Poser les lentilles:</strong> Avec le majeur de la main, tirez votre paupière inférieure vers le bas. Avec l’index ou le majeur de l’autre main, soulevez la paupière supérieure. Dirigez votre œil  vers le sens de votre nez et procédez à la pose de la lentille sur le blanc de l’œil. Ramenez lentement le regard  devant vous, sans lâcher les paupières. Relâchez par la suite la paupière tout en cillant des yeux lentement..</li>
<p>Reproduire les même consignes pour l’autre oeil.</p>

</ul>
<li>Retrait de la lentille</li>
<ul>




<li>Préparation de l’étui: remplissez l’étui de vos lentilles avec la solution saline spécialisée dédiée à leur entretien.
NB: Ne jamais utiliser de l’eau, les lentilles doivent êtres nettoyer après chaque utilisation avec un produit d’entretien spécifique. </li>

<li>Ecartez les paupières à l’aide du majeur de chaque main: Avec votre majeur tirez la paupière inférieure vers le bas . Avec l’index  de l’autre main, soulevez la paupière supérieure.</li>
<li>Retirer les lentilles: Pincez délicatement la lentille entre le pouce et l’index, et retirer la.</li>
<p>Reproduire les même consignes pour l’autre oeil.</p>
<p>Entretien et décontamination des lentilles </p>
<p>Une bonne hygiène est indispensable au port des lentilles de contact mensuelles ou trimestrielles, afin de préserver la santé de vos yeux, la souplesse et la transparence de vos lentilles. </p>
<p>Comment en prendre soin ? </p>

<li>Se laver soigneusement les mains au savon avant de mettre ou d’enlever vos lentilles.</li>
<li>Se sécher les mains avec une serviette propre.</li>
<li>Une fois les lentilles posées le matin, videz votre étui et laissez le sécher à l’air libre jusqu’à la prochaine utilisation.</li>
<li>Le soir après s’être laver les mains, il est primordial de  décontaminer vos lentilles: 1/ Versez quelques gouttes de la solution d’entretien sur la lentilles 2/passez délicatement votre doigt sur la lentille en massant quelques secondes pour enlever les impuretés 3/ Rincez les lentilles avec la solution d’entretien 4/ remplissez l’étui avec la solution d’entretien et laisser poser les lentilles pour la nuit.</li>
<p>NB: L’étui doit être renouveler tous les trois mois, doit être vider tous les matins et remplie de solution oxydante tous les soirs. </p>
<hr>
</ul>


</ol>        
"
             paragraphe1="
                        <ul>
                        <li> Ne jamais prêtez pas vos lentilles. </li>
                        <li>Ne dormez pas avec vos lentilles.</li>
                        <li>Respectez la fréquence de renouvellement indiquée par votre opticien.</li>
                        <li>Utilisez des solutions d’entretien lentilles recommandés par votre opticien.</li>
                        <li>Ne jamais se baigner ou prendre une douche avec vos lentilles</li>
                        <li>Évitez que vos lentilles ou votre étui soit en contact avec l’eau du robinet.</li>
                        <li>Ne pas utiliser des lentilles endommagées, contaminées ou rayées.</li>
                        <li>En cas de rougeurs oculaires, d’irritation ou de douleur, retirez immédiatement vos lentilles et consultez un spécialiste de la vue.</li>


                         </ul>" 
           paragraphe2="
           <img src='/assets/images/sante/etui-lentille-pharmacie-fashion-lentilles-boite-de-lentille-de-contact-10-bi.png' alt='lentille paquet' />
           
           "
            titre="DES LENTILLES SOFT VISION"
            titre1="Recommandations"
            />
           
            <Footer />
        </Layout>
    );
};

export default entretien;
