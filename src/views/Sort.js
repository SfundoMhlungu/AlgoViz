import Canvas from "../components/Canvas"
import { createElement } from "atomicus/lib/esm"
import * as Comlink from "comlink"
const wh = {width: "300px", height: "300px"}

/**
 * @type {HTMLCanvasElement}
 */
const bubbleSort = createElement(Canvas(wh))
/**
 * @type {HTMLCanvasElement}
 */
const insertionSort = createElement(Canvas(wh))
const mergeSort = createElement(Canvas(wh))



let firstinsertionPass = true;
let insertionBarWidth = 0;

const insertionCtx = insertionSort.getContext("2d");
const bubbleCtx =  bubbleSort.getContext('2d')
// insertionCtx.fillRect(10, 10, 100, 100)



insertionCtx.fillStyle = "#00001e"
bubbleCtx.fillStyle  =   "#00001e"

async function draw(s){
    
}

async function init(){
    let inte = null;
    let insertionDone = false;
    const s = Comlink.wrap(
        new Worker(
            new URL("../threads/sort/sel-insertSort.js", import.meta.url),
            {type: "module"}
            )
    )

    // console.log(s.insertion, "s")
//  console.log(await new s())
//      const instance = await new s()
//      console.log(instance)
//      return;
//    console.log(s.initial(), "initial array")


   /**
    * @type {IteratorResult}
    */
    let v =  await s.sorter.next()
    if(firstinsertionPass){
     
        
       insertionBarWidth = insertionSort.clientWidth / v.value.length;
       console.log("each bar width",insertionBarWidth)
    }


   async function update(int){

       if(!v.done){
        // console.log(v.value)
      
        if(v.value == true) {
           insertionDone = true;
        //    one = one();
           clearInterval(int)
            return
        };
        insertionCtx.clearRect(0, 0, insertionSort.clientWidth, insertionSort.clientHeight)
        v.value.forEach((val, i)=> {
          insertionCtx.fillRect(i * insertionBarWidth,  insertionSort.clientHeight, insertionBarWidth - (insertionBarWidth/4), -(val * 13));
          })
        v = await s.sorter.next()
            
        


       }

    }


   const i =  setInterval(() => {
       console.log("interval called am craxt")
    
            if(insertionDone){
                 console.log("insertion done")
                clearInterval(i)
            }
            update(i)
    }, 1);
}



let firstBubble = true;
let bubbleW = 0;
let BubbleDone = false;
async function initBubble(){
    let insertionDone = false;
    const s = Comlink.wrap(
        new Worker(
            new URL("../threads/sort/bubble.js", import.meta.url),
            {type: "module"}
            )
    )

    // console.log(s, "s")
//  console.log(await new s())
//      const instance = await new s()
//      console.log(instance)
//      return;
//    console.log(s.initial(), "initial array")


   /**
    * @type {IteratorResult}
    */
    let v =  await s.sorter.next()
    // console.log(v, "v bubble")
    if(firstBubble){
     
        
        bubbleW = bubbleSort.clientWidth / v.value.length;
        firstBubble = false;
       console.log("each bar width",bubbleW)
    }


   async function update(int){

       if(!v.done){
        // console.log(v.value)
      
        if(v.value == true) {
           BubbleDone = true;
        //    one = one();
             console.log("yield is true bubble should be done")
           clearInterval(int)
            return
        };
        bubbleCtx.fillRect(10, 10, 100, 100)
        bubbleCtx.clearRect(0, 0, insertionSort.clientWidth, insertionSort.clientHeight)
        v.value.forEach((val, i)=> {
            bubbleCtx.fillRect(i * bubbleW,  bubbleSort.clientHeight, bubbleW - (bubbleW/4), -(val * 13));
          })
        v = await s.sorter.next()
            
        


       }

    }


   const  b =  setInterval(() => {
       console.log("bubble", b)
    // 
            if(insertionDone){
                 console.log("insertion done")
                clearInterval(b)
            }
            update(b)
    }, 1);



}

init()
initBubble()


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




export default function Sort(data){






    return {
        tag: "div",
        attrs:{
            class: "grid-ish"
        },
        children: [canvasWrapper(bubbleSort, "Bubble Sort - O**n"), canvasWrapper(insertionSort, "Insertion Sort O**n"), canvasWrapper(mergeSort, "")]
            
        
    }
}