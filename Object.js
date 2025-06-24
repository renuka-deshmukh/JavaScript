
let student = {
    name: "Renuka",
    age: 23,
    grade: "A+",
    subject: "Math"
}
console.log(student)

student.grade = "B+";
console.log(student)

delete student.age;
console.log(student)

let book = {
    title: "wings of fire",
    author: "Dr.APJ Kalam",
    details: {
        pages: 150,
        genre: "autobiography"
    }
}

// console.log(book);

console.log(book.details);

const product = {
    name: "Nesstle Maggie",
    price: 14,
    stock: "true"
}

for (v in product) {
    console.log(v, product[v])
}

console.log(Object.keys(product))
console.log(Object.values(product))


let calculator = {

    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
}

console.log(calculator.add(4, 7));
console.log(calculator.sub(15, 7));
console.log(calculator.multiply(15, 7));
console.log(calculator.divide(15, 7));



findfirst = document.querySelector("#num1")
findsecond = document.querySelector("#num2")
result = document.querySelector("#getresult")

let mycalculator = {

    addition: function () {
        newOne = Number(findfirst.value)
        newSecond = Number(findsecond.value)
        findfirst.value = '';
        findsecond.value = '';
        let sum = newOne + newSecond;
        result.innerHTML = `<strong>Result:<strong> ${sum}`

    },

    Substraction: function () {
        newOne = Number(findfirst.value)
        newSecond = Number(findsecond.value)
        findfirst.value = '';
        findsecond.value = '';
        let difference = newOne - newSecond;
        result.innerHTML = `<strong>Result:<strong> ${difference}`

    },

    Multiplication: function () {
        newOne = Number(findfirst.value)
        newSecond = Number(findsecond.value)
        findfirst.value = '';
        findsecond.value = '';
        let multiply = newOne * newSecond;
        result.innerHTML = `<strong>Result:<strong> ${multiply}`
    },

    Division: function () {
        newOne = Number(findfirst.value)
        newSecond = Number(findsecond.value)
        findfirst.value = '';
        findsecond.value = '';
        if (newSecond == 0) {
            result.innerHTML = `<strong>Can't Divide<strong>`
        } else {
            let divide = newOne / newSecond;
            result.innerHTML = `<strong>Result:<strong> ${divide}`
        }
    }

};

