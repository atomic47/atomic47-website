import React from 'react';
import VillageGrey from "./images/Village-Grey.svg";
import LODEGrey from "./images/LODE-Grey.svg"

const BrandSection = (props: any)=>{
    return(
        <div className ="brand-container" id="What-Were-Doing">
            <h1>
                We don't have clients, we have partners we believe in.
            </h1>
            <div className='logos'>
                <img src={VillageGrey} alt="village logo"/>
                <img src={LODEGrey} alt = "LODE logo"/>
            </div>
            <button className="hero-button">Partner With Us</button>
        </div>
    )
}

export default BrandSection