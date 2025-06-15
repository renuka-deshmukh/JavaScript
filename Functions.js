
function greet() {
    console.log("Hello All!");
}
greet();

function newgreet(name, age) {
    console.log("Hello", name, "your age is", age);
}
newgreet("Renuka", 22);

function addtwonum(a, b) {
    console.log(a + b);
}
addtwonum(4, 5);

function substract(c, d) {
    return c - d
}
sum = substract(10, 5)
console.log(sum);

function mul(e,f){
return e*f
}
 multiply = mul(4,5)
 console.log(multiply)

 const addArrow = (a,b) => a+b
 
 console.log(addArrow(5,6));

 const subArrow = (o,p) => o-p
 console.log(subArrow(10,10));
  
 const multi = (y,z) => {
    return y*z
 }
console.log(multi(10,2));


//// Factorial

   function getNumber() {
                let factNum = document.querySelector('#fact')
                let btnElmt = document.querySelector('#btnfact')
                let resultElmt = document.querySelector('#factresult')
                let factorial = 1;

                function findFactorial(number) {
                    if (number == 0 || number == 1) {
                        factorial = 1;
                        return factorial
                    }
                    else {
                        for (let i = 1; i <= number; i++) {
                            factorial = factorial * i;
                        }
                        return factorial
                    }
                }

                function getNumber() {
                    let x = Number(factNum.value)
                    let res = findFactorial(x)
                    resultElmt.textContent = res
                }

                btnElmt.addEventListener('click', getNumber)
            }

//EvenOdd

 let num = Number(prompt("Enter a number:"))

            function evenOdd() {

                if (num == 0) {
                    console.log(num, "is whole number");
                }
                else if (num % 2 === 0) {
                    console.log(num, "is even number");
                }
                else {
                    console.log(num, "is odd number");

                }
            }

            evenOdd();


// Reversing a string


    let str = prompt("Enter a string:");
    let reversed = "";

function reverseString(){

    for(let i = str.length - 1; i >= 0; i--){
      reversed += str[i]
    }
     console.log("Reverse of string:",reversed);
}
reverseString();

//  Largest number among three numbers

            let firstnum = Number(prompt("enter first number:"));
            let secondnum = Number(prompt("enter second number:"));
            let thirdnum = Number(prompt("enter third number:"));


            function largestNum() {
                let largest;

                if (firstnum >= secondnum && firstnum >= thirdnum) {
                    largest = firstnum;
                }
                else if (secondnum >= firstnum && secondnum >= thirdnum) {
                    largest = secondnum;
                }
                else {
                    largest = thirdnum;
                }
                console.log("largest number is:",largest)
            }
            
            largestNum();

















