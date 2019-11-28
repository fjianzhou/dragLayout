## 解决样式冲突的方案
- 1、命名约定类
    - 该类CSS模块化方案主要用来规范CSS命名，最常见的是BEM，当然还有OOCSS等，在构建工具出现之前，大多数都是在CSS命名上做文章
## BEM（BlockElementModifier）

- BlockElementModifier其实是块（block）、元素（element）、修饰符（modifier）。这三个部分使用`__`与`--`连接
```
.块__元素--修饰符{}
block 代表了更高级别的抽象或组件
block__element 代表 block 的后代，用于形成一个完整的 block 的整体
block--modifier代表 block 的不同状态或不同版本
```
- 命名规则
    - 驼峰式： solutionTitle、solutionDetail
    - 用横杠连接： solution-title、solution-detail
    - 下划线连接： solution_title、solution_detail
- 2、CSS in JS
    - 彻底抛弃CSS，用javascript来写CSS规则，常见的有styled-components
- 3、使用JS来管理样式
    - 使用JS编译原生的CSS文件，使其具备模块化的能力，最常见的就是CSS Modules

## create-react-app 中使用CSS Module

## react-router 和 react-router-dom区别

-  react-router   只提供核心的路由和函数。一般的应用不会直接使用
-  react-router-dom   供浏览器/Web应用使用的API。依赖于react-router， 同时将react-router的API重新暴露(export)出来；  

## react-grid-layout 使用

#### 安装

- npm install react-grid-layout  |  yarn add react-grid-layout

#### 使用

- 引入组件

  ```javascript
  import ReactGridLayout from "react-grid-layout";
  ```

- 引入样式

  ```javascript
  import 'react-grid-layout/css/styles.css'
  ```

- ReactGridLayout 组件

  - 基本Props参数

    - width: number 拖拽区域的宽度（边间）
    
    - autoSize: ?boolean = true 容器高会随着拖动的变化而变化
    
    - cols  一行等分多少列
    
    - draggableCancel: ?string = '.className'  有这个类名的标签元素无法拖住移动，其他元素均可拖动
    
    - draggableHandle: ?string = '.className'  处了有这个类名的标签元素可以拖住移动，其他元素均不可拖住移动
    
    - compactType: ?('vertical' | 'horizontal') = 'vertical'  排布优先垂直或水平 
    
    - verticalCompact: ?boolean = true    排布优先垂直 
    
    - layout: ?array = null  | [{i: string, x: number, y: number, w: number, h: number}]
      - i: string  与拖拽子项的关联关系，子项标签的key与之对应
    - x: number 占的x轴位置
      - y: number 占的y轴位置
    - w: number 占多少格宽度
      - h: number 占多少个高度
    - minW:? number  拖拽缩小宽度最小值
      - maxW:? number 拖拽放大宽度最大值
    - static:?boolean = false  false可以被拖拽   true 位置定死不可拖拽
    
  - margin: ?[number, number] = [10, 10]  每个子项之间
    
  - containerPadding: ?[number, number] = margin, 拖拽区域的向下|左右间距
    
  - rowHeight: ?number = 150,    设置每个拖拽子项的初始高度
    
  - isDraggable: ?boolean = true,  设置为false时，所有拖拽子项均不可移动
    
  - isResizable: ?boolean = true, 设置为false是，所有拖拽子项均不可改变大小
    
  - useCSSTransforms: ?boolean = true, 设置为false是，使用 position top/left进行定位 
    
    - preventCollision: ?boolean = false;  设置为true，拖拽子项被拖动时不会更改位置
    
  - onLayoutChange: (layout: Layout) => void,   当子项被移动或者放大结束后调用这个回调函数，并返回最终位置和大小等信息
    
  - onDragStart: ItemCallback,
    
    - ```
        type ItemCallback = (layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,placeholder: LayoutItem, e: MouseEvent, element: HTMLElement) => void;
      ```
    
  - onDrag: ItemCallback,
    
  - onDragStop: ItemCallbac
    
    - onResizeStart: ItemCallback
    
    - onResize: ItemCallback
    
    - onResizeStop: ItemCallback,
    
    - onDrop: (elemParams: { x: number, y: number, e: Event }) => void 当某个拖拽元素被删除时调用

- 响应式 ResponsiveGridLayout 组件

  - 定义响应式ResponsiveGridLayout 组件

    ```javascript
    import { Responsive, WidthProvider } from 'react-grid-layout';
    const ResponsiveGridLayout = WidthProvider(Responsive);
    ```

  - 基本Props参数
    - breakpoints: ?Object = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} 设置个响应式区间
    - cols: ?Object = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},   各个响应式区间对应的列数
    - margin: [number, number] | {lg:[nuber,number]...} 各个响应式区间对应的个子项的边距
    - containerPadding: [number, number] | {lg:[nuber,number]...} 各个响应式区间容器对应的边距
    - layouts: {lg: Layout, md: Layout, ...}  各个响应式区间对应的子项的位置大小配置
      - [{i: string, x: number, y: number, w: number, h: number}]

- Grid item Props

  - 定义单个拖拽子项

    ```javascript
    import GridLayout from 'react-grid-layout';
    
    class MyFirstGrid extends React.Component {
      render() {
        return (
          <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
            <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
            <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW:4}}>b</div>
            <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
          </GridLayout>
        )
      }
    }
    ```

  - 基本Props参数
    - data-grid?: object 
      - i: string   与区域对应的key
      - x: number, x轴坐标
      - y: number, y轴坐标
      - w: number, 宽度
      - h: number, 高度
      - minW: ?number = 0, 最小拖拽宽
      - maxW: ?number = Infinity, 最大拖拽宽
      - minH: ?number = 0,最小拖拽高
      - maxH: ?number = Infinity,最大拖拽高
      - static: ?boolean = false,  设置为true 固定位置固定大小
      - isDraggable: ?boolean = true, 设置为false 不可拖拽
      - isResizable: ?boolean = true 设置为false 不可改变大小

  


# react 小计

static getDerivedStateFromProps （nextProps ，prevState） 16.4新增  将props数据同步到State中

- 参数

  - nextProps 下一次的prop对象

  - prevState 上一次的state对象

- 返回值 （对象或者null）

  - 返回值会和原有的state合并


# rc-align包 用于相对某个目标做定位

#### 安装

- npm install rc-align使用使用

#### 属性 props

- target 对其目标

  - type
    -  function():HTMLElement  ||  { pageX: number, pageY: number } || { clientX: number, clientY: number } 
      - pageX 整个页面的
      - clientX 可视区域

  - default
    - function(){return window;} 

- align 对齐参数

  -  type 
    - Object   

  - value {points,offset,targetOffset, useCssTransform  }

    - points 对其方式

      - type 
        - Array ['cc','cc']    备注：'t'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right) 
      - array[0] 源的对其方式
      - array[1] 目标的对其方式

    - offset 相对自己进行位移

      - type 
        - Array [x:number, y:number] 

      - array[0] 相对于自己x轴的平移量
      - array[1] 相对于自己y轴的平移量

    - targetOffset 相对目标位移

      - type 
        - Array [x:number, y:number] 

      - array[0] 相对于目标x轴的平移量
      - array[1] 相对于目标y轴的平移量

    - monitorWindowResize  调整窗口大小时是否重新对齐

      - type 
        - Boolean  

      - default
        - false 

-  onAlign 对齐后调用callback

  -  function(source:HTMLElement, align:Object) 

#### 使用

```javascript
import RcAlign from 'rc-align';
render() {
    return (
     	<Align target={this.state.point} align={align}>
          <div
            style={{
              position: 'absolute',
              width: 100,
              height: 100,
              background: 'rgba(0, 255, 0, 0.5)',
              pointerEvents: 'none',
            }}
          >
            Align
          </div>
        </Align>
    );
 }
```



 align 



？？？？transform matrix函数