import './App.css';
import React from "react";
import RecetteList from './Components/RecetteList/RecetteList';
import { recipes } from './data'

function App() {
function getName(x) {
  alert(x)
}
  return (
    <div className="App">
<RecetteList recipes={recipes} Alertitle={getName}/>
    </div>

  );
}

export default App;

