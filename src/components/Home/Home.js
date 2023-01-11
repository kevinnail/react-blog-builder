import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Insert Title');
  const [subtitle, setSubTitle] = useState('Insert subtitle');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} />
      <Editor title={title} setTitle={setTitle} subtitle={subtitle} setSubTitle={setSubTitle} />
    </main>
  );
}
