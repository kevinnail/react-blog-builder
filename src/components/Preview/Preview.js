import React from 'react';
import './Preview.css';

export default function Preview({ title, subtitle, font, align, text }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  return (
    <>
      <div className={`preview ${font}`} style={{ textAlign: `${align}` }}>
        <h1 key="title">{title}</h1>
        <h3 key="subtitle">{subtitle}</h3>
        <p key="text">{text} </p>
      </div>
    </>
  );
}
