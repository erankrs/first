
function checkIf(thersholds:number[], mark:number):void{
    
    if (mark >= thersholds[0]) {
        console.log("gradduate with excelense");
    } else if (mark >= thersholds[1]) {
        console.log("graduate well");
    } else if (mark >= thersholds[2]) {
        console.log("Graduate ok");
    } else {
        console.log("not good enough");
    }
}

function loopMeIn(inList:Array<string>){
   switch(inList[1]){
    case "fofo":
        console.log("HI IM FOFO" );
        break;
    case "DON":
        console.log("HI IM don");
        break;

    default:
        console.log("NON OF THEM");
        break;

   }

    inList.forEach((item)=>{
        item= item.toLowerCase();
        console.log("item: "+item+"\n")

    } )    

}
let members:Array<string>;
members = new Array("shon","DONI","NIL","adam","Yohan","LEE","BEN");
checkIf([45,55,66],66);
loopMeIn(members);