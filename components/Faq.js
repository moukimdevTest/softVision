import React,{useEffect,useRef} from 'react';
import { Waypoint } from 'react-waypoint';


const Faq = () => {
    const plusText = useRef(null);
    const firstP = useRef(null);
    const secondP = useRef(null);
    const thirdP = useRef(null);

    const handleWaypointEnter = ()=>{        
       setTimeout(()=>{
        plusText.current.style.color = "#327fb1";
        firstP.current.style.color = "black";
        secondP.current.style.color = "black";
        thirdP.current.style.color = "black";
       },500) 
        }
        const  handleWaypointLeave = ()=>{
            plusText.current.style.color = "#f16101";
            firstP.current.style.color = "gray";
            secondP.current.style.color = "gray";
            thirdP.current.style.color = "gray";
        }
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">À Partir De Quel Âge Peut-On Porter Des Lentilles De Contact?</h2>
                                <p className="faq-one__text">Il n’y a pas d’âge minimum pour commencer à porter des lentilles de contact. Cependant le porteur doit être capable de manipuler les lentilles et respecter les règles d’utilisation et d’entretien.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">Les Lentilles Sont-Elles Confortables ?</h2>
                                <p className="faq-one__text">Les lentilles souples sont confortables. Certaines lentilles de part leur composition permettent une oxygénation et une hydratation des yeux.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">Les Lentilles Sont-Elles Difficiles À Manipuler ?</h2>
                                <p className="faq-one__text">Poser et retirer les lentilles peut-être délicat au début mais on s’habitue à cette routine très facilement et rapidement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">Faut-Il Désinfecter L’étui À Lentilles ?</h2>
                                <p className="faq-one__text">Oui. Il faut nettoyer votre étui après chaque utilisation avec une solution stérile jamais avec de l’eau. Il est conseiller de changer d’étui  tous les mois.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">L'hygiène Est-Elle Importante Quand On Porte Des Lentilles ?</h2>
                                <p className="faq-one__text">Absolument. Il faut toujours se laver les mains avant de poser ou de retirer vos lentilles, les désinfecter avec une solution stérile après chaque utilisation, nettoyer votre étui à lentilles tous les matin et respecter la fréquence de renouvellement. Consulter notre notice d’utilisation et d’entretien.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">Comment Appliquer Et Retirer Les Lentilles ?</h2>
                                <p className="faq-one__text">Référez-vous à notre notice d’utilisation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">Comment Reconnaître Si Les Lentilles Sont À L'envers ?</h2>
                                <p className="faq-one__text">Posez la lentille sur votre index si les rebords virent vers l’extérieur votre lentille est à l’envers. La forme doit être lisse et en demi-cercle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            <br></br>
            <Waypoint
  onEnter={handleWaypointEnter}
  onLeave={handleWaypointLeave}
>
<div className="container">
    <div className="row">
        <div className="col-sm">
        <h2 ref={plusText}>Plus</h2><hr></hr>
                <h3>Les Lentilles Sont-Elles Une Alternative Aux Lunettes ?</h3>
                <p style={{color:"grey"}} ref={firstP}>Les lentilles de contact sont une solution alternative aux lunettes depuis des décennies. De plus, la technologie des lentilles de contact a fait de grands progrès ces dernières années.</p>
                <hr></hr>
                <h3>Les Lentilles Peuvent-Elles De Perdre Dans L'oeil ?</h3>
                <p style={{color:"grey"}} ref={secondP}>L’anatomie de l’oeil rend ceci impossible. Les lentilles ne vont jamais glisser dernière votre oeil.</p>
                <hr></hr>
                <h3>Comment Prendre Soin De Mes Lentilles De Contact?</h3>
                <p style={{color:"grey"}} ref={thirdP}>Pour entretenir les lentilles, il faut utiliser une solution stérile  spécifique. Pour les lentilles souples, deux solutions sont  préconisées par l’ophtalmologiste et l’opticien ( les solutions multifonctions ou les solutions oxydantes )</p>
        </div>
        <div className="col-sm">
            <img className="eyefaq" src="/assets/images/faq/eyeFaq.png" alt="beautiful eye" />
            <img className="eyefaq2" src="/assets/images/faq/poser-et-retirer-les-lentilles-de-contact-.png" alt="poser et retirer les lentilles de contact" />

        </div>
    </div>
</div>
   
</Waypoint>
            
            </div>
            
        </section>
    );
};

export default Faq;
