import React from "react";
import './panel.css'
let fn = function(){
  console.log('2222')
}
export default porps => {
  let {data} = porps;
  
  return (
    <div className="panel-container" key={data.key}>
      <div className="panel-head">
        <div className="panel-head-title">{data.title}</div>
        <div className="panel-head-close" onClick={fn}>x</div>
      </div>
      <div className="panel-content">
        <div>{data.title}</div>
        
      </div>
      <div className="panel-content1">
        <div>footer</div>
      </div>
    </div>
  );
};
