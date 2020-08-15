import React from 'react';
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import CountdownKipso from "../components/CountdownKipso";
import CourseCatOne from "../components/CourseCatOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";

const royalCollectionPage = () => {
    return (
        <Layout pageTitle="SOFT VISION | Mannequin royale collection">
        {/* <Topbar /> */}
        <NavOne />
        <SliderOne
         classgradient="banner-one__slide-manequin banner-one__slide-one" 
         image1="/assets/images/manequin/mannequin-contact-lenses-by-soft-vision.jpg" image2="/assets/images/manequin/Mannequin-contact-lenses-copie.jpg"  size="800"
         text1 ="Royal collection" desc1="MANNEQUIN LENTILLES DE CONTACT DE COULEUR "
         text2="Soft Vision" desc2="The touch of timeless beauty"
          />
        <CourseOne textHeader="Découvrez notre nouvelle collection de produits" ismanequin="true" />
        <VideoTwo />
            <Footer />
      </Layout>
  
    );
};

export default royalCollectionPage;
