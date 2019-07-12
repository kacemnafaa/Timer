import React from 'react';
function Seconde(props) {
  const second=props.second
    return (
      <div className="Secondestl">
        <p className="txt1">{second>9?second: "0"+second}</p>
        <p className="txt2">Seconde</p>
      </div>
    );
  }
  
  export default Seconde;