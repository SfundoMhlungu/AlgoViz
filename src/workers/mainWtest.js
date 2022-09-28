


// const worker = new Worker(new URL("worker.js", import.meta.url));

// const shareMem = new ArrayBuffer(1024);

// // console.log(SharedArrayBuffer)

// /**
//  * @type {Int16Array}
//  */
// const view = new Int16Array(shareMem);

// view[0] = 20


// console.log(view.byteLength)


// worker.postMessage("hjh", shareMem)

// worker.onmessage = ({data})=> {
//     console.log(data)
// }

// setTimeout(() => {
//       console.log(view)
// }, 10000);


