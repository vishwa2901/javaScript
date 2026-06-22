//  Employee Information System

// Task 1: Employee Information System Requirements, asking details from user and storing them in object and display the details.

let name = prompt("Enter Employee Name:")
let age = prompt("Enter Employee Age:")
let department = prompt("Enter Employee Department:")
let salary = prompt("Enter Employee Salary:")

// Storing all details in an object
let employee = {
    name: name,
    age: age,
    department: department,
    salary: salary
};

// Print all details
console.log("===== Employee Details =====")
console.log("Name       : " + employee.name)
console.log("Department : " + employee.department)
console.log("Salary     : " + employee.salary)

if (employee.salary > 30000) {
    console.log("Bonus Status: Eligible for Bonus ")
} else {
    console.log("Bonus Status: Not Eligible ")
}

alert("you are entering into task 2")
console.log("---------------------------------------------------")

//  Task 2: Supermarket Billing

let productName = prompt("Enter product name")
let productPrice = prompt("Enter product price")
let quantity = prompt("Enter the quantity")
let totalBill = productPrice * quantity


let discount = 0
let finalAmount = 0
if (totalBill > 5000) {
    let discount = totalBill * 10 / 100
    let finalAmount = totalBill - discount
} else {
    finalAmount = totalBill;
}

console.log("===== Supermarket Bill =====");
console.log("Product Name  : " + productName);
console.log("Product Price : " + productPrice);
console.log("Quantity      : " + quantity);
console.log("Total Bill    : " + totalBill);
console.log("Discount      : " + discount);
console.log("Final Amount  : " + finalAmount);

alert("you are entering into  task 3")
console.log("---------------------------------------------------")

// Task 3: Student Result Portal

console.log("=====Student Result Portal=====")
let studentName = prompt("Enter student name")
let studentMarks = prompt("Enter student marks")

if (studentMarks >= 90) {
    console.log("Grade A")
} else if (studentMarks >= 75 && studentMarks < 90) {
    console.log("Grade B")
} else if (studentMarks >= 50 && studentMarks < 75) {
    console.log("Grade C")
} else {
    console.log("Fail")
}

alert("you are entering into  task 4")
console.log("---------------------------------------------------")

// Task 4: Bank ATM Eligibility

console.log("=====Bank ATM Eligibility=====")
let userName = prompt("Enter user Name")
let accBal = prompt("Enter Account Balance")
let withdrawlAmt = prompt(" Enter Withdrawl Amount")

if (withdrawlAmt <= accBal) {
    console.log("Transaction Successfull !!")
} else {
    console.log("Insufficient Balance")
}

alert("you are entering into  task 5")
console.log("---------------------------------------------------")

// Task 5: Login Validation

console.log("=====Login Validation=====")

let username = "admin";
let password = "12345";

let uname = prompt("Enter the User Name")
let upass = prompt("Enter the password")

if (userName === uname && password === upass) {
    console.log("Login Successful")
} else {
    console.log("Invalid Credentials")
}
alert("you are entering into  task 6")
console.log("---------------------------------------------------")

// Task 6: Online Food Order

let food = ["Dosa", "Idli", "Poori", "Palav", "Biriyani", "Rice bath", "GeeDosa", "Upma"]
console.log("=====Online Food Order======")
console.log(food[0])
console.log(food[food.length - 1])
console.log(food.length)

for (let i of food) {
    console.log(i)
}
alert("you are entering into  task 7")
console.log("---------------------------------------------------")

//    Task 7: Company Employee Directory

console.log("=====Company Employee Directory======")
let emp = {
    name: " Amith",
    age: 25,
    department: "QA",
    salary: 35000,
    experience: "2 years"
}

for (let key in emp) {
    console.log(key + " : " + emp[key])
}
alert("you are entering into  task 8")
console.log("---------------------------------------------------")

//   Task 8: Traffic Signal System

console.log("=====Traffic Signal System======")
let color = prompt("Enter Signal Color:(Red/Yellow/Green")

switch (color) {
    case "Red":
        console.log("Stop")
        break
    case "Yellow":
        console.log("Ready")
        break
    case "Green":
        console.log("Go")
        break
    default:
        console.log("Invalid Signal")
}
alert("you are entering into  task 9")
console.log("---------------------------------------------------")

//   Task 9: Age Category Checker

console.log("=====Age Category Checker======")
let eage = Number(prompt("Enter Your Age:"))

if (eage >= 0 && eage <= 12) {
    console.log("Child")
} else if (eage >= 13 && eage <= 19) {
    console.log("Teenager")
} else if (eage >= 20 && eage <= 59) {
    console.log("Adult")
} else if (eage >= 60) {
    console.log("Senior Citizen")
} else {
    console.log("Invalid Age")
}

alert("you are entering into  task 10")
console.log("---------------------------------------------------")


//     Task 10: Employee Attendance

console.log("=====Employee Attendance======")
let ename = prompt("Enter Employee Name:")
let attendance = prompt("Enter Attendance (Present/Absent):")

attendance === "Present" ? console.log("Welcome " + ename + "\nAttendance: Present") : console.log("Attendance: Absent")
alert("End of all the tasks")