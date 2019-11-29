
import config from '../src/IndexModular/index'
console.log('xxxx',config)
let arrayConfing = [];
// const guid = () => {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//     return v.toString(16);
//   });
// }

for(let key in config){
  let item = {
    title: config[key].title,
    thumbnail: config[key].src,
    fn: config[key],
    id: key
  }
  arrayConfing.push(item)
}

export default arrayConfing