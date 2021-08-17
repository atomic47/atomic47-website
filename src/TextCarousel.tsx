import React, { useEffect, useState } from "react";


function isElementInViewport (el:HTMLElement) {

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

const TextCarousel = (props: any) => {
  const carouselWords = [
    "Leadership",
    "Marketing",
    "Design",
    "Development",
    "Strategy",
  ];
  const [currentWord, setCurrentWord] = useState('Leadership');
  useEffect(()=>{
    setCurrentWord(carouselWords[(carouselWords.indexOf(currentWord)===carouselWords.length-1)?0:carouselWords.indexOf(currentWord)]);
  }, [])


  useEffect(()=>{
    setTimeout(()=>{
      let component = document.getElementById('typed-word-component')
      if(component){
        component.classList.remove(`changing-word-${carouselWords.indexOf(currentWord) + 1}`);
    
        // -> triggering reflow /* The actual magic */
        // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        // Oops! This won't work in strict mode. Thanks Felis Phasma!
        // element.offsetWidth = element.offsetWidth;
        // Do this instead:
        void component.offsetWidth;
        
        // -> and re-adding the class
        component.classList.add(`changing-word-${carouselWords.indexOf(currentWord) + 1}`);
      }
    }, 0)
  },[currentWord])



  setTimeout(() => {
    setCurrentWord(carouselWords[(carouselWords.indexOf(currentWord)===carouselWords.length-1)?0:carouselWords.indexOf(currentWord) + 1]);
  }, 4000)

  setTimeout(()=>{
    let component = document.getElementById('typed-word-component')
    if(component){
      component.className=`changing-word-${carouselWords.indexOf(currentWord) + 1}`
    }
  }, 0)


  return (
    <div className="text-carousel">
        <h1 className='first-word'>Atomic</h1>
        <h1 id='typed-word-component' className={`changing-word-${carouselWords.indexOf(currentWord) + 1}`}>{currentWord}</h1>
    </div>
  );
};

export default TextCarousel;
