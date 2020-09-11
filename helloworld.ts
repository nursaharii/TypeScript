//let dizi: string[];
//dizi=["a","b","c"];
//console.log(...dizi);

//let sum = (num1: number,num2: number) => console.log(num1+num2);//Fatarrow
/*function add(num1: number, num2: number): number;
function add (num1:string, num2:string):string;
function add(a: any, b:any): any {
    return a + b;
}
//Fonksiyon overload edebilmek için any ile tanımlama yapmak gerekiyormuş...
sum(3,5);
sum("Hello","world");*/

let Greet = (greeting: string, ...names: string[]) => console.log(greeting+ " "+ names.join(", ")+"!");//names önündeki 3 nokta sayesinde boş bıraksak da hata ermez

Greet("Hello");//buraya 2. parametre yazma zorunluluğum yok (rest parameter)
