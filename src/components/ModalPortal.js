import React from 'react';
import { createPortal } from 'react-dom'

export default class ModalPortal extends React.PureComponent{
  constructor(){
    super()
    this.node = document.getElementById('#_motaiduihuak');
    this.savedBodyOverflow = document.body.style.overflow;
    if(!this.node){
      this.node = document.createElement('div');
      this.node.id= '_motaiduihuak'
      this.node.style.display='none'
      this.node.style.visibility='hidden'
      this.node.style.position='fixed'
      this.node.style.top=0
      this.node.style.right=0
      this.node.style.bottom=0
      this.node.style.left=0
      this.node.style.background ='rgba(0, 0, 0, 0.3)'
      document.body.appendChild(this.node);
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.visible !== this.props.visible) {
      this.checkIfVisible();
    }
  }

  componentDidMount(){
    this.checkIfVisible()
  }

  checkIfVisible = () => {
    const {visible} = this.props;
    if(visible){
      this.node.style.display = 'block';
      this.node.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
    }else {
      this.node.style.display = 'none';
      this.node.style.visibility = 'hidden';
      console.log(this.savedBodyOverflow)
      document.body.style.overflow = this.savedBodyOverflow;
    }
  }

  render(){
    const {children} = this.props;
    return createPortal(children,this.node)
  }
}
