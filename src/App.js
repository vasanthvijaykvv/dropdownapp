import React from 'react';
import './App.css';
import {ContextProvider} from './ContextProvider/ContextProvider';
import styles from "./App.module.css"
function App() {
  
  return (
    <div className="App">
      <div className={styles.container} >
        <ContextProvider/>
        </div>
    </div>
  );
}

export default App;
