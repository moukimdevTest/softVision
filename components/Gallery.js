import React from 'react';

const Gallery = () => {
    // const arrayOfimages=["assets/images/soft/imageToChange3.jpg","assets/images/soft/imageToChange7.png","assets/images/soft/imageToChange8.png","assets/images/soft/imageToChange9.jpg","assets/images/soft/imageToChange10.jpg","assets/images/soft/imageToChange11.jpg","assets/images/soft/imageToChange12.jpg","assets/images/soft/imageToChange13.jpg","assets/images/soft/imageToChange14.jpg","assets/images/soft/imageToChange15.jpg","assets/images/soft/imageToChange16.jpg","assets/images/soft/imageToChange17.jpg"];
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
