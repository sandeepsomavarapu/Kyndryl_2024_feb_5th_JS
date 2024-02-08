function arithmeticOperation()
{
    let x=12;
    let y=3;

    console.log("addition :"+(x+y));//15
    console.log("subtraction :"+(x-y));//9
    console.log("multiplication :"+(x*y));//36
    console.log("division :"+(x/y));//4
    console.log("Modulus :"+(x%y));0
    console.log("increment :"+(x++ + ++x));//
    console.log("decrement :"+(x--+ --y));
let a=20;
console.log(a++ + --a); //20
console.log(--a + a--);//38 -> 19+19=38 18
console.log(a);//18 
console.log(a++ + --a) //36 -->18+18
console.log(a);//18
console.log(a-- + ++a)//36-->18+18
console.log(a);//18

}
arithmeticOperation()