var xddd = 56;
var obj;
var str;
xddd = 5;
function primitiveToObj(p_number, p_string, pboolean) {
    //let retObj = new Object();9
    var retObj = { num: 4, str: p_string, bool: pboolean, bb: "gfgfg" };
    return retObj;
}
var retVal = primitiveToObj(4, "Amnon Titinski", false);
var ret_str = retVal.str;
console.log("obj string: ".concat(retVal.str));
console.log("Object values: ".concat(retVal.bool));
