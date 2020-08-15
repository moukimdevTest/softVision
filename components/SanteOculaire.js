import Link from 'next/link';

const SanteOculaire = () => {
    
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
                            <Link href="/secheresse-oculaire"><a className="faq-one__title">Yeux secs : la sécheresse oculaire, symptômes, causes et prévention </a></Link>
                                                            <p className="faq-one__text">La sécheresse oculaire est une maladie qui implique les larmes et la surface des yeux. Elle est due à une mauvaise qualité ou une production...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                            <Link href="/conjonctivite"><a className="faq-one__title">Conjonctivite : symptômes, causes et prévention </a></Link>
                                <p className="faq-one__text">La conjonctivite est une inflammation très courante des yeux et notamment de la conjonctive qui représente la couche transparente de cellules recouvrant toute la surface de l’œil...</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
               
            
            </div>
            
        </section>
    );
};

export default SanteOculaire;
