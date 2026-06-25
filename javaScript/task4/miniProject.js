// Task 10: Final Real-Time Project , Mini Employee Portal

let employees = []

// Add Employee
function addEmployee(name, id, salary, callback) {
    employees.push({ name: name, id: id, salary: salary });
    callback("Employee Added");
}

addEmployee("Amith", 101, 60000, function(msg) {
    console.log(msg);
});
addEmployee("Vishwa", 102, 30000, function(msg) {
    console.log(msg);
});
addEmployee("Aradhya", 103, 70000, function(msg) {
    console.log(msg);
});

// Total Count

function totalEmployees() {
    console.log("Total Employees : " + employees.length);
}
totalEmployees()

// View Employees

function viewEmployees() {
    console.log("===Employees List===");
    for (let emp of employees) {
        console.log(emp.name + " | " + emp.id + " | " + emp.salary);
    }
}
viewEmployees()

//  Calculate Bonus

function calculateBonus(id) {
    for (let emp of employees) {
        if (emp.id == id) {
            if (emp.salary >= 50000) {
                console.log(emp.name + " Bonus : " + emp.salary * 0.10);
            } else {
                console.log(emp.name + " not eligible for bonus");

            }
        }
    }
}
console.log("=== Bonus Calculation ===");
calculateBonus(101);
calculateBonus(102);
calculateBonus(103);

// Search Employee by ID

function searchEmployee(id) {
    for (let emp of employees) {
        if (emp.id == id) {
            console.log("Found : " + emp.name + " | " + emp.id + " | " + emp.salary);

        }
    }
}
console.log("=== Search by Id ===");
searchEmployee(102);

// Delete Employee

function deleteEmployee(id, callback) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees.splice(i, 1);
            callback("Employee Deleted");
        }
    }
}

console.log("== Delete Employee==");
deleteEmployee(102, function(msg) {
    console.log(msg);
});

totalEmployees();
viewEmployees();