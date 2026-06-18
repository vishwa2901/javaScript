const employeeName = "Vishwaradhya";
const employeeID = "EMP005";
const department = "Development";
const experience = "3 years";
const salary = 50000
const bonus = 5000
let totalSalary = salary + bonus
let skills = ["HTML", "CSS", "Javascript", "Java", "MySql", "Springboot"]
let attendence = 92
let eligible = attendence >= 92 ? "Eligible for exam" : "Not Eligible"
let username = "admin";
let password = "12345";
let status = (username === "admin" && password === "12345") ? "Success" : "Invalid Credentials";
const company = "Stackly IT";
const clocation = "Bangalore";



console.log("----------------")
console.log("  Employee Portal")
console.log("----------------")

console.log(`Employee Name: ${employeeName}`)
console.log(`Employee ID  : ${employeeID}`)
console.log(`Department   : ${department}`)
console.log(`Experience   : ${experience}`)
console.log(`Salary       : ₹${salary}`)
console.log(`Bonus        : ₹${bonus}`)
console.log(`Final Salary : ₹${totalSalary}`)
console.log(`Skills       : ${skills}`)
console.log(`Attendance   : ${attendence}%`)
console.log(`Exam Status  : ${eligible}`)
console.log(`Login status : ${status}`)
console.log(`Company      : ${company}`)
console.log(`Location     : ${clocation}`)