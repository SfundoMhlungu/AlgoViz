import { clearEl, createElement } from "atomicus";
import Pub from "./Octopus"

// views 
import {SortView, SearchView} from "./Views"






const app = document.getElementById("app");


const cache = new Map()


// initial setup
// clearEl(head)
clearEl(app)






// data.route, data.data




const router = (data) => {
    console.log(data)
    console.log(cache)
    clearEl(app);
     console.log("cache", cache.get(data.route))
    
    if(cache.get(data.route)){
        app.appendChild(cache.get(data.route))
        console.log("return early")
        return;
    }
      
    switch (data.route) {
           case "views/sort":
              
               
                 Pub.notify("sort")
                const sortV = SortView()
                 app.appendChild(sortV)
                 cache.set(data.route, sortV);
               break;
            case "views/graphs":
             
                Pub.notify("graphs")
                
                const searchV = SearchView()
                // console.log(searchV, "search view")
                app.appendChild(searchV)
                cache.set(data.route,searchV);
                break; 
                
       
           default:
               break;
       }
   
}


router({route: "views/sort"})
// Pub.notify("graphs")

Pub.subscribe("view", (data)=> {
    // console.log("da", data)
      router(data)
})

