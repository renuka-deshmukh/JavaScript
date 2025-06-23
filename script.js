// To-do list manager

findNewtask = document.querySelector("#taskName")
showResult = document.querySelector("#GetResult")

taskArray = []

function deleteTask(i) {
    console.log(i)
    taskArray.splice(i, 1)
    displayTask();
}

function displayTask() {

    showResult.innerHTML = taskArray.map((t, index) => `
                             <li>${t}
                             <button class="btn btn-danger py-2" onclick="deleteTask(${index})">Delete</button>
                             </li>
    `).join('')
}

function addNewtask() {

    newTask = findNewtask.value
    taskArray.push(newTask)
    findNewtask.value = ''
    console.log(taskArray)
    displayTask();

}

function clearAlltasks() {
    taskArray = [];
    console.log(taskArray);
    displayTask()

}

// Student marks calculation

findMarks = document.querySelector("#marks")
Result = document.querySelector("#ShowResult")


marksArray = []

function displayMarks() {

    Result.innerHTML = marksArray.map((m) => `
                                    <li>${m}</li>
    `).join('')
}

function addMarks() {
    newMarks = Number(findMarks.value)
    marksArray.push(newMarks);
    findMarks.value = ''
    console.log(marksArray);
    displayMarks();

}



function calculateMarks() {


    let totalmarks = 0;
    let average = 0;

    for (let mark of marksArray) {
        totalmarks += mark;
        average = totalmarks / (marksArray.length)

    }
    console.log("Total Marks:", totalmarks);
    console.log("Average of marks", average)


    Result.innerHTML += `<p><strong>Total Marks:</strong> ${totalmarks}</p>
                        <p><strong>Average Marks:</strong> ${average}</p>`;

    highestMarks();
    lowestMarks();

}


function highestMarks() {
    let highest = marksArray[0];

    for (let i = 1; i <= marksArray.length; i++) {
        if (marksArray[i] > highest) {
            highest = marksArray[i]
        }
    }
    console.log("Highest Marks", highest)

    Result.innerHTML += `<p><strong>Highest Marks:</strong> ${highest}</p>`;

}

function lowestMarks() {
    let lowest = marksArray[0];

    for (let i = 1; i <= marksArray.length; i++) {
        if (lowest > marksArray[i]) {
            lowest = marksArray[i]
        }
    }
    console.log("Lowest Marks:", lowest)
    Result.innerHTML += `<p><strong>Lowest Marks:</strong> ${lowest}</p>`;

}

function resetMarks() {
    marksArray = []
    console.log(marksArray)
    displayMarks();

}
const findValue = document.querySelector("#getInput")
const findResult = document.querySelector("#getResult")

const ArrayDataset = ["Mango", "Banana", "Grapes", "Kivi", "Apple", "Watermelon", "Orange"];

function searchValue() {

    newValue = findValue.value
    findValue.value = '';

    let found = false;

    for (let i = 0; i <= ArrayDataset.length; i++) {

        if (newValue === ArrayDataset[i]) {
            findResult.textContent = "Fruit found :" + newValue;
            found = true;
            break;
        }
        else {
            findResult.textContent = "Fruit not found"
        }
    }
}


const findnum = document.querySelector("#AddNum")
const even = document.querySelector("#evenOutput")
const odd = document.querySelector("#oddOutput")
let number = [];

function addNumbers() {
    val = Number(findnum.value);
    number.push(val);
    findnum.value = '';
}

function evenNumbers() {
    const evenNums = number.filter(num => num % 2 === 0);
    even.innerHTML = evenNums.join(", ");
    odd.innerHTML = '';
}

function oddNumbers() {
    const oddNums = number.filter(num => num % 2 !== 0);
    odd.innerHTML = oddNums.join(", ");
    even.innerHTML = '';
}

function clearAlltasks() {
    number = [];
    even.innerHTML = '';
    odd.inerHTML = '';
    findnum.value = '';
}




























