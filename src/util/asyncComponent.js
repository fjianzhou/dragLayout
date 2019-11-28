import React from 'react'
export default (imp)=> {
    return class AsynCComponent extends React.Component{
        constructor(){
            super();
            this.state ={
                component: null
            }
        }
        async componentDidMount(){
            let {default:res} = await imp();
            this.setState({component: res})
        }
        render(){
            let {component:T} = this.state;
            return T ? <T/> : <div>等待中.....</div>
        }
    }
}
