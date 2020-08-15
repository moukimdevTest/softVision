import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Sante from "../components/Sante";

const myopie = () => {
    return (
        <Layout pageTitle="SoftVision | Myopie">
            <NavOne />
            <PageHeader title=" Qu’est-Ce Que Myopie" />
            <Sante
             paragraphe="La myopie n’est pas une maladie mais une anomalie de vision qui se traduit par une vision nette de près et une vision flou des objets de loin. Un œil myope est un œil trop long qui se caractérise par la formation de l’image en avant de la rétine, le nerf optique transmettra donc une image flou au cerveau. Un sujet myope est capable de voir parfaitement de près en revanche de loin plus la source du regard est éloignée et plus l’image sera de moins en moins nette. La myopie est un défaut visuel très fréquent et sa prévalence ne cesse d’augmenter. La correction de la myopie se fait avec des lunettes, des lentilles de contact et désormais avec la chirurgie réfractive."
             paragraphe1="Il existe différents niveaux de myopie cela varie d’une personne à une autre. En ophtalmologie et en optométrie on distingue trois niveau: léger, moyen et fort. La gravité des défauts visuels est mesurés en dioptrie, et le degrés de myopie se traduit par le signe ” (-) moins” .
                        <ul>
                        <li>            La myopie légères: de -0,25 à -2,50 dioptries </li>
                        <li>    La myopie moyenne: de -2,75 à 6 dioptries</li>
                        <li>   La myopie forte: de -6 et plus </li> </ul>" 
            paragraphe2="La myopie peut apparaitre à tous âges. Mais généralement elle commence pendant l’enfance ou l’adolescence, elle est souvent détectée à l’âge scolaire (à partir de 5 ans). L’évolution de la myopie dépend de l’âge de son apparition, quand la myopie apparaît tôt chez l’enfant celle-ci progresse plus vite et peut atteindre des niveaux élevés. La myopie à tendance à se stabiliser à l’âge adulte de 20 à 25 ans. Certaines myopies forte évoluent toute la vie et vont au-delà de – 6 dioptries, dans ce cas le sujet nécessite une surveillance régulière. Dans environ 80% des cas, la myopie est associée à l’astigmatisme."
            paragraphe3="Selon une étude récente le temps passé à l’extérieur aurait un effet bénéfique sur l’apparition de la myopie chez l’enfant et le jeune adulte. La lumière naturelle peut donc retarder l’apparition de la myopie."
            paragraphe4="Les causes de la myopie sont à la fois génétiques et environnementales. Si l’un de vos parents est myope vous avez plus de chance de l’être aussi. Les habitudes à la vision de près ainsi que le mode de vie actuel augmente le risque de myopie ( passer beaucoup de temps à lire et à regarder un écran d’ordinateur, tablette ou téléphone)."
            paragraphe5="<ul>
                    <li>Une difficulté à voir net de loin</li> 
                    <li>Une vision brouiller</li>
                    <li>une nécessité de rapprocher les objets pour voir plus clairement</li>
                    <li>Une difficulté à voir lors de la conduite automobile</li>
                    <li>Maux de tête</li>
                    <li>Fatigue visuelle</li>
                                </ul>"
            titre="Défintion"
            titre1="Les différents niveaux de la myopie"
            titre2="Quand est-ce que la myopie apparait ? Et son évolution."
            titre3="La myopie peut-elle être freinée ?"
            titre4="Les causes de la myopie"
            titre5="Les symptômes de la myopie"
            />
            <Footer />
        </Layout>
    );
};

export default myopie;
