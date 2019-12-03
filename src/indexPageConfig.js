
import config from '../src/IndexModular/index'


let arrayConfing = [];
for(let key in config){
  let item = {
    title: config[key].title,
    thumbnail: config[key].src,
    component: config[key],
    id: key
  }
  arrayConfing.push(item)
}
export default arrayConfing
