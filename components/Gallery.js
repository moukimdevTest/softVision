import React from 'react';


const Gallery = () => {

    const arrayOfimages = [];
    const numberOfImages = 21
    for(let i=1;i<numberOfImages;i++){
        arrayOfimages.push(`/assets/images/gallery/img${i}.jpg`)
    }
  
    return (

        <section className="gallery-one">
  
                <div className="photo-container">
                  <ul>
                 {
                     arrayOfimages.map(img=>{
                        return (
                        <li >
                            <img src={img} alt="" />
                        </li>
                         )
                     })
                 }
                   
                 </ul>
            </div>
        </section>
    );
};

export default Gallery;
