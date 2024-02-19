

type age  = number;

interface student{
    s_name:string,
    s_age:age
}

interface graduetedStudent extends student{
    s_avg:number
}



let s:student = {s_name:"Shlomo",s_age:33};
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Student Details: "+s.s_name+"   "+s.s_age);

function testGenerics<G,T extends student>(param1:T):G{
    console.log("prameter type is "+typeof(param1))
    let xx= {s_namevv:"string",s_agestring:"43"}
    return xx as unknown as G;
}


testGenerics({s_name:"koko",s_age:43});
testGenerics({s_name:"koko",s_age:43,s_avg:87})

