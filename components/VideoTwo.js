import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

export default class VideoTwo extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="video-two">
                <div className="container">
                    <img src="/assets/images/BG-FAQ-Services-100x100.png" className="video-two__scratch" alt="" />
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="video-two__content">
                                    <h2 className="video-two__title"><span style={{color:"blue"}}>Soft</span> Vision<br />
                                       </h2>
                                   
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-start videoZZ">
                                
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='rKnHWfw4Azo' onClose={() => this.setState({isOpen: false})} />
                                    <div onClick={this.openModal} className="video-two__popup" style={{opacity:"0.7",marginLeft:"35%"}}><i className="fa fa-play"></i>
                                    </div>
                               
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}