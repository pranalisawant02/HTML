// Que 2 : we are given array of marks of stu . filter out of the marks of stu that scored 90+

let marks = [80,95,99,22];

const result = marks.filter((m) => {
    return m > 90;
});

console.log(result);

/* Que 3 : take a num as input from user . create an array of numbers from 1 to n.
 use the reduce method to cal sum of all num's in array.
 use the reduce method to cal prod of all numbers in arr. */

//  let n = prompt("Enter a number: ");

//  let  arr3 = [];
//  for(let i=1;i<n;i++) {
//     arr[i-1] = i; // 1, 2, 3, 4
//  }

 //console.log(arr3);

 let arr4 = [2,3,4,5];

 const sum = arr4.reduce((val,res) =>{
    return res + val;
 });
 console.log(sum);

 const prod = arr4.reduce((val,res) => {
    return res * val;
 });
 console.log(prod); // fact of 4
