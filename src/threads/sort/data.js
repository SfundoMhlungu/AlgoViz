
function randomizeValue(){
    var value = (1 + 10E-16) * Math.random();
  
  
    if(value > 1.0){
        return 1.0;
    }
  
    return value;
  }
  
  
  function randF(min, max){
  
    if(max == null){
        max = (min == null ? Number.MAX_VALUE: min)
        min = 0.0
    }
  
    if(min >= max){
        return
    }
  
    return min  + (max-min) * randomizeValue();
  }
  

let data = new Array(100)

for(let i = 0; i < data.length; i++){
  data[i] = Math.round(randF(10, 20))
}

export default data