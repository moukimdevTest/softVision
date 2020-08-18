import React,{useRef,useEffect} from 'react';
import Data from '../Datas';
const Contact = () => {
    const name = React.createRef(null);
    const email = React.createRef(null);
    const message = React.createRef(null);
    const subject = React.createRef(null);
    const tel = React.createRef(null);
    const mailError =React.createRef(null); 
    const success = React.createRef(null);
const submitForm = (e)=>{
    e.preventDefault();
    let name1 = name.current.value;
    let email1 = email.current.value;
    let subject1 =subject.current.value;
    let message1 = message.current.value;
    let tel1 = tel.current.value;
    let success1 = success.current;
    let mailError1 = mailError.current;
  let user = {
    name1,
    email1,
    subject1,
    message1,
    tel1
      }
  console.log(user)
  const d = new Data();
  if(email1=="" || subject1=="" || message1=="" || tel1==""){
      success1.style.display = "none"
      mailError1.style.display = "block"
      e.preventDefault();
      window.scrollTo(0,1600);
  }
  else{
  d.sendEmail(user).then(errors=>{
    if(errors.length>0){
    console.log(errors)
    }

  })
  .catch(err=>{
    console.log(err.message);
    
  
  });
  mailError1.style.display = "none"
  success1.style.display = "block"
  e.preventDefault();
  window.scrollTo(0,1600);

  setTimeout(()=>{
      subject.current.value =""
      message.current.value =""
      tel.current.value ="" 
      success.current.style.display="none" 
  },1500)
}
}
    return (
        <div>
            <section className="contact-info-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-manager"></i>
                                </div>
                                <h2 className="contact-info-one__title">À propos de nous</h2>
                                <p className="contact-info-one__text">Des lentilles de contact souples adaptées à chaque type de correction visuelle. Grace à sa composition innovante, les lentilles de la gamme Soft Vision procurent un excellent confort de longue durée, une bonne hydratation et oxygénation de vos yeux.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-placeholder"></i>
                                </div>
                                <h2 className="contact-info-one__title">Notre adresse</h2>
                                <p className="contact-info-one__text">855 Road Broklyn Street, <br />
                                    600 New York, United States of <br /> America</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-contact"></i>
                                </div>
                                <h2 className="contact-info-one__title">Informations de contact</h2>
                                <p className="contact-info-one__text">help@softvision-ophtalmic.com <br />
                                    444 888 0000 <br /> &nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-one">
                <div className="container">
                    <h2 className="contact-one__title text-center">Entrer en contact <br />
                    avec nous</h2>
                    <form  className="contact-one__form contact-form-validated"
                          noValidate="novalidate" onSubmit={submitForm}>
                           <h1 style={{color:"red",fontSize:"15px",display:"none"}} ref={mailError} >oops ! please make sure to fill all the fields</h1>
                        <h1 style={{color:"green" ,fontSize:"15px",display:"none"}}  ref={success} >Thank you your message has been received we'll back to you shortly ...</h1>
                        <div className="row low-gutters">
                            <div className="col-lg-6">
                                <input type="text" ref={name} name="name" placeholder="Votre nom" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" ref={email} placeholder="Email" name="email" />
                            </div>

                            <div className="col-lg-6">
                                <input type="text" ref={subject} name="Subject" placeholder="subject" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" ref={tel} name="tel" placeholder="Votre numero de telephone" />
                            </div>
                            <div className="col-lg-12">
                                <textarea  ref={message} placeholder="Écrire un message" name="message"></textarea>
                                <div className="text-center">
                                    <button type="submit" className="contact-one__btn thm-btn">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="result text-center"></div>
                </div>
            </section>
            
        </div>
    );
};

export default Contact;
