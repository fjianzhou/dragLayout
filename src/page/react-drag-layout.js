import React from "react";
import ReactGridLayout,{WidthProvider} from "react-grid-layout";
import Panel from '../components/panel'
import 'react-grid-layout/css/styles.css'
const GridLayout = WidthProvider(ReactGridLayout);
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
          title: "a"
        },
        {
          key: "b",
          title: "b"
        },
        {
          key: "c",
          title: "c标题"
        }
      ],
      cols:9
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
        {i: 'a', x: 12, y: 3, w: 3, h: 3},
        {i: 'b', x: 12, y: 3, w: 3, h: 3},
        {i: 'c', x: 12, y: 6, w: 3, h: 3}
    ];
    
    return (
      <div style={container}>
        <GridLayout className="layout" verticalCompact={true} onDrag={this.onDrag} onLayoutChange={this.onLayoutChange} preventCollision={true}   draggableCancel={'.panel-content'} layout={layout} rowHeight={50} cols={this.state.cols} width={1200}>
          {layoutData.map(item => (
            <div key={item.key} onClick={()=> this.onClick(item)}>
                <Panel data={item}></Panel>
            </div>
          ))}
        </GridLayout>

        <button onClick={()=>{ this.setState({cols: this.state.cols + 1})}}>加</button>
        <button onClick={()=>{ this.setState({cols: this.state.cols - 1})}}>加</button>
        {this.state.cols}
      </div>
    );
  }
}
export default ReactDragLayout;
