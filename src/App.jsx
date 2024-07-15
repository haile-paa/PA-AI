import React from "react";
import Hero from "./componentes/Hero";

import "./App.css";
import Demo from "./componentes/Demo";

const App = () => {
  return (
    <main>
      <div className='main '>
        <div className='gradient' />
      </div>
      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
