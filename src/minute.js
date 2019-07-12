import React from 'react';
function Minute(props) {
  const min=props.min
    return (
      <div className="Minutestl">
        <p className="txt1">{min>9?min+":":"0"+min+":"}</p>
        <p className="txt2">Minute</p>
      </div>
    );
  }
  
  export default Minute;