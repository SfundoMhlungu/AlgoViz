import { clearEl, createElement } from "atomicus";

import  Header  from "./views/Header";

import Sort from "./views/Sort";
import Search from "./views/Search";
import Graphs from "./views/Graphs";


// models
import { headerData } from "./Model";

const head = document.getElementById("header"); 





head.appendChild(createElement(Header(headerData)))


export function SortView(){
    return createElement(Sort())

}

export function SearchView(){
    return createElement(Graphs());
}