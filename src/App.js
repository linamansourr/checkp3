import React from 'react'
import './App.css';
import Picture from './Components/Profile/ProfilePhoto';
import Fname from './Components/Profile/FullName';
import SimpleMap from './Components/Profile/Address';


function App() {
  return (
    <div className="App">
     <Picture/>
     <Fname/>
     <SimpleMap/>
     

    </div>
  );
}

export default App;
