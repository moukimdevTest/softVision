import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderOne = ({classgradient,image1,image2,size,text1,text2,desc1,desc2}) => {

    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        //   
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };


    return (
        <div className="banner-wrapper">
            <section className="banner-one banner-carousel__one no-dots">

                <Swiper getSwiper={setSwiper}>
                    <div className={classgradient}>
                        <div className="container">
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            {/* <img src="/assets/images/slider-1-scratch.png" alt="" className="banner-one__scratch" /> */}
                            <img src={image1} className="image1 banner-one__scratch bounce-in-top" alt="" width={size} height="auto" />
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color">{text1}
                                        </h3>
                                    <p className="banner-one__tag-line">{desc1}</p>
                                    <a href="#" className="thm-btn banner-one__btn">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classgradient} >
                        <div className="container">
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            <img  src={image2} alt="" className="image1 banner-one__scratch" width={size} height="auto" />
                            {/* <img src="/assets/images/slider-1-person-2.png" className="banner-one__person" alt="" /> */}
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color">{text2}</h3>
                                    <p className="banner-one__tag-line">{desc2}</p>
                                    <a href="#" className="thm-btn banner-one__btn">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </section>
            <div className="banner-carousel-btn">
                <div onClick={goPrev} className="banner-carousel-btn__left-btn banner-arrow"><i className="kipso-icon-left-arrow"></i></div>
                <div onClick={goNext} className="banner-carousel-btn__right-btn banner-arrow"><i className="kipso-icon-right-arrow"></i></div>
            </div>
    
        </div>
    );
}
export default SliderOne;