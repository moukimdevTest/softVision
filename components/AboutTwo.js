import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Link, animateScroll as scroll } from "react-scroll";

export default class AboutTwo extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
       
    }
    mouseEnterDo = () => {



        const hoveringChange = document.querySelector('.hoveringChange');
        const imagePath = '/assets/images/soft';
        const totalFrames = 19;
        const animationDuration = 10000;
        const timePerFrame = animationDuration / totalFrames;
        let timeWhenLastUpdate;
        let timeFromLastUpdate;
        let frameNumber = 2;
        var myReq;
        
        function step(startTime) {
          if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
        
          timeFromLastUpdate = startTime - timeWhenLastUpdate;
        
          if (timeFromLastUpdate > timePerFrame) {
            hoveringChange.setAttribute('src', imagePath + `/homeChange/imageToChange${frameNumber}.jpg`);
            console.log("changed "+frameNumber)
            timeWhenLastUpdate = startTime;
        
            if (frameNumber >= totalFrames) {
              frameNumber = 2;
            } else {
               frameNumber = frameNumber + 1;
            }        
          }
        
          myReq = requestAnimationFrame(step);
        }
        
      
            requestAnimationFrame(step);
        
        
        hoveringChange.addEventListener('mouseout',()=>{
        
            hoveringChange.setAttribute('src', "/assets/images/about-1-1.png");
            cancelAnimationFrame(myReq);
        
        
        })


    }
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-two">
                <div className="container" >
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Bienvenue à Soft Vision</h2>
                                </div>
                                <p className="about-two__text">Des lentilles de contact souples adaptées à chaque type de correction visuelle. Grace à sa composition innovante, les lentilles de la gamme Soft Vision procurent un excellent confort de longue durée, une bonne hydratation et oxygénation de vos yeux.  </p>
                                <div className="about-two__single-wrap">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-professor"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            {/* <p className="about-two__single-text"></p> */}
                                            <Link
                                            className="about-two__single-text"
                                            activeClass="active"
                                            to="gohere"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={1200}
                                            ><a>En savoir plus</a></Link>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                              <center>  <img className="hoveringChange" src="/assets/images/about-1-1.png" alt="" width="250" height="auto"  onMouseEnter={this.mouseEnterDo} /></center>
                                 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}