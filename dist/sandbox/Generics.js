var s = { s_name: "Shlomo", s_age: 33 };
var fruits = ["apple", "banana", "orange"];
console.log("Student Details: " + s.s_name + "   " + s.s_age);
function testGenerics(param1) {
    console.log("prameter type is " + typeof (param1));
    var xx = { s_namevv: "string", s_agestring: "43" };
    return xx;
}
testGenerics({ s_name: "koko", s_age: 43 });
testGenerics({ s_name: "koko", s_age: 43, s_avg: 87 });
