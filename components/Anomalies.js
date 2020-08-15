import Link from 'next/link';

const Anomalies = () => {
    
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
                            <Link href="/presbytie"><a className="faq-one__title">Qu’est-ce que la Presbytie ? </a></Link>
                                                            <p className="faq-one__text">La presbytie est la perte graduelle de la capacité d’œil à voir nettement les objets de près. C’est liée au phénomène d’accommodation de l’oeil, avec l’âge...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                            <Link href="/lastigmatisme"><a className="faq-one__title">Qu’est-ce que la l’astigmatisme ? </a></Link>
                                <p className="faq-one__text">L’astigmatisme est un défaut visuel qui peut survenir seul ou plus fréquemment en association avec d’autres troubles de la vision. Les astigmates sont souvent myopes...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                            <Link href="/hypermetropie"><a className="faq-one__title">Qu’est-ce que la l’hypermétropie ? </a></Link>
                                <p className="faq-one__text">L’hypermétropie n’est pas une patologie mais un trouble de la vision qui se distingue par une vision nette de loin et une vision flou de...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                            <Link href="/myopie"><a className="faq-one__title">Qu’est-ce que la myopie ? </a></Link>
                                <p className="faq-one__text">La myopie n’est pas une maladie mais une anomalie de vision qui se traduit par une vision nette de près et une vision flou des...</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
               
            
            </div>
            
        </section>
    );
};

export default Anomalies;
