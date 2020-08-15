import React, { useState, useEffect,useRef }  from 'react'; 
const caracteristiques = [ 
    "Des lentilles correctrices à renouvellement trimestriel, assurent un confort optimisé de longue durée",
    "Correction de la myopie",
    "Puissances : Sph -0,25  à -20",
    "Contenance en eau: 42%",
    "Diamètre: 14.2 mm",
    "Rayon de courbure: 8.6 mm",
    "Dotées d'un filtre de protection anti-UV"];

    const monta = ()=>{
       const a = document.querySelector(".sous-titre")
    a.classList.add("backgrounred")
    }

const Correctrice = (props) => {
    let paragraphe = React.createRef(null);
    let paragraphe1 = React.createRef(null);
    let paragraphe2 = React.createRef(null);
    let paragraphe3 = React.createRef(null);
    let paragraphe4 = React.createRef(null);
    let paragraphe5 = React.createRef(null);

    const updateInnerHTMLFromProps =()=> {
        if(props.paragraphe==undefined)
        paragraphe.current.innerHTML =null;
        else
        paragraphe.current.innerHTML = props.paragraphe;
        if(props.paragraphe1==undefined)
        paragraphe1.current.innerHTML =null;
        else
        paragraphe1.current.innerHTML = props.paragraphe1;

        if(props.paragraphe2==undefined)
        paragraphe2.current.innerHTML =null;
        else
        paragraphe2.current.innerHTML = props.paragraphe2;    

        if(props.paragraphe3==undefined)
        paragraphe3.current.innerHTML =null;
        else
        paragraphe3.current.innerHTML = props.paragraphe3;

        if(props.paragraphe4==undefined)
        paragraphe4.current.innerHTML =null;
        else
        paragraphe4.current.innerHTML = props.paragraphe4;
        
        if(props.paragraphe5==undefined)
        paragraphe5.current.innerHTML =null;
        else
        paragraphe5.current.innerHTML = props.paragraphe5;
        
    }
    useEffect(() => {
        // Update the document title using the browser API
        updateInnerHTMLFromProps();
    });
    return (
        <section className="pricing-one pricing-page " style={{color:"black"}}>
            <div className="container">
          
    
                <br></br>
                    <h3>{ props.titre} </h3>

                    <p ref={paragraphe} ></p>

                     <h3>{props.titre1}</h3>

                     <p ref={paragraphe1} ></p>

                     <h3>{props.titre2}</h3>

                     <p ref={paragraphe2}></p>

                     <h3>{props.titre3}</h3>

                     <p ref={paragraphe3}></p>

                     <h3>{props.titre4}</h3>

                     <p ref={paragraphe4}></p>

                     <h3>{props.titre5}</h3>

                     <p ref={paragraphe5} ></p>

                                    </div> 
               
        </section>
    
    );
};

export default Correctrice;
