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



const HomePage = () => (

    <Layout pageTitle="SOFT VISION | LENTILLES DE CONTACT CORRECTRICES ET COLORÉES">
      {/* <Topbar /> */}
      <NavOne />
      <SliderOne 
      classgradient="banner-one__slide banner-one__slide-one" 
      image1="/assets/images/soft/eyelense.jpg" image2="/assets/images/soft/slider-2.png" size="500" 
      text1="Soft Vision" desc1="The touch of timeless beauty"
      text2="Passer Au Lentilles ?" desc2="Ce Qu'il Faut Savoir."

      />
      <AboutTwo />
      <CourseOne textHeader="Découvrez nos produits populaires" ismanequin="false" />
      <VideoTwo />
       {/* <CountdownKipso /> */}
      <CourseCatOne />
     {/* <CallToActionThree />
      <BrandsTwo />
      <BlogTwo />
      <CallToActionFour /> */}
      <SubscribeOne />
      <Footer />
    </Layout>

)

export default HomePage;