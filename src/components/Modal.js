import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal'

const ModalContainer = styled.div`
  position:absolute;
  left:${(props) => props.position.left || '50%'};
  top:${(props) =>props.position.top || '50%'};
  transform:${(props) => props.position.left ? '' : 'translate(-50%,-50%)'};
  background: #FFFFFF;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.20);
  border-radius: 4px;
  padding:18px;
`
const ModalHead = styled.div`
  line-height:20px;
`
const ModalContent = styled.div`
  line-height:20px;
`
const ModalFooter = styled.div`
  padding-bottom:16px;
  padding-top:16px; 
  font-family: PingFangSC-Regular;
  font-size: 14px;
`
const ButtonOk = styled.span`
  width:66px;
  height:24px;
  line-height:24px;
  background: #F22735;
  border-radius: 4px;
  color: #FFFFFF;
  text-align: center;  
  display: inline-block;
  vertical-align: middle;
`
const ButtonCancel = styled.span`
  width:66px;
  height:24px;
  line-height:24px;
  border: 1px solid #F22735;
  border-radius: 4px;
  color: #F22735;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
`
export default class Modal extends React.PureComponent{
  constructor(){
    super();
    this.state={
      visible: true
    }
  }
  onClick = ()=>{
    this.setState({visible:false})
  }
  render(){
    let {position = {}} = this.props;
    return (
      <ModalPortal visible = {this.state.visible}>
        <ModalContainer position={position}>
          <ModalHead>头部</ModalHead>
          <ModalContent>内容</ModalContent>
          <ModalFooter>
            <ButtonOk>确定</ButtonOk>
            <ButtonCancel onClick={this.onClick}>取消</ButtonCancel>
          </ModalFooter>
        </ModalContainer>
      </ModalPortal>
    )
  }
}