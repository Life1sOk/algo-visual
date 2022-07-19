import React from 'react';

import './App.css';
import Header from './sections/header/header.section';
import Code from './sections/code/code.section';
import Action from './sections/action/action.section';

function App() {
  return (
    <div className="app">
      <Header />
      <main className='main-container'>
        <Action />
        <Code />
      </main>
    </div>
  );
}

export default App;
