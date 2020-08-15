import React from 'react';
import Link from 'next/link';

const PageHeader = (props) => {
    return (
        <section className="inner-banner" style={{backgroundImage:" linear-gradient(130deg, #0700dd 0%, #00f2ff 77%)"}} >
            <div className="container" >
                <ul className="list-unstyled thm-breadcrumb">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li className="active"><a href="#">{ props.title }</a></li>
                </ul>
            </div>
            <div className="bg-pattern-effect">
                        <img src="/assets/images/bg-pattern.png" alt="" />
                    </div>
        </section>
    );
};

export default PageHeader;
