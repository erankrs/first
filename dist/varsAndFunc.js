var xddd = 56;
var obj;
var str;
xddd = 5;
var names;
(function (names) {
    names["Eran"] = "eran krs";
    names["Ori"] = "oriki";
})(names || (names = {}));
function primitiveToObj(p_number, p_string, panswer) {
    //let retObj = new Object();9
    var retObj = { ages: p_number, Names: p_string, answer: panswer, bb: "gfgfg" };
    return retObj;
}
var retVal = primitiveToObj(43, names.Ori, true);
retVal.Names = names.Eran;
//let ret_str:string = retVal.str;
console.log("obj string: ".concat(retVal.Names));
console.log("Object values: ".concat(retVal.answer));
console.log("obj string: ".concat(retVal.Names));
console.log("Age: ".concat(retVal.ages));
