//  Task 1: Employee Registration
//  // i added comments for better and quick understand

const employeeName = "Vishwaradhya";
const employeeID = "EMP005";
const department = "Development";
let salary = 40000;
const isPermanent = true;

console.log(" Task-1  Employee Details");
console.log("----------------");

console.log(`Name       : ${employeeName}`);
console.log(`ID         : ${employeeID}`);
console.log(`Department : ${department}`);
console.log(`Salary     : ${salary}`);
console.log(`Permanent  : ${isPermanent}`);
console.log("\n");


// Task 2: Employee skills,  storing some skills inside an array

let skills = ["HTML", "CSS", "Javascript", "Java", "MySql", "Springboot"]
console.log("Task-2  Employee skills")
console.log("----------------");
console.log(`First Skill  : ${skills[0]}`);
console.log(`Third Skill  : ${skills[2]}`);
console.log(`Last Skill   : ${skills[skills.length - 1]}`);
console.log(`Total Skills : ${skills.length}`);
console.log(`Total Skills : ${skills}`);
console.log("\n");

// Task 3:  Comapany object

const company = {
    companyName: "Stackly",
    location: "Bangalore",
    employees: 200,
    technologies: ["Java", "Python", "Data Analysis", "Devops", "JavaScript", "AWS"]
}

console.log("Task-3  Company object")
console.log("----------------");

console.log(`Company Name       : ${company.companyName}`)
console.log(`Location           : ${company.location}`)
console.log(`Second Technology  : ${company.technologies[1]}`)
console.log(`Total Technologies : ${company.technologies.length}`)
console.log(`Total Technologies : ${company.technologies}`)
console.log("\n");

// Task 4:  Salary Calculator

let basicSalary = 30000;
let bonus = 5000

let totalSalary = basicSalary + bonus
let tax = totalSalary * 0.10
let finalSalary = totalSalary - tax

console.log("Task-4  Salary Calculation")
console.log("----------------");
console.log(`Basic Salary : ₹${basicSalary}`);
console.log(`Bonus        : ₹${bonus}`);
console.log(`Total Salary : ₹${totalSalary}`);
console.log(`Tax (10%)    : ₹${tax}`);
console.log(`Final Salary : ₹${finalSalary}`);
console.log("\n");

// Task 5:  Attendence checker

let attendence = 92
let eligible = attendence >= 92 ? "Eligible for exam" : "Not Eligible"

console.log("Task-5  Attendence checker")
console.log("----------------");
console.log(`Attendance : ${attendence}%`);
console.log(`Status     : ${eligible}`);
console.log("\n");

// Task 6: Login Verification

let username = "admin";
let password = "12345";
let status = (username === "admin" && password === "12345") ? "Login Successful" : "Invalid Credentials";

console.log("Task-6 Login Verification")
console.log("----------------")
console.log(status)
console.log("\n");

// Task 7: Product billing

const productName = "HP Laptop"
const price = 48000
let quantity = 2
const totalbill = price * quantity

console.log("Task-7   Product Billing ");
console.log("----------------")
console.log(`Product  : ${productName}`);
console.log(`Price    : ${price}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total    : ${totalbill}`);
console.log("\n");

// Task 8: Increment and Decrement

let visitors = 100

console.log("Task-8   Increment & Decrement ");
console.log("----------------")

// Pre-increment  visitors become 101 first, then 101 is printed.
console.log(`Pre-increment  (++visitors): ${++visitors}`) //101

// Post-increment  visitors is 101 it will printed first, then visitors become 102
console.log(`Post-increment  (visitors++) : ${visitors++}`) //101

// Pre-decrement  visitors decremented and becomes 101 first and printed
console.log(`Pre-decrement  (--visitors) : ${--visitors}`) //101

// Post-decrement visitors print 101 first before decrement, then after printing it decrements and becomes 100
console.log(`Post-decrement  (visitors--) : ${visitors--}`)
console.log("\n")

// Task 9: Comparison Checker

console.log("Task---9");
console.log("----------------")

console.log(10 == "10"); // output : true

console.log(10 === "10"); // output : false

console.log(20 != "20"); // output : false

console.log(20 !== "20"); // output : true

console.log(5 < 10); // output : true

console.log(15 >= 20); // output : false

console.log(100 <= 100); // output : true

// Task 10:User Interaction 

let uname = prompt("Enter your name:")
let uage = prompt("Enter your age:")
let joinCompany = confirm("Do you want to join our company?")
alert(joinCompany ? "Welcome " + uname : "Thank You")