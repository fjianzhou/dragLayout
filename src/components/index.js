import React from 'react';
import ReactDom from 'react-dom';
import Modal from './Modal';
console.log()
Modal.delete = (option) =>{
  let maskNode = document.getElementById('_motaiduihuak');
  let bodyOverflow = document.body.style.overflow;
  if(!maskNode){
    maskNode = document.createElement('div');
    maskNode.id= '_motaiduihuak'
    maskNode.style.position='fixed'
    maskNode.style.top=0
    maskNode.style.right=0
    maskNode.style.bottom=0
    maskNode.style.left=0
    maskNode.style.background ='rgba(0, 0, 0, 0.3)'
    document.body.appendChild(maskNode);
  }else{
    maskNode.style.display = 'block';
    maskNode.style.visibility = 'visible';
  }
  document.body.style.overflow = 'hidden';
  let config = {...option,bodyOverflow,maskNode}
  ReactDom.render(<Modal {...config} />,maskNode)
}
export {Modal}