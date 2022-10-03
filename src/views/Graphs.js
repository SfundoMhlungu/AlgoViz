import Canvas from "../components/Canvas"
import { createElement } from "atomicus/lib/esm"
import * as Comlink from "comlink"
import { Wait } from "../utils/waitforSecs"
import Pub from "../Octopus"

const wh = {width: "300px", height: "300px"}


let pause = false;


/**
 * @type {HTMLCanvasElement}
 */
 const BFS = createElement(Canvas(wh))

/**
 * @type {HTMLCanvasElement}
 */
 const DFS = createElement(Canvas(wh))


const BFSctx = BFS.getContext("2d")
const DFSctx = DFS.getContext("2d");
// console.log(BFS)





async function initDFS(){
    let storeWorld = []
     const DFSObject = Comlink.wrap(
        new Worker(
            new URL("../threads/Graphs/DFS.js", import.meta.url),
            {type: "module"}
            )
    )
    
    const initial = await DFSObject.initial;
    let w = Math.round(300 / initial[0].length)
    initial.forEach((row, i) => {
        row.forEach((cell, j)=> {
            DFSctx.fillStyle = cell.color;
            DFSctx.fillRect(j * w, i * w, w, w)
          
        })
      });

      async function update(){
        if(!pause){
            // console.log("graph is paused")
           

       
         let next = await DFSObject.DFSnext.next();
         if(next.done) {
            let p =  await  DFSObject.path 
            let prev = {row: 3, col: 3, color: "#e77600", type: "start", parent: null}; 


              async function move(){
                  let p_ = p.pop()
               //   console.log(current, "o")
                  if(p.length > 0){
                   //   console.log("current", current)
                   storeWorld[p_.row][p_.col] = {...storeWorld[p_.row][p_.col], color: "#e77600"}
                   storeWorld[prev.row][prev.col].color = "white"
                   prev = storeWorld[p_.row][p_.col] 
                   storeWorld.forEach((row, i) => {
                           row.forEach((cell, j)=> {
                            DFSctx.fillStyle = cell.color;
                            DFSctx.fillRect(j * w, i * w, w, w)
                           
                           })
                   })
                 
                  }else{
                      return;
                  }
                  console.log("waited a sec")
                  await Wait(.1);
                  await move()
                  
              }
              move()
             return;
         };
        //  console.log(next)
        
          if(Array.isArray(next.value) && !next.done){
              storeWorld =  next.value;
            next.value.forEach((row, i) => {
                row.forEach((cell, j)=> {
                    DFSctx.fillStyle = cell.color;
                    DFSctx.fillRect(j * w, i * w, w, w)
                  
                })
          });
         }
        }
         await Wait(.1);
         await update();
}  


update()

// follow path



    
}


 async function init(){
   
      let storeWorld = []


    const BFSObject = Comlink.wrap(
        new Worker(
            new URL("../threads/Graphs/BFS.js", import.meta.url),
            {type: "module"}
            )
    )




   const initial = await BFSObject.initial;
  
   
   let w = Math.round(300 / initial[0].length)
   console.log(w)
   console.log(initial, "initial graph")/
   initial.forEach((row, i) => {
           row.forEach((cell, j)=> {
               BFSctx.fillStyle = cell.color;
               BFSctx.fillRect(j * w, i * w, w, w)
             
           })
   });

    async function update(){
            if(!pause){
                // console.log("graph is paused")
               

           
             let next = await BFSObject.BFSnext.next();
             if(next.done) {
                 console.log("BFS done")
                 let p =  await  BFSObject.path 
                 let prev = {row: 3, col: 3, color: "#e77600", type: "start", parent: null}; 


                   async function move(){
                       let p_ = p.pop()
                    //   console.log(current, "o")
                       if(p.length > 0){
                        //   console.log("current", current)
                        storeWorld[p_.row][p_.col] = {...storeWorld[p_.row][p_.col], color: "#e77600"}
                        storeWorld[prev.row][prev.col].color = "white"
                        prev = storeWorld[p_.row][p_.col] 
                        storeWorld.forEach((row, i) => {
                                row.forEach((cell, j)=> {
                                    BFSctx.fillStyle = cell.color;
                                    BFSctx.fillRect(j * w, i * w, w, w)
                                
                                })
                        })
                      
                       }else{
                           return;
                       }
                       console.log("waited a sec")
                       await Wait(.1);
                       await move()
                       
                   }
                   move()
                //  p.reverse().forEach(async(p_, i)=> {

                        
                //         await Wait(2);
                //        storeWorld[p_.row][p_.col] = {...storeWorld[p_.row][p_.col], color: "#e77600"}
                //        storeWorld[prev.row][prev.col].color = "white"
                //        prev = storeWorld[p_.row][p_.col] 
                //        storeWorld.forEach((row, i) => {
                //         row.forEach((cell, j)=> {
                //             BFSctx.fillStyle = cell.color;
                //             BFSctx.fillRect(j * w, i * w, w, w)
                          
                //         })
                //      });
                 
                       
                //  })
                //  console.log(p, storeWorld, "path")
                 return;
             };
            //  console.log(next)
            
              if(Array.isArray(next.value) && !next.done){
                  storeWorld = next.value;
                next.value.forEach((row, i) => {
                    row.forEach((cell, j)=> {
                        BFSctx.fillStyle = cell.color;
                        BFSctx.fillRect(j * w, i * w, w, w)
                      
                    })
              });
             }
            }
             await Wait(.1);
             await update();
    }  


  update()



 }


Pub.subscribe("pauseGraph", () => pause = true)

Pub.subscribe('graphs', ()=> {
    // console.log("graphs called")
    if(pause){
        pause = false
    }else{
        init();
        initDFS();
    }
  
})

 

// apply DRY same as Sort code 
 function eachCanvasParent(canvas, title){
    return {
        tag: "div",
        attrs: {

        },
        children: [
            {
                tag: "h3", 
                children: [title]
                
            },
            canvas
        ]
    }
}

function canvasWrapper(canvas, title){
    return {
        tag: "div", 
        attrs: {
            class: "fl fl-ai-c fl-jc-c sortCanvas",
           
        },
        children: [eachCanvasParent(canvas, title)]
    }
}




export default function Graphs(data){






    return {
        tag: "div",
        attrs:{
            class: "grid-ish"
        },
        children: [canvasWrapper(BFS, "Breadth First Search"), canvasWrapper(DFS, "Depth First Search")]
            
        
    }
}


//