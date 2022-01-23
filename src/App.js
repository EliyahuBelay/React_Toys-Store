import React from 'react';
import './App.css' ;
import Toy from './Components/Toy/Toy';
import ClientContexFunc from './MyProvider/ClientContex';

function App() {
  return (
    <ClientContexFunc hierarchy={<Toy toyName="buba"/>}>
      
    </ClientContexFunc>
    // <ClientContex.Provider value="Kid">
    // <div className="App">
    //   <header className="App-header">
    //     <Toy toyName="buba"/>
    //   </header>
    // </div>
    // </ClientContex.Provider>
  );
}

export default App;
