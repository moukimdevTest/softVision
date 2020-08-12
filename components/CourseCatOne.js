import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';

const CourseCatOne = () => {

    const params = {
        slidesPerView : 6,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 4
            },
            640:{
                slidesPerView : 3

            },
            320:{
                slidesPerView : 2
            }
        }
    }

    return (
        <section className="thm-gray-bg course-category-one">
            <div className="container-fluid text-center">
                <div className="block-title text-center">
                    
                </div>
                <div className="course-category-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="course-category-one__icon">
                                    <i><img src="https://img.icons8.com/dotty/80/000000/eye-unchecked.png"/></i>
                                </div>
                                <h3 className="course-category-one__title"><Link href="/entretien" ><a href="/entretien" >ENTRETIEN DES LENTILLES</a></Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                    <i><img src="https://img.icons8.com/color/48/000000/city-guide.png"/></i>
                                </div>
                                <h3 className="course-category-one__title"><Link href="/guide"><a href="contact">GUIDE D'UTILISATION SOFTVISION</a></Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                    <i><img src="https://img.icons8.com/carbon-copy/100/000000/ophthalmology.png"/></i>
                                </div>
                                <h3 className="course-category-one__title"><Link href="/anomalies"><a href="contact">LES ANOMALIES DE LA VISION</a></Link></h3>
                            </div>
                        </div>
                    </Swiper>
                    <hr></hr>

{/* ***************************** Products Sections ******************************************* */}

                    <section className="course-one course-one__teacher-details home-one">
            <div className="containerr">
                <div className="course-one__carousel">
                <Swiper {...params} >
  
  
    {/* ************************************************************************ */}

                    <div className="itemProd">
                                     <div className="course-one__single color-1">
                                       <div className="course-one__image">
                                          <img src="/assets/images/Home/MainProducts/lentilles-softvision-300x300.jpg" alt="" />
                                              <i className="far fa-heart"></i>
                                              </div>
                         <div className="course-one__content">

                                <h2 className="course-one__title"><a href="/course-details"> Lentilles de contact<br></br> correctrices </a></h2>
                               
                            
                            </div>
                        </div>
                    </div>
    {/* ************************************************************************ */}


                    <div className="itemProd">
                                     <div className="course-one__single color-1">
                                       <div className="course-one__image">
                                          <img src="/assets/images/Home/MainProducts/soft-vision-lentilles-de-couleur-300x300.jpg" alt="" />
                                              <i className="far fa-heart"></i>
                                              </div>
                         <div className="course-one__content">

                                <h2 className="course-one__title"><a href="/course-details"> Lentilles de contact de couleur  correctrices </a></h2>
                               
                            
                            </div>
                        </div>
                    </div>

    {/* ************************************************************************ */}
                    <div className="itemProd">
                                     <div className="course-one__single color-1">
                                       <div className="course-one__image">
                                          <img src="/assets/images/Home/MainProducts/LENTILLES-SOFT-VISION-300x300.jpg" alt="" />
                                              <i className="far fa-heart"></i>
                                              </div>
                         <div className="course-one__content">

                                <h2 className="course-one__title"><a href="/course-details"> Lentilles de contact cosmétiques </a></h2>
                               
                            
                            </div>
                        </div>
                    </div>

    {/* ************************************************************************ */}

</Swiper>
                    </div>
                </div>
            </section>


{/* *********************************************************************************************** */}

                </div>

                <Link a href="/gallery"><a href="/gallery" className="thm-btn">Voir tous les produits</a></Link>
            </div>
        </section>
    );
}
export default CourseCatOne;