// Task 1 - Find the Highest Salary

let employees = [{
    name: "Naveen",
    id: 101,
    salary: 30000
},
{
    name: "John",
    id: 102,
    salary: 60000
},
{
    name: "Arun",
    id: 103,
    salary: 45000
}
];

let highestSal = employees.reduce((max, emp) =>
    emp.salary > max.salary ? emp : max
);

console.log("       Highest Salary        ");
console.log("Highest Salary : " + highestSal.salary);
console.log("Employee Name : " + highestSal.name);
console.log("----------------------------------");

// Task 2 - Find Employee by ID

let searchId = 103;

let foundEmployee = employees.find(emp => emp.id === searchId);
console.log("       Finding Employee by ID        ");
if (foundEmployee) {
    console.log("Employee Found");
    console.log("Name : " + foundEmployee.name);
    console.log("Salary : " + foundEmployee.salary);
} else {
    console.log("Employee Not Found");
}

console.log("----------------------------------");

// Task 3 - Employee salary and Bonus calculation

console.log("       Salary & bonus Calculation      ");
let bonus = 5000
employees.forEach(emp => {
    emp.salary += bonus;
    console.log(emp.name + " : " + emp.salary);
})
console.log("----------------------------------");

// Task 4  -- Experience check

console.log("       Exprience Check     ");
let employee = [{
    name: "Naveen",
    experience: 2
},
{
    name: "John",
    experience: 7
},
{
    name: "Arun",
    experience: 5
}
];

employee.forEach(emp => {
    let exp = emp.experience >= 5 ? "Senior Employee" : "Junior Employee";
    console.log(emp.name + " - " + exp);
});
console.log("----------------------------------");

// Task 5 - Display Only Employee Names

console.log("       Displaying only Employee Names");

employee.forEach(emp => {
    console.log(emp.name);
});
console.log("----------------------------------");

// Task 6 --  Display Employee IDs

console.log("       Displaying Employee IDs     ");
employees.forEach(emp => {
    console.log(emp.id);
});

console.log("----------------------------------");

// Task 7 - Find Total Salary

console.log("       Total Salary      ");

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0)

console.log("Total Salary : " + totalSalary);

console.log("----------------------------------");

//   Task 8 - Employees Earning More Than ₹40,000

console.log("        Employees Earning More Than 40,000       ");

employees
    .filter(emp => emp.salary > 40000)
    .forEach(emp => console.log(emp.name));
console.log("----------------------------------");

// Task 9 - Increase Salary

console.log("        Increased Salary    ");

let employees1 = [{
    name: "Naveen",
    id: 101,
    salary: 30000
},
{
    name: "John",
    id: 102,
    salary: 60000
},
{
    name: "Arun",
    id: 103,
    salary: 45000
}
];

employees1.forEach(emp => {
    emp.salary += 5000;
    console.log(emp.name + " : " + emp.salary);
});

console.log("----------------------------------");

// Task 10 - Employee Report

console.log("       Employee Report");
employees.forEach(emp => {
    console.log(`Employee Name : ${emp.name}\n Employee ID : ${emp.id}\n Salary : ${emp.salary}`)
})

console.log("--------------------------------------");
console.log("**************************************");
console.log("---------------------------------------");

// Bonus task -- includes all operation   ,  i have added comments for better understanding

console.log(" Bonus task which includes all operaton");

/*
let employees = [{
    name: "Naveen",
    id: 101,
    salary: 30000
},
{
    name: "John",
    id: 102,
    salary: 60000
},
{
    name: "Arun",
    id: 103,
    salary: 45000
}
];
*/

// 1. Total number of employees
console.log("1. Total Employees : " + employees.length);

// 2. Highest salary
let highestSalary = employees.reduce((max, emp) => emp.salary > max ? emp.salary : max, employees[0].salary);
console.log("2. Highest Salary : " + highestSalary);

// 3. Lowest salary
let lowestSalary = employees.reduce((min, emp) => emp.salary < min ? emp.salary : min, employees[0].salary);
console.log("3. Lowest Salary : " + lowestSalary);

// 4. Total salary of all employees
let totalSalary1 = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("4. Total Salary : " + totalSalary1);

// 5. Employee earning the highest salary
let highestPaidEmp = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
console.log("5. Highest Paid Employee : " + highestPaidEmp.name);

// 6. Employee earning the lowest salary
let lowestPaidEmp = employees.reduce((min, emp) => emp.salary < min.salary ? emp : min);
console.log("6. Lowest Paid Employee : " + lowestPaidEmp.name);

// 7. Employees whose salary is greater than 40,000
console.log("7. Employees earning > 40000 :");
employees
    .filter(emp => emp.salary > 40000)
    .forEach(emp => console.log("   " + emp.name));

// 8. Search an employee by ID
let searchId1 = 102;
let foundEmployee1 = employees.find(emp => emp.id === searchId1);
console.log("8. Search by ID " + searchId1 + " :");
if (foundEmployee) {
    console.log("   Employee Found - Name : " + foundEmployee1.name + ", Salary : " + foundEmployee1.salary);
} else {
    console.log("   Employee Not Found");
}

// 9. Add 5000 bonus to every employee and display new salary
let bonus1 = 5000;
console.log("9. Salaries after Bonus 5000 :");
employees.forEach(emp => {
    emp.salary += bonus1;
    console.log("   " + emp.name + " : " + emp.salary);
});

// 10. Professional employee report using template literals
console.log("10. Employee Report :");
employees.forEach(emp => {
    console.log(`
Employee Name : ${emp.name}
Employee ID   : ${emp.id}
Salary        : ${emp.salary}`);
});