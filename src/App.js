import React, { useRef, useEffect } from 'react';
import './App.css';

import {Nav, Home, Overlay} from './components'
import {TweenMax} from 'gsap';
function App() {  
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 1, {
      css: {visibility: 'visible'}
    })
  }, [])

  return (
    <div ref={e => app = e} className="App">
      <Overlay/>
      <Nav></Nav>
      <Home/> 
    </div>
  );
}

export default App;
