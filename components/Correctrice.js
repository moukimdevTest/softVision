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

    const Correctrice = () => {

      
        return (
            <section className="pricing-one pricing-page " style={{color:"black"}}>
                <div className="container">
                    <div className="block-title text-center">
                        <h2 style={{color:"#4632da"}} className="block-title__title">Lentilles De Contact Trimestrielles ®</h2>
                        <br></br>
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
                            <p className="para"><small>Les lentilles trimestrielle assurent une vision parfaite alliée à un confort optimisé pendant toute la journée. Grace à leur  composition elles garantissent une parfaite hydratation et oxygénation des yeux. Souples et confortables les lentilles Soft Vision  vous garantissent un grand confort de port sans gêne ni assèchement oculaire.</small></p>
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
                            <p>Précision</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                                </div>
                        </div> 
                        
                    </div> 
                <br></br>
                <hr style={{width:"60px",height:"2px",marginLeft:"50px",backgroundColor:"gray"}}></hr>
                <center>
                    <h1 className="main-header" >Lentilles De Couleur Trimestrielles Soft Vision®</h1>
                </center>
                <br></br>
                <div className="row">
                    <div className="container">

                    <img className="img2" src="/assets/images/correctrice/SV-PACKAGING-LUM.jpg" alt=""/>

                    </div>
                    <div className="col-lg-6 position">
                    <img className="img1" src="/assets/images/correctrice/course-category-1-4.png" alt=""/>

                    </div> 
                        <div className="col-lg-6">
                        <p className="secondary-header">Des Couleurs Naturelles</p>
                        <br></br>
                        <hr style={{width:"60px",height:"2px",marginLeft:"0px", backgroundColor:"gray"}}></hr>
                        <h1 className="sous-titre" onMouseEnter={monta} >Collection <br></br>Permanente</h1>
                        <p className="para"><small>Les lentilles de couleur Soft Vision permettent de mettre en valeur la couleur naturelle de votre iris ou de changer radicalement de look. Disponibles avec une correction adaptée à la vue, elles le sont également sans correction, à des fins purement esthétiques, pour les personnes n’ayant pas de troubles de la vision</small></p>
                       <button className="btn">Découvrire Les couleurs &nbsp;<i class="fa fa-arrow-right"></i>

</button>
                        </div> 
                    </div> 
                    <br></br>
                    <br></br>
                    <center>
                    <p>Gamme De Lentilles Cosmétiques Mannequin®</p>
                    </center>
                    <hr style={{width:"60px",height:"2px",marginLeft:"50px",backgroundColor:"gray"}}></hr>
                    <center>
<h1 className="main-header">Lentilles De Couleur Trimestrielles <br></br>Mannequin®</h1>
</center>
                    <div className="row">
                            <img className="img3" src="/assets/images/correctrice/SV-PACKAGING-LUM.jpg" alt=""/>
                    <div className="col-lg-6 position">
                    <img className="img1" src="/assets/images/correctrice/course-category-1-4.png" alt=""/>

                    </div> 
                        <div className="col-lg-6">
                        <p className="secondary-header">The Timeless Beauty Touch</p>
                        <br></br>
                       <p className="para"><small>Que ce soit saisonnier, pour une soirée ou pour s’offrir un regard plus intense, les lentilles de couleur Mannequin redonnent du pep’s à votre regard !</small></p>
                        <p className="para"><small>Les lentilles de couleur Soft Vision permettent de mettre en valeur la couleur naturelle de votre iris ou de changer radicalement de look. Disponibles avec une correction adaptée à la vue, elles le sont également sans correction, à des fins purement esthétiques, pour les personnes n’ayant pas de troubles de la vision</small></p>
                       <button className="btn">Découvrire Les couleurs &nbsp;<i class="fa fa-arrow-right"></i>

</button>
                        </div> 
                    </div> 
                </div>
                <br></br>
            </section>
        
        );
    };

    export default Correctrice;
