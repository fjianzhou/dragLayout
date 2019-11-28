import React from "react";
class MyTest extends React.Component {
  button = ()=> {
    console.log('2222222222')
  }
  render() {
    return (
      <div>
        <button onClick={this.button}>测试</button>
      </div>
    );
  }
}
export default MyTest;
