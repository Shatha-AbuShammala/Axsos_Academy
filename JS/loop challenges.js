//1.display odd numbers from 1 to 20
for(let i=1; i<=20; i++) {
    if(i%2!==0) {
        console.log(i);
    }
}

//2.Decreasing multiple of 3
for(let i=100; i>=0; i--) {
    if(i%3===0) {
        console.log(i);
    }
}

//3.print the sequence
for (let i = 4; i >= -3.5; i -= 1.5) {
  console.log(i);
}

// 4. sigma 1 to 100
let sum = 0;
for(let i=1; i<=100; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 100 is: " + sum);

//5.factorial of 12
let factorial = 1;
for(let i=1; i<=12; i++) {
    factorial *= i;
}
console.log("The factorial of 12 is: " + factorial);