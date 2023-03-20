import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Frame.module.css';
import Translate from './Translate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={ Root.root }>
      <Translate/>
    </div>
);