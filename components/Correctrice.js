    import React from 'react';
    
    const caracteristiques = [
        "Des lentilles correctrices à renouvellement trimestriel, assurent un confort optimisé de longue durée",
        "Correction de la myopie",
        "Puissances : Sph -0,25  à -20",
        "Contenance en eau: 42%",
        "Diamètre: 14.2 mm",
        "Rayon de courbure: 8.6 mm",
        "Dotées d'un filtre de protection anti-UV"];

    const Correctrice = () => {

      
        return (
            <section className="pricing-one pricing-page " style={{color:"black"}}>
                <div className="container">
                    <div className="block-title text-center">
                        <h2 style={{color:"#4632da"}} className="block-title__title">Lentilles De Contact Trimestrielles ®</h2>
                        <h4>Caractéristiques :</h4>
                        </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/assets/images/gallery/img1.jpg" width="580px" height="383" style={{borderRadius:"90px 50px 50px 50px"}} alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <ul className="monta" >
                            {
                                caracteristiques.map(c=>{

                                   return (
                                        <li> {c} </li>
                                    )
                                })
                            }
                                
                            </ul>
                        </div>
                    </div><br></br>
                    <br></br>

                    <div className="row">
                        <div className="col-lg-6">
<h5 >Les Avantages</h5>
<hr ></hr>
<h1>Hydratation &<br></br> Confort</h1>
<br></br>
<p style={{color:"grey"}} ><small>Les lentilles trimestrielle assurent une vision parfaite alliée à un confort optimisé pendant toute la journée. Grace à leur  composition elles garantissent une parfaite hydratation et oxygénation des yeux. Souples et confortables les lentilles Soft Vision  vous garantissent un grand confort de port sans gêne ni assèchement oculaire.</small></p>
                        </div> 
                        <div className="col-lg-6">
                            <p>Confort</p>
                            <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                                </div>
                            
                            <p>Hydratation</p>
                                <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width:"99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                                </div>
                            <p>Netteté</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                                </div>
                            <p >Précision</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                                </div>
                        </div> 
                        
                    </div> 
                
                </div>
            </section>
        );
    };

    export default Correctrice;
