self.onmessage = (event)=> {
 
  console.log(event)
    const view = new Int16Array(event.data)
    console.assert(view[0] === 20);
    console.assert(view[1000] !== 20);
    console.log(view[0])
    console.log(view)
    view[511] = -1000;
    // self.postMessage(event.data)
}