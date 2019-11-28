import React from "react";
import styled from "styled-components";
import { WidthProvider, Responsive } from "react-grid-layout";
import "./grid-layout.css";
import MyTest from "../components/my-test";
import Icon from "@lugia/lugia-web/dist/icon";
import NumberInput from "@lugia/lugia-web/dist/number-input";
import Slider from "@lugia/lugia-web/dist/slider";
import Theme from "@lugia/lugia-web/dist/theme";
import Widgets from "@lugia/lugia-web/dist/consts";
import { getBorder } from "@lugia/theme-utils";
import { Modal } from "../components";
import RCAlign from "rc-align";
const GridLayout = WidthProvider(Responsive);

const layoutStyle = {
  background: "#F5F5F9",
  height: "1000px"
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
const NextButton = styled.span`
  display: inline-block;
  position: absolute;
  left: 0;
  width: 32px;
  text-align: center;
  color: #cccccc;
  &:hover {
    color: #4d68ff;
  }
  &:active {
    color: #394dbf;
  }
`;

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
class ReactDragLayout extends React.Component {
  static defaultProps = {
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 50
  };
  constructor() {
    super();
    this.state = {
      items: ["a", "b", "c"].map((item, index) => {
        return {
          key: item,
          x: index * 2,
          y: 0,
          w: 5,
          h: 5
        };
      }),
      dragMoveLayout: -1,
      selectLayout: -1,
      floatingWindowState: 0, // 浮窗的状态
      value: 1,
      value1: 2,
      isEdit: false,
      listImg: [
        {
          title: "美女",
          url:
            "http://attach.bbs.miui.com/forum/201811/19/072123rjmrmsjnuv3msepw.jpeg"
        },
        {
          title: "美女1",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574768495800&di=a22024085e9d6338f8af62d7c65bb349&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-22%2F5b03acbf22dc6.jpg"
        },
        {
          title: "美女2",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574768495799&di=eebd24b7a0dd5ad2b3532cc36996b014&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-11-02%2F5bdbfc417ee53.png"
        },
        {
          title: "美女3",
          url:
            "http://img.zcool.cn/community/01c31a5dc24dbca8012163babc1e2a.jpg@2o.jpg"
        },
        {
          title: "美女4",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574768495799&di=04e7a2bf2bcf808d49caaa4a8b29bc86&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F30%2F20120830032847_d3QFd.jpeg"
        },
        {
          title: "美女5",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574768495796&di=1f65d4e766f613064634ce200c3e3868&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-09-30%2F5bb06b4c4d3bd.png"
        },
        {
          title: "美女6",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574768552549&di=7b27109a558944062744d5faf814cc48&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F589c2dec7b111.jpg"
        },
        {
          title: "美女6",
          url:
            "http://img.zcool.cn/community/01ff9e57518a1d6ac72525aecf8785.jpg"
        },
        {
          title: "美女7",
          url:
            "http://img.zcool.cn/community/01c31a5dc24dbca8012163babc1e2a.jpg@2o.jpg"
        }
      ],
      imgIndex: 0,
      offsetX: 0,
      allWidth: 30000,
      visible: false,
      position: {}
    };
  }
  onDragStart = (layout, oldItem, newItem, placeholder, e, element) => {
    this.layoutState = "";
    this.move = true;
    console.log("onDragStart");
  };
  onDragStop = (layout, oldItem, newItem, placeholder, e, element) => {
    this.setState({ dragMoveLayout: -1 });
    this.move = false;
    console.log("onDragStop");
  };
  onDrag = (layout, oldItem, newItem, placeholder, e, elemen) => {
    console.log("onDrag");
    if (this.move) {
      this.layoutState = "move";
      this.move = false;
      this.setState({ dragMoveLayout: oldItem.i });
    }
  };

  /**
   * 选择单个面板并显示控件选择框
   */
  selectedPanel = layout => {
    if (layout.key === this.state.selectLayout || this.state.isEdit === false)
      return false;
    if (this.layoutState !== "move" && this.state.isEdit) {
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
      ? this.setState({ floatingWindowState: 1, isEdit: true })
      : this.setState({ floatingWindowState: 0, isEdit: false });
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
    console.log(e.clientX - 40, e.clientY + 20);
    this.setState({
      visible: true,
      position: { left: (e.clientX - 40)+'px', top: (e.clientY + 20)+'px' }
    });
  };

  containerRef = ele => {
    this.$container = ele;
  };

  getTarget = () => {
    if (!this.$container) {
      this.$container = document.getElementById('xxxxx');
    }
    return this.$container;
  };

  render() {
    let dataItem = this.state.items;
    return (
      <React.Fragment>
        <GridLayout
          isDraggable={this.state.isEdit}
          isResizable={this.state.isEdit}
          style={layoutStyle}
          verticalCompact={false}
          onDrag={this.onDrag}
          rowHeight={this.props.rowHeight}
          onDragStart={this.onDragStart}
          onDragStop={this.onDragStop}
          onResize={() => {}}
          onResizeStop={() => {}}
          compactType={"vertical"}
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
              {this.state.selectLayout === item.key && (
                <DeleteWrap ref={this.containerRef} id="xxxxx">
                  <Icon
                    iconClass={"lugia-icon-reminder_minus_circle"}
                    onClick={this.deleteGridItem}
                  />
                </DeleteWrap>
              )}
              <MyTest></MyTest>
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
            <div className="add_panel_wrap">
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
        <CarouselContainer>
          <MyCarousel>
            <NextButton onClick={this.previous}>
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
                    <ImgWrap>
                      <img src={item.url} alt={item.title} />
                    </ImgWrap>
                    <ImgTitle>{item.title}</ImgTitle>
                  </CarouselItem>
                ))}
              </ItemContainer>
            </ViewingArea>
          </MyCarousel>
          <OperationWrap>
            <OperationUseWrap>使用</OperationUseWrap>
            <OperationCanleWrap>取消</OperationCanleWrap>
          </OperationWrap>
        </CarouselContainer>
        {this.state.visible && (
          <RCAlign
            align={{
              points: ["tr", "bl"],
              offset: [-12, 12],
              useCssTransform: true,
              overflow: { adjustX: true, adjustY: true }
            }}
            target={this.getTarget}
          >
            <Modal></Modal>
          </RCAlign>
        )}
        {/*         
        <FloatingWindowContainer style={{right:this.state.floatingWindowState===0?'-250px':'0'}}>
          <FloatingWindonLeftContainer>
            <FloatingWindonLeft onClick={()=>{this.state.floatingWindowState===0?this.setState({floatingWindowState:1}):this.setState({floatingWindowState:0})}}>
              .
              .
              .
              .
            </FloatingWindonLeft>
            { this.state.floatingWindowState === 2 &&
              <FloatingWindowRight  onClick={()=>{}} >
                <Icon iconClass={"lugia-icon-financial_layout"}/>
              </FloatingWindowRight>
            }
          </FloatingWindonLeftContainer>
          <FloatingWindowcontent >
            <div className="lable">
              <span>水平间距<i>(px)</i></span>
              <span>垂直间距<i>(px)</i></span>
            </div>
            <div className="input_group">
              <div className="input_wrap">
                <Theme config={inputView}><NumberInput size={"small"} value={this.state.value}></NumberInput></Theme>
              </div>
              <div className="input_wrap">
                <Theme config={inputView}><NumberInput size={"small"} value={this.state.value}></NumberInput></Theme>
              </div>
            </div>
            <div className="input_cols_wrap">
              <p className="input_cols_lable">栅格数：</p>
              <div className="input_cols_slider">
              {this.state.floatingWindowState===1 &&<Theme config={sliderView}>
                  <Slider defaultValue={2} tips marks={{
                    2: '2',
                    3: '3',
                    4: '4',
                    6: '6',
                    8: '8',
                    12: '12',
                  }}/>
                </Theme>}
              </div>
            </div>
            <div className="add_panel_wrap">
              <Icon iconClass={"lugia-icon-reminder_plus"}/>&nbsp;<span>增加区块</span>
            </div>
            <div className="shrink_wrap">
              <Icon iconClass={"lugia-icon-direction_arrows_alt"}/>
            </div>
          </FloatingWindowcontent>
        </FloatingWindowContainer> */}
      </React.Fragment>
    );
  }
}
export default ReactDragLayout;
