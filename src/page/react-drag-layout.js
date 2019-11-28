import React from "react";
import ReactGridLayout from "react-grid-layout";
import Panel from '../components/panel'
import 'react-grid-layout/css/styles.css'
let container = {
  background: "#e1e1e1",
  width: "100%"
};
class ReactDragLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      layoutData: [
        {
          key: "a",
          title: "sss"
        },
        {
          key: "b",
          title: "a标题a标题a标题a标题"
        },
        {
          key: "c",
          title: "c标题"
        }
      ]
    };
  }
  onLayoutChange(layout){
    console.log('layout', layout)
  }
  onDrag(layout,oldItem,newItem,placeholder,e,element){
    console.log('layout1',layout)
    console.log('oldItem',oldItem)
    console.log('newItem',newItem)
    console.log('placeholder',placeholder)
    console.log('e',e)
    console.log('element',element)
  }
  onClick(item){
    console.log('item', item);
  }
  render() {
    let { layoutData } = this.state;
    var layout = [
        {i: 'a', x: 12, y: 0, w: 3, h: 3},
        {i: 'b', x: 12, y: 3, w: 3, h: 3},
        {i: 'c', x: 0, y: 6, w: 3, h: 3}
    ];
    
    return (
      <div style={container}>
        <ReactGridLayout className="layout" verticalCompact={true} onDrag={this.onDrag} onLayoutChange={this.onLayoutChange} preventCollision={true}   draggableCancel={'.panel-content'} layout={layout} rowHeight={50} cols={12} width={1200}>
          {layoutData.map(item => (
            <div key={item.key} onClick={()=> this.onClick(item)}>
                <Panel data={item}></Panel>
            </div>
          ))}
        </ReactGridLayout>
      </div>
    );
  }
}
export default ReactDragLayout;
