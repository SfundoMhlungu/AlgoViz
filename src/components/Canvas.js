export default function Canvas(data){

    return{
        tag: "canvas", 
        attrs: {
            width: data.width,
            height: data.height
        }
    }

}