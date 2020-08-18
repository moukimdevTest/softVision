import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
const Footer = () => {
    const router = useRouter()

    const searchGo = (e)=>{
        e.preventDefault();
        router.push("/faq");
    }
    function scrollTop() {
        window.scrollTo(0, 0);
    }
        return (
            <div>
                <footer className="site-footer">
                    <div className="site-footer__upper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-sm-12">
                                    <div className="footer-widget footer-widget__link">
                                        <h2 className="footer-widget__title">Explore</h2>
                                        <div className="footer-widget__link-wrap">
                                            <ul className="list-unstyled footer-widget__link-list">
                                                <li><a href="/gallery">À propos</a></li>
                                                <li><a href="/gallery">Galerie</a></li>
                                                <li><a href="/gallery">Produits</a></li>
                                                <li><a href="/gallery">Rejoignez-nous</a></li>
                                                <li><a href="/gallery">Guide</a></li>
                                                <li><a href="/gallery">Aide </a></li>
                                                <li><a href="/gallery">Contact</a></li>
                                            </ul>
                                            {/* <ul className="list-unstyled footer-widget__link-list">
                                               
                                                
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                                <div  className="col-xl-3 col-lg-6 col-sm-12">
                                    <div className="footer-widget footer-widget__gallery">
                                        <h2 className="footer-widget__title">Galerie</h2>
                                        <div className="photo-container1">
                                        <ul className="list-unstyled footer-widget__gallery-list">
                                            <li><Link  href="/gallery"><a href="/gallery"><img src="/assets/images/footer/EYE-BL-Gray-OY-Platinum-Gray-100x100.jpg" alt="" /></a></Link></li>
                                            <li><Link href="/gallery" ><a href="/gallery"><img src="/assets/images/footer/EYE-Divine-Crystal-A-89-Crystal-III-100x100.jpg" alt="" /></a></Link></li>
                                            <li><Link href="/gallery"><a href="/gallery"><img src="/assets/images/footer/EYE-F-Turquoise-PF-3T-Turquoise-100x100.jpg" alt="" /></a></Link></li>
                                            <li><Link href="/gallery" ><a href="/gallery"><img src="/assets/images/footer/EYE-G-Green-PG-3T-Green-100x100.jpg" alt="" /></a></Link></li>
                                            <li><Link href="/gallery"><a href="/gallery"><img src="/assets/images/footer/EYE-Lordly-Grey-A-74-Husky-Gray-III-copie-100x100.jpg" alt="" /></a></Link></li>
                                            <li><Link href="/gallery"><a href="/gallery"><img src="/assets/images/footer/EYE-Majestic-Grey-A-74-Green-Gray-III-100x100.jpg" alt="" /></a></Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <div  className="col-xl-3 col-lg-6 col-sm-12">
                                    <div className="footer-widget footer-widget__about">
                                        <h2 className="footer-widget__title">À propos</h2>
                                        <p className="footer-widget__text">Des lentilles de contact souples adaptées à chaque type de correction visuelle. Grace à sa composition innovante, les lentilles de la gamme Soft Vision procurent un excellent confort de longue durée, une bonne hydratation et oxygénation de vos yeux.  </p>
                                        <div className="footer-widget__btn-block">
                                            <a href="/gallery" className="thm-btn">Contact</a>
                                            {/* <a href="/gallery" className="thm-btn">Purchase</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="container">
                            <p className="site-footer__copy">&copy; Copyright 2020 by <a href="https://comcept.tn" target="_blank">Comcept.tn</a></p>
                            <div className="site-footer__social">

                                <div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top"><i
                                    className="kipso-icon-top-arrow"></i></div>


                                <a href="https://www.facebook.com/softvisionlenses/"><i className="fab fa-facebook-square"></i></a>
                                <a href="/gallery"><i className="fab fa-pinterest-p"></i></a>
                                <a href="https://www.instagram.com/softvision.contactlenses/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="search-popup">
                    <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
                    <div className="search-popup__inner">
                        <form className="search-popup__form" onSubmit={searchGo}>
                            <input type="text" name="search" placeholder="Ecrire ici pour chercher...." />
                            <button type="submit" ><i className="kipso-icon-magnifying-glass"></i></button>
                            <div className="cancel"><i className="fas fa-times-circle"></i></div>
                        </form>
                    </div>
                </div>

            </div>


        );
}
export default Footer;