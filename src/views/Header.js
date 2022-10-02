import Pub from "../Octopus";




class Createlink {
    constructor(a) {
        this.tag = "a",
        this.attrs = a.attrs,
        this.children = a.children;

    }
}



export default Header = (data = undefined) => {
 
    let {links, icon} = data;
 

    const con = {
        tag: "div", 
        attrs: {
            class: "grid-ish header",
        },
        children: [
            {
                tag: "div",
                attrs: {
                    class: "icon fl fl-ai-c"
                },
                children: [
                    {
                        tag: "div",
                        attrs: {
                            
                        },
                        children: [
                            {
                                tag: "h1", 
                                children: ["AlgoViz"]
                            }
                        ]
                    }
                ]
            },
            {
                tag: "div", 
                attrs: {
                    class: "links fl fl-ai-c"
                },
                children: links.map((link, i)=> {
                    let a = {
                        attrs: {
                            class: "link",
                            onclick: () => Pub.notify("view", {route: link.route, data: null}),
                            href: "#"

                        },
                        children: [link.state.name]
                    }

                    return new Createlink(a)
                })
            }
        ]
    }



    return con


  

}