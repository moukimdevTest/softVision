import React, { useState,useRef, Component } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';

export default class App extends Component {


constructor() {
    super();
    this.state={
        products :[
            {
            name :"lentille bleu",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            lenseImageUrl:"/assets/images/lenses/blue.png",
            imageTochange:"/assets/images/lenses/eye-blue.jpg",
            nbrOfReviews:250,
            isPreview : false

        },
       
        {
            name :"lentille maron",
            rate:"4.8",
            nbrStars:2,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            lenseImageUrl:"/assets/images/lenses/blue.png",
            imageTochange:"/assets/images/gallery/img11.jpg",
            nbrOfReviews:250,
            isPreview : false

        },
        {
            name :"lentille Vert",
            rate:"3.5",
            nbrStars:4,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg",
            lenseImageUrl:"/assets/images/lenses/blue.png",
            imageTochange:"/assets/images/gallery/img13.jpg",
            nbrOfReviews:250,
            isPreview : false

        },  {
            name :"lentille bleu",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            lenseImageUrl:"/assets/images/lenses/blue.png",
            imageTochange:"/assets/images/gallery/img9.jpg",
            nbrOfReviews:250,
            isPreview : false

        },  {
            name :"lentille bleu",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            lenseImageUrl:"/assets/images/lenses/blue.png",
            imageTochange:"/assets/images/gallery/img9.jpg",
            nbrOfReviews:250,
            isPreview : false

        },  {
            name :"lentille bleu",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            lenseImageUrl:"/assets/images/lenses/blue.png",
            imageTochange:"/assets/images/lenses/eye-blue.jpg",
            nbrOfReviews:250,
            isPreview : false

        },
        ],
        manequinProducts :[
            {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
            isPreview : false

        },
       
        {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange4.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
            isPreview : false

        },
        {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange6.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
            isPreview : false

        }
        ,
        {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
            isPreview : false

        },
        {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
                    isPreview : false

        },
        {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
                    isPreview : false

        },
        {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
                    isPreview : false

        },
        {
            name :"MAJESTIC GREY",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/soft/imageToChange3.jpg" ,
            secondImageUrl:"/assets/images/manequin/Mannequin-contact-lenses-copie.jpg",
            nbrOfReviews:250,
                    isPreview : false

        },
        ],
    };
  } 

  componentDidMount(){
  }


  hoverDoManequin = (e)=>{
      console.log(this.state);
        const   products = [...this.state.manequinProducts];
        let a = e.target.getAttribute('number');
        // let product = {...products[a]};
        // product.isPreview =true;
        // products[a] = product;
        // this.setState({manequinProducts: products}) 

        const lensImage = document.querySelectorAll(".lensImage")[a];
        const eyeAfterLense = document.querySelectorAll('.eyeAfterLense')[a];
        e.target.classList.add("imageMoved2");
     setTimeout(()=>{
        eyeAfterLense.setAttribute("src",products[a].secondImageUrl)

     },500)
        setTimeout(()=>{eyeAfterLense.classList.add("kenburns-top");  
                },800)
                  function  callback(e) {
                    let a = e.target.getAttribute('number');
                 
                       setTimeout(()=>{
                        eyeAfterLense.setAttribute("src",products[a].firstImageUrl);
                        lensImage.classList.remove("imageMoved2");
                        eyeAfterLense.classList.remove("kenburns-top");
                       },1000)  }
                    this.setState({manequinProducts: products})
                    lensImage.addEventListener("webkitAnimationEnd",callback, false);  
                    this.setState({manequinProducts: products}) 
                    console.log(this.state) 
      
    }

     hoverDo = (e)=>{
       const   products = this.state.products;
     let a = e.target.getAttribute('number');
     const lensImage = document.querySelectorAll(".lensImage")[a];
        const eyeAfterLense = document.querySelectorAll('.eyeAfterLense')[a];
                eyeAfterLense.setAttribute("src",this.state.products[a].firstImageUrl)
                    e.target.classList.add("imageMoved");
                
                  function callback(e) {
                    let a = e.target.getAttribute('number');
                    lensImage.classList.remove("imageMoved");
                    eyeAfterLense.setAttribute("src",products[a].imageTochange)
                  }
                
                  lensImage.addEventListener("webkitAnimationEnd", callback, false);  
    }
  
    
    render() { 
    return (
        <div>
           <section className="course-one__top-title home-one">
            <div className="container">
                <div className="block-title mb-0">
                    <h2 className="block-title__title">{this.props.textHeader}</h2>
                </div>
            </div>
            <div className="course-one__top-title__curve"></div>
        </section>
        {
            this.props.ismanequin==="false" ? (

                <section className="course-one course-one__teacher-details home-one">
                    <div className="container">
                        <div className="course-one__carousel">

                            
                            <div className="swiper-container swiper-container-initialized swiper-container-horizontal" >

                                <div className="swiper-wrapper" >
                                    <div className="swiper-slide item swiper-slide-duplicate swiper-slide-duplicate-active" >
                                    <div className="row">
                                     

                                        {
                                            this.state.products.map((prod,index)=>{
                                                return(
                                        <div className="col-sm">
                                                    <div className="itemproductionlist">
                                                            <div className="course-one__single color-1">
                                                                <div className="course-one__image">
                                                                <img className="eyeAfterLense" src={prod.firstImageUrl} alt="" />
                                                                <i className="far fa-heart"></i>
                                                                </div>
                                                            <div className="course-one__content">
                                                                <img className="lensImage " src={prod.lenseImageUrl} alt="" number={index} key={index} onMouseEnter={this.hoverDo} onMouseLeave={this.leavelense} />
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
                                                    </div> 
                                        </div>

                                                )
                                            })
                                        }
                                        
                                    </div>
                                   

                                    </div>
                                    
                                </div>
                            </div>
                             
                        
                            
                        </div>
                    </div>
                </section>
            ) : (
                <section className="course-one course-one__teacher-details home-one">
                    <div className="container">
                        <div className="course-one__carousel">

                            




                        <div className="swiper-container swiper-container-initialized swiper-container-horizontal" >

<div className="swiper-wrapper" >
    <div className="swiper-slide item swiper-slide-duplicate swiper-slide-duplicate-active" >
    <div className="row">
     

        {
            this.state.manequinProducts.map((prod,index)=>{
                return(
        <div className="col-sm">
                    <div className="itemproductionlist">
                            <div className="course-one__single color-1">
                                <div className="course-one__image">
                                <img className="eyeAfterLense" src={prod.firstImageUrl} alt="" />
                                <i className="far fa-heart"></i>
                                </div>
                            <div className="course-one__content">
                                <button className="lensImage "alt="" number={index} key={index} onMouseEnter={this.hoverDoManequin} >
                               
                               {prod.isPreview ? "Back" : "Preview" } 
                                
                                </button>
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
                    </div> 
        </div>

                )
            })
        }
        
    </div>
   

    </div>
    
</div>
</div>












                        </div>
                    </div>
                </section>
            )

        }
     

        
        </div>
      );
    }
    }
    