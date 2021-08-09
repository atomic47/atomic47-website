import React from "react";

const TextSection = ({
  title,
  mainText,
  mainText2,
  quoteBody,
  quoteAuthor,
  subText
}: {
  title: string;
  mainText?: string;
  mainText2?: string;
  quoteBody?: string;
  quoteAuthor?: string;
  subText?:string;
}) => {
  return (
    <div className="text-section">
      <div className="textSection-text">
        <div className="header">
          <h1>{title}</h1>
        </div>
        {mainText &&
        <div className="main-text">
          <h2 className="subheader-text">{mainText}</h2>
          {mainText2&&
          <h2 className="subheader-text">{mainText2}</h2>
          }
        </div>
        }
        {quoteBody &&
        <div className="quotation">
          <h2 className="quoteBody">{quoteBody}</h2>
          <h2 className="quoteAuthor">{quoteAuthor}</h2>
        </div>
        }
        {subText&&
        <div className="sub-text">
            <h2 className="subheader-text">
                {subText}
            </h2>   
        </div>}
      </div>
    </div>
  );
};

export default TextSection;
