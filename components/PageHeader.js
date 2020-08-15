import React from 'react';
import Link from 'next/link';

const PageHeader = (props) => {
    return (
        <section className="inner-banner" style={{backgroundImage:" linear-gradient(130deg, #0700dd 0%, #00f2ff 77%)"}} >
           
            <div className="container" >
            <hr style={{width:"50px",height:"2px", marginLeft:"300px",backgroundColor:"gray"}}></hr>
            
    <h1 className="title-sante">Qu’est-Ce Que {props.title}?</h1>
    
            </div>
            <div className="bg-pattern-effect">
                        <img src="/assets/images/sante/bg-pattern.png" alt="" />
                    </div>
        </section>
       
   
    );
};

export default PageHeader;
