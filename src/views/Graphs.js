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

// console.log(BFS)

 async function init(){
   
      


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
                 return;
             };
            //  console.log(next)
            
              if(Array.isArray(next.value) && !next.done){
                next.value.forEach((row, i) => {
                    row.forEach((cell, j)=> {
                        BFSctx.fillStyle = cell.color;
                        BFSctx.fillRect(j * w, i * w, w, w)
                      
                    })
              });
             }
            }
             await Wait(.020);
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
