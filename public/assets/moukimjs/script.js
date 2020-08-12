console.log("*********************************************************")
console.log("this site was created and designed by Moukim Hfaidh ")
console.log("*********************************************************")
const nextButton = document.querySelectorAll(".banner-carousel-btn__right-btn")[0];
const secondImage = document.getElementsByClassName('image1 banner-one__scratch')[1];
nextButton.addEventListener('click',()=>{
    secondImage.classList.add("bounce-in-top")
});


// const hoveringChange = document.querySelector('.hoveringChange');
// const imagePath = '/assets/images/soft';
// const totalFrames = 6;
// const animationDuration = 4000;
// const timePerFrame = animationDuration / totalFrames;
// let timeWhenLastUpdate;
// let timeFromLastUpdate;
// let frameNumber = 1;
// var myReq;

// function step(startTime) {
//   if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;

//   timeFromLastUpdate = startTime - timeWhenLastUpdate;

//   if (timeFromLastUpdate > timePerFrame) {
//     hoveringChange.setAttribute('src', imagePath + `/imageToChange${frameNumber}.jpg`);
//     timeWhenLastUpdate = startTime;

//     if (frameNumber >= totalFrames) {
//       frameNumber = 1;
//     } else {
//        frameNumber = frameNumber + 1;
//     }        
//   }

//   myReq = requestAnimationFrame(step);
// }

// hoveringChange.addEventListener('mouseover',()=>{
//     requestAnimationFrame(step);
// })

// hoveringChange.addEventListener('mouseout',()=>{

//     hoveringChange.setAttribute('src', "/assets/images/about-1-1.png");
//     cancelAnimationFrame(myReq);


// })
/***************** lence through image ****************/

// const lensImage = document.querySelectorAll('.lensImage');
// const eyeAfterLense = document.querySelectorAll('.eyeAfterLense');
// for(let i=0;i<lensImage.length;i++){
//   lensImage[i].addEventListener('mouseover',()=>{
//     eyeAfterLense[i].setAttribute("src","/assets/images/soft/imageToChange3.jpg")
//     lensImage[i].classList.add("imageMoved");
//   });

//   function callback() {
//     lensImage[i].classList.remove("imageMoved");
//     eyeAfterLense[i].setAttribute("src","/assets/images/lenses/eye-blue.jpg")
//   }

//   lensImage[i].addEventListener("webkitAnimationEnd", callback, false);  
// }


