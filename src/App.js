import React from 'react';
import Hour from './hour';
import Minute from './minute';
import Seconde from './seconde';
import './App.css';

const ms=5478145;

function tohour(ms) {
  const mspersecond=1000
   const mspermin = mspersecond*60 
   const msperhour=mspermin*60
   const hour =Math.floor(ms/msperhour)
   const resthour=ms%msperhour
   const min=Math.floor(resthour/mspermin)
   const restmin=resthour%mspermin
   const second=Math.floor(restmin/mspersecond)


 
   return [hour,min,second]

   

}

function App() {
  const tab=tohour(ms)
  return (
    <div className="App">
      <Hour hour={tab[0]}/>
      <Minute min={tab[1]}/>
      <Seconde second={tab[2]}/>
      
    </div>
  );
}

export default App;
