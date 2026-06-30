let employees = [];

function addEmployee(id, name, department, salary) {
    let employee = {
        id: id,
        name: name,
        department: department,
        salary: salary
    };

    employees.push(employee);
}

addEmployee(101, "Vishwa", "Developer", 50000);
addEmployee(102, "Aradhya", "QA", 45000);
addEmployee(103, "John", "Devops", 60000);
addEmployee(104, "Amith", "HR", 60000);

// view Employees
function viewEmployees() {
    if (employees.length === 0) {
        console.log("No employees found.");
        return;
    }

    console.table(employees);
}
viewEmployees();

// Search by id
function searchEmployee(id) {
    for (let emp of employees) {
        if (emp.id == id) {
            console.log("Found : " + emp.name + " | " + emp.id + " | " + emp.salary);

        }
    }
}
console.log("=== Search by Id ===");
searchEmployee(102);
console.log("----------------------------------------");


// Calculate Salary + bonus


console.log("*** Salary and bonus Caluclation");

function calculateSalaryBonus(bonusPercent) {

    for (let i = 0; i < employees.length; i++) {

        let bonus = employees[i].salary * bonusPercent / 100;
        let totalSalary = employees[i].salary + bonus;

        console.log("- ");
        console.log("Employee Name:", employees[i].name);
        console.log("Basic Salary:", employees[i].salary);
        console.log("Bonus:", bonus);
        console.log("Total Salary:", totalSalary);
    }
}
calculateSalaryBonus(10);
console.log("----------------------------------------");

// delete employee

function removeEmployee(id) {

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].id === id) {
            employees.splice(i, 1);
            console.log("Employee Removed Successfully");
            return;
        }
    }

    console.log("Employee Not Found");
}
removeEmployee(103)
viewEmployees()
console.log("----------------------------------------");

// sort by salary

console.log("----*** Sort by salary***---- ");

let sortedEmployees = employees.slice();

sortedEmployees.sort((a, b) => a.salary - b.salary);

console.table(sortedEmployees);
console.log("----------------------------------------");

// Search employee by name

let employeeName = "Rahul";
let foundEmployee = null;

for (let emp of employees) {
    if (emp.name === employeeName) {
        foundEmployee = emp;
        break;
    }
}

if (!foundEmployee) {
    console.log(`No employee found with name "${employeeName}".`);
} else {
    console.table([foundEmployee]);
}
console.log("----------------------------------------");

// Display Employee Details using Destructuring
function displayUsingDestructuring() {

    for (let i = 0; i < employees.length; i++) {

        const { id, name, department, salary } = employees[i];

        console.log("ID:", id);
        console.log("Name:", name);
        console.log("Department:", department);
        console.log("Salary:", salary);
        console.log("--------------------");
    }
}
displayUsingDestructuring()