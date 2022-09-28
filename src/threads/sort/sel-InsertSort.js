import * as Comlink from  "comlink"
import data from "./data";
// function randomizeValue(){
//   var value = (1 + 10E-16) * Math.random();


//   if(value > 1.0){
//       return 1.0;
//   }

//   return value;
// }


// function randF(min, max){

//   if(max == null){
//       max = (min == null ? Number.MAX_VALUE: min)
//       min = 0.0
//   }

//   if(min >= max){
//       return
//   }

//   return min  + (max-min) * randomizeValue();
// }


// let data = new Array(100)

// for(let i = 0; i < data.length; i++){
//   data[i] = Math.round(randF(10, 20))
// }



class insertionSort{
   
    constructor(){
        this.array = data
        this.sorter =  this.Sort(); 
        // this.initial();
    }

   
   initial(){
   sole.log(this.array, "initial")
   }

    *Sort(){
       
   for(let i = 0; i < this.array.length; i++){
        let current = this.array[i]
        while(i > 0 && this.array[i] < this.array[i-1]){
            this.array[i] =   this.array[i-1]
            i--;
            this.array[i] =  current
            yield this.array
        }
       
   }
      
     
         
   

      yield true
    }

    get Sorted(){
        return this.sorter.next()
    }



}


let s = new insertionSort()
// let r =  new bubbleSort();




Comlink.expose(s)

// const m = setInterval(() => {
//     let v = s.sorter.next()
//     if(v.done){
//         clearInterval(m)
//     }
//      console.log(v.value, "sorted")
// }, 1);