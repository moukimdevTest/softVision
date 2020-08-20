import React, { Component } from 'react'
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
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
            slidesPerView : 4
        },
        768:{
            slidesPerView : 3
        },
        640:{
            slidesPerView : 3

        },
        320:{
            slidesPerView : 2
        }
        ,
        300:{
            slidesPerView : 1
        }
    }
}
const ManequinImages = [
  
    {
        url:"/assets/images/manequin/slider/1.jpeg",
        name:"DIVINE CRYSTAL"
    },
    {
        url:"/assets/images/manequin/slider/2.png",
        name:"MAJESTIC GREY"
    },
    {
        url:"/assets/images/manequin/slider/3.jpg",
        name:"ROMANTIC GREY"
    },
    {
        url:"/assets/images/manequin/slider/4.jpg",
        name:"SEDUCTIVE GREY"
    },
    {
        url: "/assets/images/manequin/slider/5.jpg",
        name:"LORDLY GREY"
    },
    {
        url:"/assets/images/manequin/slider/6.jpg",
        name:"SAHARA BROWN"
    },
    { url:"/assets/images/manequin/slider/7.jpg",
    name:"SWEET GERY"  
     },
     { url:"/assets/images/manequin/slider/8.jpg",
     name:"TENDER HAZEL"  
      },

]
export default class App extends Component {


constructor() {
    super();
    this.state={
        products :[
            {
            id:1,
            name :"EYE-BLGray",
            rate:"4.8",
            nbrStars:5,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/manequin/new/BLGray.png",
                imageTochange:"/assets/images/manequin/new/EYE-BLGray.jpg",
            nbrOfReviews:250,

        },
       
        {
            id:2,
            name :"EYE-F Green",
            rate:"4.8",
            nbrStars:2,
            firstImageUrl:"/assets/images/gallery/img11.jpg" ,
            lenseImageUrl:"/assets/images/manequin/new/FGreen.png",
            imageTochange:"/assets/images/manequin/new/EYE-FGreen.jpg",
            nbrOfReviews:250,

        },
        {
            id:3,
            name :"EYE-FGS Green",
            rate:"3.5",
            nbrStars:4,
            firstImageUrl:"/assets/images/gallery/img11.jpg" ,
            lenseImageUrl:"/assets/images/manequin/new/FGSGreen.png",
            imageTochange:"/assets/images/manequin/new/EYE-FGSGreen.jpg",
            nbrOfReviews:250,

        },  {
            id:4,
            name :"EYE-F Pure Hazel",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/gallery/img11.jpg" ,
            lenseImageUrl:"/assets/images/manequin/new/FPureHazel.png",
            imageTochange:"/assets/images/manequin/new/EYE-FPureHazel.jpg",
            nbrOfReviews:250,

        },  {
            id:5,
            name :"EYE-F Turquoise",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/gallery/img11.jpg" ,
            lenseImageUrl:"/assets/images/manequin/new/FTurquoise.png",
            imageTochange:"/assets/images/manequin/new/EYE-FTurquoise.jpg",
            nbrOfReviews:250,

        },  {
            id:6,
            name :"EYE-G Green",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/gallery/img11.jpg" ,
            lenseImageUrl:"/assets/images/manequin/new/GGreen.png",
            imageTochange:"/assets/images/manequin/new/EYE-GGreen.jpg",
            nbrOfReviews:250,

        },
         {
             id:7,
            name :"EYE - PA Brown ",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/gallery/img11.jpg" ,
            lenseImageUrl:"/assets/images/manequin/new/PABrown.png",
            imageTochange:"/assets/images/manequin/new/EYE-PABrown.jpg",
            nbrOfReviews:250,

        },
         {
             id:8,
            name :"EYE - PA Gray",
            rate:"4.8",
            nbrStars:5,
            firstImageUrl:"/assets/images/gallery/img11.jpg" ,
            lenseImageUrl:"/assets/images/manequin/new/PAGray.png",
            imageTochange:"/assets/images/manequin/new/EYE-PAGray.jpg",
            nbrOfReviews:250,

        },
        {
            id:9,
           name :"EYE - PA Green ",
           rate:"4.8",
           nbrStars:5,
           firstImageUrl:"/assets/images/gallery/img11.jpg" ,
           lenseImageUrl:"/assets/images/manequin/new/PAGreen.png",
           imageTochange:"/assets/images/manequin/new/EYE-PAGreen.jpg",
           nbrOfReviews:250,

       },{
        id:10,
       name :"EYE - PB Gray ",
       rate:"4.8",
       nbrStars:5,
       firstImageUrl:"/assets/images/gallery/img11.jpg" ,
       lenseImageUrl:"/assets/images/manequin/new/PBGray.png",
       imageTochange:"/assets/images/manequin/new/EYE-PBGray.jpg",
       nbrOfReviews:250,

   },{
    id:11,
   name :"EYE - PB Sky ",
   rate:"4.8",
   nbrStars:5,
   firstImageUrl:"/assets/images/gallery/img11.jpg" ,
   lenseImageUrl:"/assets/images/manequin/new/PBSky.png",
   imageTochange:"/assets/images/manequin/new/EYE-PBSky.jpg",
   nbrOfReviews:250,

},
        ],
        manequinProducts :[
            {
                id:1,
                name :"Divine Crystal",
                rate:"4.8",
                nbrStars:5,
                    firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                    lenseImageUrl:"/assets/images/mannequin_design/Divine_Crystal.png",
                    imageTochange:"/assets/images/mannequin_design/EYE-DivineCrystal.jpg",
                nbrOfReviews:250,
    
            },
           
            {
                id:2,
                name :"Lordly Grey",
                rate:"4.8",
                nbrStars:2,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/mannequin_design/LordlyGrey.png",
                imageTochange:"/assets/images/mannequin_design/EYE-LordlyGrey.jpg",
                nbrOfReviews:250,
    
            },
            {
                id:3,
                name :"Majestic Grey",
                rate:"3.5",
                nbrStars:4,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/mannequin_design/MajesticGrey.png",
                imageTochange:"/assets/images/mannequin_design/EYE-MajesticGrey.jpg",
                nbrOfReviews:250,
    
            },  {
                id:4,
                name :"Romantic Grey",
                rate:"4.8",
                nbrStars:5,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/mannequin_design/RomanticGrey.png",
                imageTochange:"/assets/images/mannequin_design/EYE-RomanticGrey.jpg",
                nbrOfReviews:250,
    
            },  {
                id:5,
                name :"Sahara Brown",
                rate:"4.8",
                nbrStars:5,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/mannequin_design/SaharaBrown.png",
                imageTochange:"/assets/images/mannequin_design/EYE-SaharaBrown.jpg",
                nbrOfReviews:250,
    
            },  {
                id:6,
                name :"Seductive Grey",
                rate:"4.8",
                nbrStars:5,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/mannequin_design/SeductiveGrey.png",
                imageTochange:"/assets/images/mannequin_design/EYE-SeductiveGrey.jpg",
                nbrOfReviews:250,
    
            },
             {
                 id:7,
                name :"Sweet Grey",
                rate:"4.8",
                nbrStars:5,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/mannequin_design/SweetGrey.png",
                imageTochange:"/assets/images/mannequin_design/EYE-SweetGrey.jpg",
                nbrOfReviews:250,
    
            },
             {
                 id:8,
                name :"Tender Hazel",
                rate:"4.8",
                nbrStars:5,
                firstImageUrl:"/assets/images/gallery/img11.jpg" ,
                lenseImageUrl:"/assets/images/mannequin_design/TenderHazel.png",
                imageTochange:"/assets/images/mannequin_design/EYE-TenderHazel.jpg",
                nbrOfReviews:250,
    
            }
        ],
    };
  } 

  componentDidMount(){
  }


  hoverDoManequin = (e)=>{
      console.log(this.state);
        const   products = [...this.state.manequinProducts];
        let a = e.target.getAttribute('number');
        const lensImage = document.querySelectorAll(".lensImage")[a];
        const eyeAfterLense = document.querySelectorAll('.eyeAfterLense')[a];
        e.target.classList.add("imageMoved2");
     setTimeout(()=>{
        eyeAfterLense.setAttribute("src",products[a].secondImageUrl)

     },790)
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
                                    <div className="row productsRow">
                                     

                                        {
                                            this.state.products.map((prod,index)=>{
                                                return(
                                        <div key={index} className="col-sm">
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
                                                                    <h2 className="course-one__title"> {prod.name}</h2>
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
                

                <section id="sansCorrection" className="course-one course-one__teacher-details home-one">
                    <div className="container">
                        <div className="course-one__carousel">

                            
                            <div className="swiper-container swiper-container-initialized swiper-container-horizontal" >

                                <div className="swiper-wrapper" >
                                    <div className="swiper-slide item swiper-slide-duplicate swiper-slide-duplicate-active" >
                                    <div className="row productsRow">
                                     

                                        {
                                            this.state.manequinProducts.map((prod,index)=>{
                                                return(
                                        <div key={index} className="col-sm">
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
                                                                    <h2 className="course-one__title"> {prod.name}</h2>
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

                <section className="course-one course-one__teacher-details home-one">
            <div className="containerr">
                <div className="course-one__carousel">
                <Swiper {...params} >
  
  
    {/* ************************************************************************ */}

                {
                    ManequinImages.map((manqImage,index)=>{
                        return(
                            <div key={index} className="itemProdMM">
                                     <div className="course-one__single color-1">
                                       <div className="course-one__image">
                                          <img src={manqImage.url} alt={"manequin image"+index} />
                                        </div>
                                            <div className="course-one__content">

                                <h2 className="course-one__title"> {manqImage.name}</h2>
    </div>
                      
                        </div>
    

                    </div>
                        )
                    })
                }
    

</Swiper>
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
    