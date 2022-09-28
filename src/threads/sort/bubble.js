import * as Comlink from  "comlink"

import data from "./data";


class bubbleSort{
    constructor(){
      this.array = data
      this.sorter =  this.Sort(); 
      // this.initial();
  }
  
  
  
  *Sort(){
     
    // for(let i = 0; i < this.array.length; i++){
    //     let current = this.array[i]
    //     while(i > 0 && this.array[i] < this.array[i-1]){
    //         this.array[i] =   this.array[i-1]
    //         i--;
    //         this.array[i] =  current
    //         yield this.array
    //     }
      
    // }
  
    let swaps = false
  for (let i = 0; i < this.array.length; i++){
        for(let j = 0; j < this.array.length - i; j++){
            // console.log(l[j])
            if(this.array[j] > this.array[j+1]){
               swaps = true
              let temp = this.array[j] 
              this.array[j] = this.array[j+1]
              this.array[j+1] = temp
              yield this.array
            }
  
        }
      if(!swaps){
        console.log("no swaps", i)
        // console.log(l)
        yield true
      }    
    
    swaps = false
    yield this.array
  }
      
   
       
  
    // yield this.array
    yield true
  }
  
  get Sorted(){
      return this.sorter.next()
  }
  
  
  }
  

  let r = new bubbleSort()



  Comlink.expose(r);