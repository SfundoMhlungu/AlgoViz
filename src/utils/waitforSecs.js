// reference: ourcade supertommy 


export const Wait = (seconds)=> {
    return new Promise(resolve => {
        const l = setTimeout(resolve, seconds * 1000)
    })
}