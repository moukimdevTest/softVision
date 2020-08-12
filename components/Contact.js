import React from 'react';

const Contact = () => {
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
                    <form action="#" className="contact-one__form contact-form-validated"
                          noValidate="novalidate">
                        <div className="row low-gutters">
                            <div className="col-lg-6">
                                <input type="text" name="name" placeholder="Votre nom" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Email" name="email" />
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Écrire un message" name="message"></textarea>
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
