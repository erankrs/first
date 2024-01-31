

let xddd: number = 56;
let obj:object;
let str:string;

xddd = 5;


type answer = true|false

enum names{
    Eran = "eran krs",
    Ori = "oriki"
}

interface struct {
    ages: 5|7|43
    Names:names
    answer:boolean
}
   
function primitiveToObj(p_number:struct['ages'],p_string:names,panswer:answer):struct{
    //let retObj = new Object();9
    let retObj = {ages:p_number,Names:p_string,answer:panswer,bb:"gfgfg"}
    return retObj

}

const retVal = primitiveToObj(43,names.Ori,true)
retVal.Names = names.Eran;
//let ret_str:string = retVal.str;

console.log(`obj string: ${retVal.Names}`);
console.log(`Object values: ${retVal.answer}`)

console.log(`obj string: ${retVal.Names}`);
console.log(`Age: ${retVal.ages}`)
