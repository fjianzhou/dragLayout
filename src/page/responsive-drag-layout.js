import React from "react";
import styled,{css} from "styled-components";
import ReactGridLayout,{WidthProvider} from "react-grid-layout";
import "./grid-layout.css";
import MyTest from "../components/my-test";
import Icon from "@lugia/lugia-web/dist/icon";
import NumberInput from "@lugia/lugia-web/dist/number-input";
import Slider from "@lugia/lugia-web/dist/slider";
import Theme from "@lugia/lugia-web/dist/theme";
import Widgets from "@lugia/lugia-web/dist/consts";
import { getBorder } from "@lugia/theme-utils";
import { Modal } from "../components";
import config from '../IndexModular/index'
import CSSComponent from '@lugia/theme-css-hoc';
import ThemeProvider from '@lugia/theme-hoc';
console.log('config',config)

const GridLayout = WidthProvider(ReactGridLayout);

const layoutStyle = {
  background: "#F5F5F9",
};

const GridItemContainer = styled.div`
  background: #fbfbfb;
  border-radius: 4px;
  &:hover {
    background: #fbfbfb;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;
const FloatingWindowContainer = styled.div`
  position: fixed;
  transition: right 0.3s;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  bottom: 8px;
`;
const FloatingWindonLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 26px;
`;
const FloatingWindonLeft = styled.span`
  height: 48px;
  width: 6px;
  background: #747e90;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px 0 0 4px;
  color: #fff;
  line-height: 4px;
  padding-top: 11px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #aaaaaa;
  }
`;
const FloatingWindowRight = styled.span`
  height: 48px;
  width: 42px;
  border-radius: 0 4px 4px 0;
  background: #747e90;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: 22px;
  line-height: 53px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #aaaaaa;
  }
`;
const FloatingWindowcontent = styled.div`
  transform: scale(0, 0);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 265px;
  background: #f2f2f2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px 10px;
  transform-origin: -50% 50%;
  .lable {
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
  }
  .lable span {
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #50575d;
  }
  .lable i {
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #747e90;
    line-height: 17px;
  }
  .input_group {
    display: flex;
  }
  .input_group .input_wrap {
    flex: 1;
  }
  .input_cols_wrap {
    display: flex;
    flex-direction: column;
  }
  .input_cols_wrap .input_cols_lable {
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #50575d;
    line-height: 17px;
    margin-bottom: 7px;
    margin-top: 16px;
  }
  .input_cols_wrap .input_cols_slider {
    flex: 1;
    margin-bottom: 16px;
  }
  .add_panel_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(-90deg, #4d68ff 0%, #8093ff 100%);
    border-radius: 12px;
    height: 24px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
  }
  .shrink_wrap {
    position: absolute;
    right: 12px;
    bottom: 13px;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 18px;
  }
`;

const CarouselContainer = styled.div`
  position:fixed;
  bottom:-300px;
  right: 57px;
  transition: bottom .3s;
  background: #F2F2F2;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
  border-radius: 4px;
  height:265px
  min-width:1127px;
  width:80%;
`;
const MyCarousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 12px;
  overflow: hidden;
  padding: 0 32px;
`;

const NextButton = CSSComponent({
  tag: 'span',
  className: 'ButtonOut',
  normal:{
    selectNames: [['color']],
    defaultTheme: {color: '#cccccc'},
  },
  hover: {
    selectNames: [['color']],
    defaultTheme: {color: '#4d68ff'},
  },
  active: {
    selectNames: [['color']],
    defaultTheme: {color: '#394dbf'}
  },
  disabled:{
    electNames: [['color']],
    defaultTheme: {color: 'red'},
  },
  css: css`
  display: inline-block;
  position: absolute;
  left: 0;
  width: 32px;
  text-align: center;
  `,
  option: { hover: true, active: true },
})
// const NextButton = styled.span`
//   display: inline-block;
//   position: absolute;
//   left: 0;
//   width: 32px;
//   text-align: center;
//   color: #cccccc;
//   &:hover {
//     color: #4d68ff;
//   }
//   &:active {
//     color: #394dbf;
//   }
// `;

const PreButton = styled.span`
  display: inline-block;
  position: absolute;
  right: 0px;
  width: 32px;
  text-align: center;
`;
const ViewingArea = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  transform: translateX(0);
  transition: transform 0.3s;
  width: 3000px;
`;
const CarouselItem = styled.div`
  display: inline-block;
  margin-right: ${props => (props.last ? "0" : "16px")};
`;
const ImgWrap = styled.div`
  display: inline-block;
  width: 230px;
  height: 170px;
  padding: 8px 8px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ImgTitle = styled.p`
  width: 230px;
  line-height: 18px;
  padding: 6px 0 4px 0;
  margin: 0;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #747e90;
  text-align: center;
`;

const OperationWrap = styled.div`
  position: absolute;
  right: 32px;
  bottom: 16px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
`;
const OperationUseWrap = styled.span`
  display: inline-block;
  width: 90px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background-image: linear-gradient(-90deg, #4d68ff 0%, #8093ff 100%);
  border-radius: 16px;
  color: #ffffff;
`;
const OperationCanleWrap = styled.span`
  display: inline-block;
  width: 90px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #4d68ff;
  border-radius: 16px;
  color: #4d68ff;
  margin-left: 8px;
`;
const DeleteWrap = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  display: inline-block;
  width: 16px;
  height: 16px;
  color: red;
  font-size: 16px;
  line-height: 16px;
  background: #fff;
  border-radius: 50%;
`;

const leftpx = {
  "0": "-250px",
  "1": "0",
  "2": "-250px"
};
const inputView = {
  [Widgets.NumberInput]: {
    Input: {
      normal: {
        width: 105,
        margin: {
          left: 10,
          right: 10
        }
      }
    }
  }
};
const sliderView = {
  [Widgets.Slider]: {
    SliderTrack: {
      normal: {
        width: 225,
        height: 4,
        background: { color: "#fff" },
        opacity: 1
      },
      hover: {
        background: { color: "#fff" },
        opacity: 1
      },
      active: {
        background: { color: "#fff" },
        opacity: 1
      }
    },
    SliderPassedWay: {
      normal: {
        height: 4,
        background: { color: "#4D63FF" }
      }
    },
    SliderButton: {
      normal: {
        width: 10,
        height: 10,
        background: { color: "#fff" },
        border: getBorder({ style: "solid", color: "#4D63FF", width: 1 })
      },
      active: {
        background: { color: "#fff" },
        width: 10,
        height: 10,
        border: getBorder({ style: "solid", color: "#4D63FF", width: 1 })
      },
      hover: {
        width: 10,
        height: 10,
        background: { color: "#red" },
        border: getBorder({ style: "solid", color: "#4D63FF", width: 1 })
      }
    },
    SliderMarks: {
      normal: {
        nth: { color: "#747E90", font: { weight: 700, size: 12 } }
      },
      disabled: {
        nth: { color: "#747E90", font: { weight: 700, size: 12 } }
      }
    }
  }
  // margin: { top: 10, right: 20, bottom: 30, left: 40 },
  // padding: { top: 10, right: 20, bottom: 30, left: 40 },
};
let gridCofing ={
  cols: 12,
  rowHeight:50,
}


export default ThemeProvider(
class ReactDragLayout extends React.Component {
  constructor() {
    super();
    let temObj = {...config};
    this.selectedModular =[];
    debugger
    let localStroageConfig = JSON.parse(localStorage.getItem('name')) || [];
    // 匹配关联展示模块
    localStroageConfig && localStroageConfig.gridItems && localStroageConfig.gridItems.length>0 &&localStroageConfig.gridItems.forEach((item)=>{
      let key = item.key;
      let modular = temObj[key];
      if(modular){
        item.component = modular
        delete temObj[key] 
      }
    })
    let items = localStroageConfig.gridItems.length > 0 ?[...localStroageConfig.gridItems] : init() ;
    // 剩余未匹配模块
    for(let key in temObj){
      let obj = temObj[key];
      this.selectedModular.push({titel:obj.title,thumbnail:obj.src,id:key,component:obj})
    }


    function init() {
      let arr = [];
      for (let i=0;i<5;i++){
        arr.push(
        {
          key: i,
          x: 6 * (i % 2),
          y: 3 * (parseInt(i/2)),
          w: 6,
          h: 3,
        })
      }
      return arr;
    }

    


    this.state = {
      items,
      dragMoveLayout: -1,
      selectLayout: -1,
      floatingWindowState: 0, // 浮窗的状态
      value: 1,
      value1: 2,
      isEdit: false,
      listImg: this.selectedModular,
      imgIndex: 0, 
      offsetX: 0,
      allWidth: 30000,
      visible: false,
      position: {},
      modelSelect: '',
      xx: null,
      cols: gridCofing.cols,
      rowHeight: gridCofing.rowHeight
    };
  }
  onResizeStart = () => {
    this.layoutState = "";
    this.resize = true;
    console.log("onResize");
  }
  onResize = () =>{
    console.log("onResize");
    if (this.resize) {
      this.layoutState = "resize";
      this.resize = false;
    }
  }
  onResizeStop = () =>{
    console.log("onResizeStop");
  }
 
  onDragStart = (layout, oldItem, newItem, placeholder, e, element) => {
    this.layoutState = "";
    this.move = true;
    console.log("onDragStart");
  };
  onDrag = (layout, oldItem, newItem, placeholder, e, elemen) => {
    console.log("onDrag");
    if (this.move) {
      this.layoutState = "move";
      this.move = false;
    }
  };
  onDragStop = (layout, oldItem, newItem, placeholder, e, element) => {
    this.move = false;
    this.layoutState = "";
  };


  /**
   * 选择单个面板并显示控件选择框
   */
  selectedPanel = layout => {
    console.log('selectedPanel',this.layoutState,layout.id,this.state.selectLayout,this.state.isEdit )
    if (layout.id === this.state.selectLayout || this.state.isEdit === false)
      return false;
    if (this.layoutState !== "move" && this.layoutState !== "resize" && this.state.isEdit) {
      console.log('selectedPanel222' )
      this.setState({
        selectLayout: layout.key,
        isEdit: false,
        floatingWindowState: 2
      });
    } else {
      this.setState({ selectLayout: -1 });
    }
  };

  onChange = (...agr) => {
    console.log(agr);
  };

  /**
   * 打开操作面板
   */
  openOperationPanel = () => {
    this.state.floatingWindowState === 0
      ? this.setState({ floatingWindowState: 1, isEdit: true, selectLayout: -1 })
      : this.setState({ floatingWindowState: 0, isEdit: false, selectLayout: -1 });
  };
  /**
   * 关闭操作面板
   */
  hiddenOperationPanel = () => {
    this.setState({ floatingWindowState: 2 });
  };

  /**
   * 选中状态切换为拖拽状态并打开操作面板
   */
  selectedSwitchDragAndOpenOperationPanel = () => {
    this.setState({ floatingWindowState: 1, isEdit: true, selectLayout: -1 });
  };

  /**
   * 向前翻页
   */
  previous = () => {
    let offsetX = this.state.offsetX;
    if (offsetX - this.itemStepWidth <= 0) {
      this.setState({ offsetX: 0 });
    } else {
      this.setState({ offsetX: offsetX - this.itemStepWidth });
    }
  };

  /**
   * 向后翻页
   */
  next = () => {
    let offsetX = this.state.offsetX;
    if (this.width - offsetX - this.itemStepWidth <= this.viewingAreaWidth) {
      this.setState({ offsetX: this.lastOffsetX });
    } else {
      this.setState({ offsetX: offsetX + this.itemStepWidth });
    }
  };

  componentDidMount() {
    // 可是窗口宽度
    let viewingAreaWidth = this.viewingArea.clientWidth;
    this.viewingAreaWidth = viewingAreaWidth;
    // 每一个子项宽度
    let itemWidth = this.itemContainer.children[0].offsetWidth;
    // 步长
    this.itemStepWidth = itemWidth + 16;
    // 所有子项的宽度之和
    let allItemWidth = itemWidth * this.state.listImg.length;
    // 所有间距之和
    let allItemMargin = 16 * (this.state.listImg.length - 1);
    // 滚动区域宽度
    let width = allItemWidth + allItemMargin;
    this.width = width;
    // 最大的translateX值
    let lastOffsetX = width - viewingAreaWidth;
    this.lastOffsetX = lastOffsetX;
    this.setState({ allWidth: width });
  }

  deleteGridItem = e => {
    Modal.delete({
      align: {
        points: ["tr", "bl"],
        offset: [-12, 12],
        useCssTransform: true,
        overflow: { adjustX: true, adjustY: true }
      },
      target: this.$container,
      position: { left: (e.clientX - 40)+'px', top: (e.clientY + 20)+'px'}
    })
  };

  containerRef = ele => {
    this.$container = ele;
  };

  userTheme = () =>{
    let tem =  this.selectedModular.filter((item)=>{
      return item.id === this.state.modelSelect
    })
    console.log('userTheme', tem)
    let items = this.state.items.map((data)=>{
      console.log(data.id,'=====',this.state.selectLayout)
      if(data.key === this.state.selectLayout){
        data.component = tem[0].component
        data.id = tem[0].id
        return  data
      }
      return data;
    })
    console.log('newitems',items)
    this.setState({items:[...items],selectLayout:-1});
  }
  cancelSelect = () => {
    this.setState({selectLayout:-1})

    // let data = {
    //   gridData:{ // 拖拽板块数据
    //     gridItems:[  // 拖拽项数据
    //       {
    //         id: 'modular1', // 关联的模块id （没有为空）
    //         key: 1, // 拖拽块的唯一表示
    //         x: 1, // x轴位置 （栅栏）
    //         y: 2, // y轴位置（栅栏）
    //         w: 3, // 宽度站位（栅栏）
    //         h: 4, // 高度站位（rowHeight）
    //       }
          
    //     ],
    //     cols: 12, // 栅栏数
    //     margin:[10,10], //拖拽区域之间的间距
    //   }
    // }
  }
  selectModule = (item) => {this.setState({modelSelect:item.id})}

 


  render() {
    let dataItem = this.state.items;
    console.log(this.state.cols)
    return (
      <React.Fragment>
        <GridLayout
          cols={this.state.cols}
          isDraggable={this.state.isEdit}
          isResizable={this.state.isEdit}
          style={layoutStyle}
          verticalCompact={false}
          rowHeight={this.state.rowHeight}
          onDragStart={this.onDragStart}
          onDrag={this.onDrag}
          onDragStop={this.onDragStop}
          compactType={"vertical"}
          onResizeStart={this.onResizeStart}
          onResize={this.onResize}
          onResizeStop={this.onResizeStop}
        >
          {dataItem.map(item => (
            <GridItemContainer
              onClick={() => this.selectedPanel(item)}
              className={{
                mask: this.state.isEdit,
                "layout-selected": this.state.selectLayout === item.key
              }}
              key={item.key}
              data-grid={item}
            >
              {this.state.selectLayout === item.id && (
                <DeleteWrap ref={this.containerRef} id="xxxxx">
                  <Icon
                    iconClass={"lugia-icon-reminder_minus_circle"}
                    onClick={this.deleteGridItem}
                  />
                </DeleteWrap>
              )}
              {item.component && <item.component/>}
            </GridItemContainer>
          ))}
        </GridLayout>

        <FloatingWindowContainer
          style={{ right: leftpx[this.state.floatingWindowState] }}
        >
          <FloatingWindonLeftContainer>
            <FloatingWindonLeft onClick={this.openOperationPanel}>
              . . . .
            </FloatingWindonLeft>
            {this.state.floatingWindowState === 2 && (
              <FloatingWindowRight
                onClick={this.selectedSwitchDragAndOpenOperationPanel}
              >
                <Icon iconClass={"lugia-icon-financial_layout"}></Icon>
              </FloatingWindowRight>
            )}
          </FloatingWindonLeftContainer>
          <FloatingWindowcontent
            style={{
              transform:
                this.state.floatingWindowState === 0 ||
                this.state.floatingWindowState === 2
                  ? "scale(0,0)"
                  : "scale(1,1)"
            }}
          >
            <div className="lable" key="x">
              <span>
                水平间距<i>(px)</i>
              </span>
              <span>
                垂直间距<i>(px)</i>
              </span>
            </div>
            <div className="input_group">
              <div className="input_wrap">
                <Theme config={inputView}>
                  <NumberInput
                    size={"small"}
                    value={this.state.value}
                  ></NumberInput>
                </Theme>
              </div>
              <div className="input_wrap">
                <Theme config={inputView}>
                  <NumberInput
                    size={"small"}
                    value={this.state.value}
                  ></NumberInput>
                </Theme>
              </div>
            </div>
            <div className="input_cols_wrap">
              <p className="input_cols_lable">栅格数：</p>
              <div className="input_cols_slider">
                <Theme config={sliderView}>
                  {this.state.floatingWindowState === 1 && (
                    <Slider
                      defaultValue={2}
                      tips
                      marks={{
                        2: "2",
                        3: "3",
                        4: "4",
                        6: "6",
                        8: "8",
                        12: "12"
                      }}
                    />
                  )}
                </Theme>
              </div>
            </div>
            <div className="add_panel_wrap" onClick={()=>{console.log(123123);this.setState({cols:5})}}>
              <Icon iconClass={"lugia-icon-reminder_plus"} />
              &nbsp;<span>增加区块</span>
            </div>
            <div className="shrink_wrap">
              <Icon
                iconClass={"lugia-icon-direction_arrows_alt"}
                onClick={this.hiddenOperationPanel}
              />
            </div>
          </FloatingWindowcontent>
        </FloatingWindowContainer>
        
        <CarouselContainer style={{bottom: this.state.selectLayout === -1 ? '-300px' : '16px' }}>
          <MyCarousel>
            <NextButton onClick={this.previous}  themeProps={this.props.getPartOfThemeProps('Container')} >
              <Icon iconClass={"lugia-icon-direction_caret_left"} />
            </NextButton>
            <PreButton onClick={this.next}>
              <Icon iconClass={"lugia-icon-direction_caret_right"} />
            </PreButton>
            <ViewingArea ref={node => (this.viewingArea = node)}>
              <ItemContainer
                ref={node => (this.itemContainer = node)}
                style={{
                  transform: `translateX(-${this.state.offsetX}px)`,
                  width: `${this.state.allWidth}px`
                }}
              >
                {this.state.listImg.map((item, index) => (
                  <CarouselItem last={index === this.state.listImg.length - 1}>
                    <ImgWrap className={item.id === this.state.modelSelect?'modelSelect':''} onClick={() => this.selectModule(item)}>
                      <img src={item.thumbnail} alt={item.title} />
                    </ImgWrap>
                    <ImgTitle>{item.title}</ImgTitle>
                  </CarouselItem>
                ))}
              </ItemContainer>
            </ViewingArea>
          </MyCarousel>
          <OperationWrap>
            <OperationUseWrap onClick={this.userTheme}>使用</OperationUseWrap>
            <OperationCanleWrap onClick={this.cancelSelect}>取消</OperationCanleWrap>
          </OperationWrap>
        </CarouselContainer>
      </React.Fragment>
    );
  }
},
'xxx',
{ hover: true, active: true, focus: true }
)

