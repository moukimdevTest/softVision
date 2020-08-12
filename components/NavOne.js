import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();

        //Search Toggle
        this.serachButton();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }

    serachButton = () => {
        let searchToggle = document.querySelector(".search-toggle");
        let searchPopup = document.querySelector(".search-popup");
        let searchClose = document.querySelector(".cancel");
        let searchOverlay = document.querySelector(".search-overlay");

        searchToggle.addEventListener("click", function () {
            searchPopup.classList.add('active');
        });

        searchClose.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });

        searchOverlay.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });
    }

    render() {
        return (
            <header className="site-header site-header__header-one ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/assets/images/logo-dark.png" className="main-logo" width="128"
                                         alt="Awesome Image" />
                                </a>
                            </Link>
                            {/* <div className="header__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div> */}
                            <button className="menu-toggler">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/"><a>Accueil</a></Link>
                                   
                                </li>
                                <li>
                                    <a href="#">Nos Produits</a>
                                    <ul className="sub-menu">
                                        <li><Link href="/about"><a>Lentilles de contact correctrices</a></Link></li>
                                        <li><Link href="/gallery"><a>Lentilles de couleur SoftVision avec et sans correction</a></Link></li>
                                        <li><Link href="/pricing"><a>Lentilles de couleur Mannequin</a></Link></li>
                                        <li><Link href="#"><a>FAQ'S</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/faq">FAQ</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/courses"><a>Courses</a></Link></li>
                                        <li><Link href="/course-details"><a>Courses Details</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/teachers"><a>VISION & TROUBLES VISUELS</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/teachers"><a>La myopie</a></Link></li>
                                        <li><Link href="/teacher-details"><a>L’hypermétropie</a></Link></li>
                                        <li><Link href="/become-teacher"><a>L’astigmatisme</a></Link></li>
                                        <li><Link href="/become-teacher"><a>La presbytie</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/news"><a>SANTÉ OCULAIRE</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/news"><a>La sécheresse oculaire</a></Link></li>
                                        <li><Link href="/news-details"><a>La conjonctivite</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact"><a>Contact</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <a className="header__search-btn search-popup__toggler search-toggle" href="#"><i
                                className="kipso-icon-magnifying-glass"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            
            </header>
        );
    }
}

export default NavOne;