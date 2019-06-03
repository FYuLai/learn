
// const findShort=str =>str.split(' ').map(w=>w.length).sort((a,b)=>a-b);
function findShort(str){
    return Math.min.apply(null,str.split(' ').map(w=>w.length))
}




console.log(findShort('bitcoin take over the world maybe who knows perhaps'));