import React from 'react'; 
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

  
    return (
        <section className="pricing-one pricing-page " style={{color:"black"}}>
            <div className="container">
          
    
                <br></br>
                    <h3>{props.titre} </h3>
                    <p  dangerouslySetInnerHTML={{__html: props.paragraphe}}></p>
                     <h3>{props.titre1}</h3>
                     <p  dangerouslySetInnerHTML={{__html: props.paragraphe1}}></p>
                     <h3>{props.titre2}</h3>
                     <p  dangerouslySetInnerHTML={{__html: props.paragraphe2}}></p>
                     <h3>{props.titre3}</h3>
                     <p  dangerouslySetInnerHTML={{__html: props.paragraphe3}}></p>
                     <h3>{props.titre4}</h3>
                     <p  dangerouslySetInnerHTML={{__html: props.paragraphe4}}></p>
                     <h3>{props.titre5}</h3>
                     <p  dangerouslySetInnerHTML={{__html: props.paragraphe5}}></p>

                                    </div> 
               
        </section>
    
    );
};

export default Correctrice;
