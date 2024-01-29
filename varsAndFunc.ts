

let xddd: number = 56;
let obj:object;
let str:string;

xddd = 5;

function primitiveToObj(p_number:number,p_string:string,pboolean:boolean):{
    num:number
    str:string
    bool:boolean
}{
    //let retObj = new Object();9
    let retObj = {num:4,str:p_string,bool:pboolean,bb:"gfgfg"}
    return retObj

}

const retVal = primitiveToObj(4,"Amnon Titinski",false)
let ret_str:string = retVal.str;

console.log(`obj string: ${retVal.str}`);
console.log(`Object values: ${retVal.bool}`)
