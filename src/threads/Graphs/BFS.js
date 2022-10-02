import * as Comlink from  "comlink"

const world = [
    
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1 ],
    [1, 0, 0, 2, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 3, 0, 0, 0, 0, 0, 0],


]


const pathlokkUp = {}
const path = []



class BFS{
    constructor(){
      this.BFSnext =  this.BFS(); 
      this.initial = this.init();
      this.startCell ={row: 3, col: 3, color: "red", type: "start", parent: null}; 
    //  this.BFS()
  }
  
  init(){
   world.forEach((row, i)=> {
         row.forEach((colVal, j)=> {
               if(colVal === 1){
                    // wall 
                    world[i][j] = {row: i, col: j, color: "black", type: "wall"}
               }else if(colVal === 2){
                   // start point 
                   this.startCell = {row: i, col: j, color: "red", type: "start", parent: null}
                   console.log(this.startCell, "this start cell")
                   world[i][j] = this.startCell
                
               }else if(colVal === 3){
                   world[i][j] = {row: i, col: j, color: "yellow", type: "target"}


               }else{
                world[i][j] = {row: i, col: j, color: "lightblue", type: "empty"}
                   
               }
         })
   })
   
//    setTimeout(() => {
//     // this.BFS() 
//    }, 1000);
   
    return  world
  }
  
  *BFS(){  
    //   console.log("calling BFS")
   
     const queue = [this.startCell]
     pathlokkUp[`${this.startCell.row}-${this.startCell.col}`] = this.startCell;
    //  console.log(queue)
   

     while(queue.length > 0){
         let current = queue.shift()
     
 
         let neigbours = [
             {row: current.row - 1, col: current.col}, // top
             {row: current.row, col: current.col - 1}, // left
             {row: current.row, col: current.col + 1}, // right
             {row: current.row + 1, col: current.col}  // bottom 
         ]


        for(let n of neigbours){
             if(n.row < 0 || n.row > world.length){
                 continue
             }
             if(n.col < 0 || n.col > world[0].length){
                 continue
             }

             if(!world[n.row]){
                 continue
             }
            let m = world[n.row][n.col]
            // console.log(m, "m")
            if(!m){
                continue
            }
    
            if(m.type === "wall"){
                continue
            }
    
            if(m.type === "empty"){
                if(pathlokkUp[`${m.row}-${m.col}`]){
                    continue
                }
    
                m.color = "white";
                m.parent = `${current.row}-${current.col}`
                pathlokkUp[`${m.row}-${m.col}`] = m
    
            }

            
        if(m.type === "target"){
            m.parent = `${current.row}-${current.col}`
            pathlokkUp[`${m.row}-${m.col}`] = m
            current = m
            // path = []
            // find the path back
        //     console.log(pathlokkUp)
        //     console.log(m.parent)
        //   current =   pathlokkUp[m.parent]
            if(path.length > 0){
                console.log("fucken return")
               return;
            }
          while(current.type !== "start"){
              path.push(current)
            //   console.log('Look up', pathlokkUp[current.parent])
          
              current = pathlokkUp[current.parent]
              current.color = "green"
              if(current.type === "target"){
               
                current.color = "yellow"
            }
              yield world
          }

          console.log(path, "path")

          yield true 

        }


             queue.push(n)
        } 

      yield world

     }

 
      
   
       
  
    // yield true  
  }
  
  get Sorted(){
      return this.sorter.next()
  }
  
  
  }
  

  let BreadthSearch = new BFS()



  Comlink.expose(BreadthSearch);