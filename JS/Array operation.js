//1.accessing elements
let colors=["red","blue","green","yellow","purple"];
//print the first element and last element
console.log(colors[0]);
console.log(colors[colors.length-1]);
//print the second element
console.log(colors[1]);
//change the third element to "orange" and print the array
colors[2]="orange";
console.log(colors);

//2.Traversing an array
let numbers=[1,2,3,4,5];
for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}
//reverse the array 
for(let i=numbers.length-1; i>=0; i--) {
    console.log(numbers[i]);
}

//3.Searching in Array
let numbers1=[5,10,15,20,25];
if(numbers1.includes(15)) {
    console.log("15 is in the array at index " + numbers1.indexOf(15));
}
else {
    console.log("15 is not in the array");
}


//4.sorting an array
let scores=[50,20,70,10,40];
//asceding order
scores.sort((a,b)=> a-b);
console.log(scores);
//descending order
scores.sort((a,b)=> b-a);
console.log(scores);
//sort names
let names=["Shatha","Sara","Lina","Sami","Dalia"];
names.sort();
console.log(names);


//5.inserting elements
let animals =["dog","cat","rabbit"];
animals.push("elephant");
animals.unshift("lion");
animals.splice(2,0,"tiger");
console.log(animals);

//6.deleting element
let fruits=["apple","banan","cherry","date"];
fruits.pop();
fruits.shift();
fruits.splice(0,1);
console.log(fruits);

//7.combining arrays
let array1=[1,2,3];
let array2=[4,5,6];
let combined=array1.concat(array2);
console.log(combined);

//8.splitting an array
let items=["a","b","c","d","e"];
let first=items.slice(0,3);
let last=items.slice(3,5);
console.log(first);
console.log(last);

//9.filtering an array
let numbers2=[1,5,10,15,20,25,30];
let filtered=numbers2.filter(n => n>15);
console.log(filtered);

//10.Avanced challenges
//a.removing duplicates
let arr1 = [1, 2, 2, 3, 4, 4, 5];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])) {
    arr2.push(arr1[i]);
  }
}
console.log(arr2);

//b.rotating an array
let arr3 = [1, 2, 3, 4, 5];
let n = 2; 
let rotated = arr3.slice(arr3.length-n).concat(arr3.slice(0, arr3.length-n));
console.log(rotated);

let num1 = [1, 3, 5];
let num2 = [2, 4, 6];
let num3 = num1.concat(num2);

for (let i = 0; i < num3.length; i++) {
  for (let j = 0; j < num3.length - 1; j++) {
    if (num3[j] > num3[j + 1]) {
      let temp = num3[j];
      num3[j] = num3[j + 1];
      num3[j + 1] = temp;
    }
  }
}

console.log(num3)