 //1-задание
 var smallNumber = (a,b) => {
    if (a < b) console.log(a)
    if (a > b) console.log(b)
 }
 smallNumber(24,240)

 //2-задание
 var counting = (a = prompt()) => {
     console.log(a.length)
 }
 counting()

 //3-задание
var simple = (a = parseInt(prompt("напишите число")), c = prompt("напишите операцию:+,_,*,/"), b = parseInt(prompt("напишите 2-число")) )=> {
    switch (c) {
        case ("+"):
            return a + b
        case ("-"):
            return a - b
        case ("*"):
            return a * b
        case ("/"):
            return a / b
        default:
            break;

    }
    switch (b) {
        case (0):
            return alert("нельзя делить на ноль")
        default:
            break;
    }


}
 console.log(simple())