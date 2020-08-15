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

                <section id="sansCorrection" className="course-one course-one__teacher-details home-one">
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
                                                                <center><img className="lensImage " src={prod.lenseImageUrl} alt="" number={index} key={index} onMouseEnter={this.hoverDo} onMouseLeave={this.leavelense} /></center>
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
                <div>
                <section className="course-one course-one__teacher-details home-one" >
                    <div className="container" >
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
  <div style={{backgroundColor:"#def6fe",color:"black"}}>
  <hr></hr>
     <div style={{margin:"0 27%",paddingBottom:"25px"}}>
    <center><h1 style={{fontFamily:"Cinzel",fontSize:"30px",fontWeight:"600",letterSpacing:"1px"}} >THE TIMELESS BEAUTY TOUCH</h1></center>
    <p className="manequinP">Porter des lentilles colorées n’a jamais été aussi à la mode. Mannequin propose une palette de couleur au design naturel qui vous permettent un changement radical ou subtil de la couleur de vos yeux selon l’effet recherché.</p>
    <center><img src="/assets/images/manequin/m-2PACKAGING.png" alt="mannequin paquage" width="300" height="auto" /></center>
      <br></br>
        <h2> CARACTÉRISTIQUES+</h2>
        <ul className="manequinUl">
            <li><span>Confort</span>
            <div>
            Les lentilles mannequin sont souples et procurent un confort optimal tout au long de la journée.
            </div></li>

            <li><span>Oxygénation</span>
                <div>
                Les lentilles mannequin sont hautement perméable à l'oxygène, assurent l'hydratation de vos yeux durant tout le port.
                </div>
            </li>

            <li><span>Protègent vos yeux des UV</span>
            <div>
            La gamme de lentilles mannequin est conçue avec un filtre anti-UV, qui garantit une protection supplémentaire à vos yeux .
                </div></li>

            <li><span>Des couleurs chatoyantes</span>
            <div>
            Des lentilles de couleur qui habillent votre regard de manière naturelle.            </div></li>

        </ul>
<br></br>
       <center> <a  role="button" href="/contact" target="_blank"><span className="opticienchezvous">Trouver un opticien chez vous</span></a></center>
   
   
    </div>
    <br></br>
    <div className="background-shaped">
        <div className="row">
        <div className="col-sm">
        <div style={{margin:"55px "}}>
        <h1 style={{color:"white"}}>Lentilles Mannequin</h1>
        <hr></hr>
        <p>Que Ce Soit Saisonnier, Pour Une Soirée Ou Pour S'offrir Un Regard Plus Intense, Les Lentilles De Couleur Mannequin Redonnent Du Pep's À Votre Regard !
            Une Collection Sophistiquée Qui Se Compose De Huit Couleurs Naturelles Faites Pour Sublimer Et Émanciper Votre Regard Au Quotidien.</p>
        </div>
        </div>
        <div className="col-sm">
           <img src="/assets/images/manequin/mannequin-lentilles.jpg" alt="mannequin lentilles"  />
            <br></br>
            <br></br>
            <br></br>
        </div>
        </div>

   </div>
  </div>
  </div>
            )

        }
     

        
        </div>
      );
    }
    }
    