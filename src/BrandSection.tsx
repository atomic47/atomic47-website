import React from 'react';
import VillageGrey from "./images/Village-Grey.svg";
import LODEGrey from "./images/LODE-Grey.svg"

const BrandSection = (props: any)=>{
    function clickHandler(e: any, href?: string) {
        console.log("scrolling to", href);
        const hrefValue: any = href;
        const offsetTop = document.querySelector(hrefValue)?.offsetTop - 150;
        window.scroll({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    return(
        <div className ="brand-container" id="What-Were-Doing">
            <h1>
                We don't have clients, we have partners we believe in.
            </h1>
            <div className='logos'>
                <img src={VillageGrey} alt="village logo"/>
                <img src={LODEGrey} alt = "LODE logo"/>
            </div>
            <button className="hero-button" onClick={e=>(clickHandler(e, "#Contact"))}>Partner With Us</button>
        </div>
    )
}

export default BrandSection