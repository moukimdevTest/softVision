import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';

const CourseOne = ({textHeader,ismanequin}) => {
    const products = [
        {
        name :"lentille bleu",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        lenseImageUrl:"/assets/images/lenses/blue.png",
        imageTochange:"/assets/images/lenses/eye-blue.jpg",
        nbrOfReviews:250,
    },
   
    {
        name :"lentille maron",
        rate:"4.8",
        nbrStars:2,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        lenseImageUrl:"/assets/images/lenses/blue.png",
        imageTochange:"/assets/images/lenses/eye-blue.jpg",
        nbrOfReviews:250,
    },
    {
        name :"lentille Vert",
        rate:"3.5",
        nbrStars:4,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg",
        lenseImageUrl:"/assets/images/lenses/blue.png",
        imageTochange:"/assets/images/lenses/eye-blue.jpg",
        nbrOfReviews:250,
    },
    ];


    const manequinProducts = [
        {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
        nbrOfReviews:250,
    },
   
    {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/lenses/blue.png",
        nbrOfReviews:250,
    },
    {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/lenses/blue.png",
        nbrOfReviews:250,
    },
    {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/lenses/blue.png",
        nbrOfReviews:250,
    },
    {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/lenses/blue.png",
        nbrOfReviews:250,
    },
    {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/lenses/blue.png",
        nbrOfReviews:250,
    },
    {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/lenses/blue.png",
        nbrOfReviews:250,
    },
    {
        name :"MAJESTIC GREY",
        rate:"4.8",
        nbrStars:5,
        firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
        secondImageUrl:"/assets/images/lenses/blue.png",
        nbrOfReviews:250,
    },
    ]



    const clickDoManequin = (e)=>{
        let a = e.target.getAttribute('number');
        console.log(a)
        const lenseImage = document.querySelectorAll('.lenseImage')[a];
        console.log(lenseImage)
        setTimeout(()=>{
            lenseImage.setAttribute("src",manequinProducts[a].secondImageUrl)
            console.log(lenseImage)
        },2000)
      
    }

    const hoverDo = (e)=>{
     
        const lensImage = document.querySelectorAll('.lensImage');
        const eyeAfterLense = document.querySelectorAll('.eyeAfterLense');
        for(let i=0;i<lensImage.length;i++){
                    let a = e.target.getAttribute('number');
                    eyeAfterLense[i].setAttribute("src",products[a].firstImageUrl)
                    e.target.classList.add("imageMoved");
                
                  function callback() {
                    lensImage[i].classList.remove("imageMoved");
                    eyeAfterLense[i].setAttribute("src",products[a].imageTochange)
                  }
                
                  lensImage[i].addEventListener("webkitAnimationEnd", callback, false);  
            
         
        }
        
    }

    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 30000,
        spaceBetween : 30,
        autoplay: {
            delay: 9000,
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2

            },
            320:{
                slidesPerView : 1
            }
        }
    }
    return (
        <div>
           <section className="course-one__top-title home-one">
            <div className="container">
                <div className="block-title mb-0">
                    <h2 className="block-title__title">{textHeader}</h2>
                </div>
            </div>
            <div className="course-one__top-title__curve"></div>
        </section>
        {
            ismanequin==="false" ? (

                <section className="course-one course-one__teacher-details home-one">
                    <div className="container">
                        <div className="course-one__carousel">

                            <Swiper {...params} >
                                {
                                    products.map((prod,index)=>{
                                            return(

                                                <div key={index} className="item">
                                                <div className="course-one__single color-1">
                                                <div className="course-one__image">
                                                    <img className="eyeAfterLense" src={prod.firstImageUrl} alt="" />
                                                        <i className="far fa-heart"></i>
                                                        </div>
                                    <div className="course-one__content">
                                        <img className="lensImage " number={index} key={index} src={prod.lenseImageUrl} alt="" onMouseEnter={hoverDo} />
                                            <br></br>
                                            <br></br>
                                            <h2 className="course-one__title"><a href="/course-details"> {prod.name} </a></h2>
                                            <div className="course-one__stars">
                                        <span className="course-one__stars-wrap">
                                        {
                                            [...Array(prod.nbrStars)].map((x, i) =>
                                            <i key={i} className="fa fa-star"></i>)}
                                            
                                        </span>
                                                <span className="course-one__count">{prod.rate}</span>
                                                <span className="course-one__stars-count">{prod.nbrOfReviews}</span>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div> )})
                                }
                        
                            </Swiper>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="course-one course-one__teacher-details home-one">
                    <div className="container">
                        <div className="course-one__carousel">

                            <Swiper {...params} >
                                {
                                    manequinProducts.map((prod,index)=>{
                                            return(

                                                <div key={index} className="item">
                                                <div className="course-one__single color-1">
                                                <div className="course-one__image">
                                                    <img className="lenseImage" src={prod.firstImageUrl} alt="lense image" />
                                                        <i className="far fa-heart"></i>
                                                        </div>
                                    <div className="course-one__content">
                                        {/* <img className="lensImage " number={index} key={index} src={prod.lenseImageUrl} alt="" onMouseEnter={hoverDo} /> */}
                                           <button style={{borderRadius:"50%",backgroundColor:"dodgerblue",marginRight:"20px"}} number={index} key={index} onClick={clickDoManequin} > preview</button>
                                            <br></br>
                                            <br></br>
                                            <h2 className="course-one__title"><a href="/course-details"> {prod.name} </a></h2>
                                            <div className="course-one__stars">
                                        <span className="course-one__stars-wrap">
                                        {
                                            [...Array(prod.nbrStars)].map((x, i) =>
                                            <i key={i} className="fa fa-star"></i>)}
                                            
                                        </span>
                                                <span className="course-one__count">{prod.rate}</span>
                                                <span className="course-one__stars-count">{prod.nbrOfReviews}</span>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div> )})
                                }
                        
                            </Swiper>
                        </div>
                    </div>
                </section>
            )

        }
     

        
        </div>
    );
}
export default CourseOne;