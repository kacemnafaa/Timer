import React from 'react';
import './txt1.css'
import './txt2.css'
function Hour(props) {
  const hour = props.hour
    return (
      <div className="hourstl">
        <p className="txt1">{hour>9?hour+":":"0"+hour+":"}</p>
        <p className="txt2">hour</p>
      </div>
    );
  }
  
  export default Hour;