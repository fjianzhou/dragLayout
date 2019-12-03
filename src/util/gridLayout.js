
let configObj = {
  modularCount : 5,
  modularWidth : 5,
  modularHeight : 3,
  gridColumn : 12,
  margin: [10,10]
}

// 没有缓存数据是初始化GridItem位置信息
export const initGridItems = (option) =>{
  option = {...configObj,...option}
  console.log(option)
  let gridItems = [];
  for (let i=0;i<option.modularCount;i++){
    gridItems.push({
      key: i,
      x: 6 * (i % 2),
      y: 3 * (parseInt(i/2)),
      w: option.modularWidth,
      h: option.modularHeight,
    })
  }
  return {gridItems,cols:option.gridColumn, margin:option.margin}
}

// 匹配关联展示模块
export const initLocalStorageGridItem = (data,temObj) =>{
  if(data && data.gridItems && data.gridItems.length <=0){
    return null
  }
  data.gridItems.forEach((item)=>{
    let key = item.key;
    let modular = temObj[key];
    if(modular){
      item.component = modular
      delete temObj[key] 
    }
  }) 
  return data
}