import { clearEl, createElement } from "atomicus";
import Pub from "./Octopus"
import  Header  from "./views/Header";
import Sort from "./views/Sort";
import Search from "./views/Search";





const head = document.getElementById("header"); 
const app = document.getElementById("app");

const cache = {}


// initial setup
clearEl(head)
clearEl(app)


let headerData = {
    links: [
         {
             link: "views/sort", 
             name: "sort"
         },
         {
             link: "views/search",
             name: "search"


         }
    ], 
    icon: ""
}

head.appendChild(createElement(Header(headerData)))


// data.route, data.data




const router = (data) => {
    // console.log(data)
    clearEl(app);
    console.log("cache", cache)
    if(cache[data.route]){
        app.innerHTML = cache["app"];
        console.log("return early")
        return;
    }
      
    switch (data.route) {
           case "views/sort":
              
               
          
                
                 app.appendChild(createElement(Sort()))
                 cache[data.route] = true;
                 cache["views/search"] = false;
                 cache["app"] = app.innerHTML;
               break;
            case "views/search":
             
               
             
                app.appendChild(createElement(Search()))
                cache[data.route] = true;
                cache["views/sort"] = false;
                cache["app"] = app.innerHTML; 
                
       
           default:
               break;
       }
   
}


router({route: "views/sort"})

Pub.subscribe("view", (data)=> {
    // console.log("da", data)
      router(data)
})


