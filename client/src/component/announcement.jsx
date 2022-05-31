import React from 'react';
import './announcement.css'

const Announcement = () => {
  // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml10 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// console.log(textWrapper.innerHTML)
// anime.timeline({loop: true})
// .add({
//     targets: '.ml10 .letter',
//     rotateY: [-90, 0],
//     duration: 1300,
//     delay: (el, i) => 45 * i
// }).add({
//     targets: '.ml10',
//     opacity: 0,
//     duration: 2000,
//     easing: "easeOutExpo",
//     delay: 2000
//   });
//console.log("Hello",Math.round(Date.now()/1000))
  return (
   
  <div className='container'>
    Super Deal! Free shipping on order Over $50 
  </div>
  );
};

export default Announcement;
