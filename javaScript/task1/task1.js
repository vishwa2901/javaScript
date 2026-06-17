// Task 1 -- Real Time Employee Portal

// i added comments for better and quick understand

// Storing basic employee details

var employeeName = "Vishwa";
let employeeAge = 25;
const companyName = "Stackly";
console.log("Employee Name = " + employeeName)
console.log("Employee Age = " + employeeAge)
console.log("Employee Company = " + companyName)

//  Showing a popup message:

alert("Welcome to Employee Portel")

// Asking employees Have they completed today's task  and storing the response

let t = confirm(" Have you completed today's task ?")
console.log(t)

// Aksing employee name and printing in console

let eName = prompt("Enter your name");
console.log(eName)

// Displaying the entered name in webpage
document.writeln("Welcome " + eName);

// success message
console.warn("Task Submitted Successfully!!")

// error message
console.warn("Task Submission failed!!")

// update of  age after promotion
employeeAge = 27;
console.log("Updated Employee Age after Promotion : " + employeeAge)