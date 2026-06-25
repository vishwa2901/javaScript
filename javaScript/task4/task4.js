// Task 1: Employee Management System
// storing employees in object and printing using loop


let employees = [
    { name: "Vishwa", id: 101, salary: 30000 },

    { name: "Aradhya", id: 102, salary: 60000 }
]

for (let emp of employees) {
    console.log(emp)
    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus")
    } else {
        console.log("Employee Not Eligible For Bonus")
    }
}
console.log("---------------------------")

// Task 2: Student Result Portal 
// Collecting student marks and calculating grade

alert("Welcome to task2 -  Student Result portal")
let name = prompt("Enter student name:")
let m1 = parseInt(prompt("Enter marks 1:"))
let m2 = parseInt(prompt("Enter marks 2:"))
let m3 = parseInt(prompt("Enter marks 3:"))

let total = m1 + m2 + m3
let percentage = total / 300 * 100;

console.log("Student Result Portal");
console.log(" ");


console.log("Name       :", name);
console.log("Total      :", total + "/300");
console.log("Percentage :", percentage + "%");

if (percentage >= 90) {
    console.log("grade = A + ")
} else if (percentage >= 80) {
    console.log("grade = A  ")
} else if (percentage >= 70) {
    console.log("grade = B ")
} else if (percentage >= 60) {
    console.log("grade = C  ")
} else {
    console.log("Fail ")
}
console.log("---------------------------")

// Task 3: E-Commerce Cart

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function calculateBill() {
    let total = 0;
    for (let p of products) {
        total = total + p.price;
    }
    return total;
}

let totalBill = calculateBill();

let discount = 0;
let finalBill = totalBill;

if (totalBill > 5000) {
    discount = totalBill * 0.10;
    finalBill = totalBill - discount;
}

console.log("E-Commerce Bill");
console.log(" ");
console.log("======= Bill ========");
console.log("Laptop   : " + 50000);
console.log("Mouse    : " + 1000);
console.log("Keyboard : " + 2000);
console.log("========================");
console.log("Total    : " + totalBill);
console.log("Discount : " + discount);
console.log("Final    : " + finalBill);
console.log("----------------------------------");

// Task 4: Login Authentication

alert("Welcome to task4 -  Login Authentication")

let username = "admin"
let password = "12345"

let enteredUsername = prompt("Enter username:")
let enteredPassword = prompt("Enter password:")

let status = (enteredUsername === username && enteredPassword === password) ? "Login Successful" : "Invalid Credentials";

console.log("Login Authentication");
console.log(" ");
console.log(status);
console.log("----------------------------------");

// Task 5: Traffic Signal System

alert("Welcome to task5 -  Traficc Signal")

let signal = prompt("Enter signal color (red/yellow/green):");

console.log("Traffic Signal");
console.log(" ");
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
}
console.log("----------------------------------");

// Task 6 : ATM Withdrawl System

alert("Welcome to task6 -  ATM")

console.log("ATM Withdrawl System");
console.log(" ");

let balance = parseFloat(prompt("Enter your balance:"));
let amount = parseFloat(prompt("Enter withdrawal amount:"));

if (amount > balance) {
    console.log("Insufficient Balance");
    console.log("Available Balance: " + balance);
} else {
    balance = balance - amount;
    console.log("Withdrawal Successful");
    console.log("Withdrawn Amount : " + amount);
    console.log("Remaining Balance: " + balance);
}
console.log("----------------------------------");

// Task 7: Online Food Order

alert("Welcome to task 7 -  Online Food Order")

console.log("Online Food Order");
console.log(" ");

function orderFood(callback) {
    console.log("Order Received");
    callback()
}

function prepareFood(callback) {
    console.log("Food Preparing");
    callback()
}

function deliverFood() {
    console.log("Food Delivered");
}

orderFood(function() {
    prepareFood(function() {
        deliverFood()
    })
})

console.log("----------------------------------");

//  Task 8: Cashback Generator (Generator Function)

function* offerGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = offerGenerator();

console.log("Cashback Generator");
console.log(" ");
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log("----------------------------------");

// Task 9: Hospital Patient Check

alert("Welcome to task 9 -  Patient eligibility check")
let age = parseInt(prompt("Enter your age:"))
let weight = parseInt(prompt("Enter your weight:"))

console.log("Patient eligibility check");
console.log(" ");

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible - Weight must be above 50");
    }
} else {
    console.log("Not Eligible - Age must be above 18");
}