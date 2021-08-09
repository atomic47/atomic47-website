import React from "react";

const ThreePartSection = (props: any) => {
  return (
    <div className={`three-part-section ${props.type}`}>
      <img />
      <div className="main-text-threepart">
        <h1>{props.headerText}</h1>
        <h2>{props.mainText}</h2>
      </div>
      <div className="bullet-container">
        <h1>Expertise</h1>
        <div className="text-bullets">
            {props.bulletPoints?.map((bullet: string) => {
              return (
                  <h2>• {bullet}</h2>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ThreePartSection;
