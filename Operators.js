
n1 = Number(prompt("Enter first number"));

n2 = Number(prompt("Enter second number"));

console.log('Addition n1+n2:', n1+n2);
console.log('Sub n1-n2:', n1-n2);
console.log('Mul n1*n2:', n1*n2);
console.log('Div n1/n2:', n1/n2);
console.log('Mod n1%n2:', n1%n2);

console.log("first num is greater than second?", n1>=n2)
console.log("first num is less than second?", n1<=n2)
console.log("first num is equal than second?", n1==n2)


////////////////////////////

maths = Number(prompt("Enter matha score:"));
science = Number(prompt("Enter science score:"));

if( maths>=90 && science>=85){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}

///////////////////////////

let x = 10;

console.log("Initial value of x:",x)
x = x+5;
console.log("After adding 5:",x)
x *= 3;
console.log("After multiplying by 3:",x)
x -= 10;
console.log("After substracting 10:",x)
x /= 2;
console.log("After dividing by 2:",x)
x %= 3;
console.log("Modulus with 3:",x)

/////////////////////////

r = 10 + 3 * 5;
console.log("r:",r)   //r = 25, here higher precidence is to '*' so it will multiply first and then addition . 

s= (10 + 3) * 5;
console.log("s:",s) //s = 65, higher precidence is to  '()' hence (10 + 3) will execute first.

a = 20 / 2 + 3;
console.log("a:",a) // a =13, higher precidence to '/' 

b = 20 / (2 + 3);
console.log("b:", b) // b = 4, // higher precidence to '()'

///////////////////////

let length = Number(prompt("Enter length of the rectangle: "));
let Width = Number(prompt("Enter width of the rectangle:"));

let parameter = 2 * (length + Width);
let area = length * Width;

console.log("parameter:", parameter);
console.log("area:", area);
console.log("Is parameter is greater than area:", parameter > area);

// console.log("parameter of rectangle", parameter = 2*(length + Width));
// console.log("Area of rectangle :", area = length*Width);

// if(area > parameter){
//     console.log("Is parameter greater than area:", parameter > area);
// }

//////////////////////////////////

Age = Number(prompt("Enter your age:"));
Citizenship = true;

if( Age >= 18 && Citizenship){
console.log("Can vote")   
}
else{
console.log("Can't vote")
}

/////////////////////////////////////

let weight = parseFloat(prompt("Enter your weight"));
let height = parseFloat(prompt("Enter your hight"));

let BMI = weight / (height * height);

console.log("BMI:", BMI);

if(BMI<18.5){
  console.log("Underweight");
}
else if(18.5 <= BMI < 24.9){
  console.log("Normal Weight")
}
else if( 25<= BMI < 29.9){
  console.log("Over weight")
}
else{
  console.log("Obesity")
}

///////////////////

let num1 = Number(prompt("Enter a number:"));

if(num1 % 2 ==0){
  console.log("Number is Even");
}
else{
  console.log("Number is Odd");
}

////////////////////

let totalAmount = Number(prompt("Enter a total amount:"));

console.log("Total Amount:",totalAmount);

// if( totalAmount > 100){
//   discount = totalAmount * 0.1;
//   discountedAmount = totalAmount - discount;
//   console.log("Discounted Amounted:",  discountedAmount);
// }
// else{
//   console.log("No discount on this amount");
// }

if( totalAmount > 100){
  totalAmount = totalAmount - totalAmount*0.1;
}
console.log("Discounted amt:",totalAmount);
