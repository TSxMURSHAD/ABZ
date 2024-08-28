// // number  int-float
// // string
// // booleon true/false
// //undefined
// // null

// // array
// // object  collection of variables

// // var declare | initialize
// // let X | initialize
// // const   X | X

// // const name ="hafiz"

// // // name="ali"

// // console.log("ceo: ",name);

// // let num = 123;
// // let num1 = "12378";
// // let num2=num+Number(num1)
// // console.log(num2);

// // let flag=null;
// // console.log(typeof(flag));

// // let arr=[1,[2,3],56]
// // console.log(arr);
// // console.log(arr[1][0]);

// // key:value
// // let obj={name:"hafiz", age:19, tg:true}
// // console.log(obj["age"]);

// // arithmetic operators
// // +, -, *, /
// // modulus operators
// // %
// // exponential operators
// // **
// // ==, <=, >=, !=
// // let a=5,b="5";
// // console.log(a," == ",b," --> ",a!==b);

// // let num=5;
// // console.log(num===5?"sai hai bhai":"kiya kr rhy ho");

// // let a = "bscs",
// //   b = 797;
// // let str=`section: ${a}    rollno: ${b}`
// // console.log(str);

// //LOOOOOOPS

// // for, while, doWhile

// // for (let i = 0; i < 10; i++) {
// //     console.log(`hello ${i}`);
// // }

// // forOf, forIn, forEach
// // forIn -> index
// // forOf -> values

// let arr = [
//   { name: "hadi", age: 90, profession: "chapri" },
//   { name: "hafiz", age: 90, profession: "bara wala chapri" },
// ];

// // for(val of arr){
// //     console.log();

// // }

// // arr.forEach((val, key) => {
// //   console.log(`hello ${val.name} at ${key}`);
// // });
// let apiArr = [];
// fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
//   .then((response) => response.json())
//   .then((json) => {
//     apiArr = json;
//     apiArr.map((element) => {
//       console.log(element);
//     });
//   });

// // function name(a) {
// //     a++;
// //     return ++a;
// // }

// // let name=(a) =>{
// //     a++;
// //     return ++a;
// // }

// // console.log(name(8));

// // function fname(){
// //     let a=9
// //     a++;
// //     console.log(++a);

// // }

// // fname();

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr1=[11,22,33]
// arr.push(57);
// arr.pop();
// arr.unshift(57);
// arr.shift();
// let arr2=arr.concat(arr1)
// arr2.splice(4,5,77,88)
// console.log(arr2);

// console.log(window);

// let heading1 = document.querySelectorAll(".head");

// // for(let value of heading1){
// //     console.log(value.innerHTML);

// // }

// heading1[1].textContent="hafiz";
// console.log(heading1[1].innerHTML);

let btn = document.querySelector("#btn");
// btn.onclick=()=>{
//     alert("Fuck u")
// }

btn.addEventListener("click",()=>{
    alert("Fuck u")});
// btn.addEventListener("click", ()=>{
//     const msg=prompt("enter your reply");
// })
