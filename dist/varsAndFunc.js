var xddd = 56;
var obj;
var str;
xddd = 5;
var names;
(function (names) {
    names["Eran"] = "eran krs";
    names["Ori"] = "oriki";
    names[names["testerror"] = 6] = "testerror";
})(names || (names = {}));
function primitiveToObj(p_age, p_names, panswer) {
    //let retObj = new Object();9
    var retObj = { ages: p_age, Names: p_names, answer: panswer, bb: "gfgfg" };
    return retObj;
}
var retVal = primitiveToObj(43, names.testerror, true);
retVal.Names = names.Eran;
//let ret_str:string = retVal.str;
console.log("obj string: ".concat(retVal.Names));
console.log("Object values: ".concat(retVal.answer));
console.log("obj string: ".concat(retVal.Names));
console.log("Age: ".concat(retVal.ages));
