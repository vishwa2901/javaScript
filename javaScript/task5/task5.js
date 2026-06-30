//  1. Employee Salary Problem

let sal = 45000

function salary() {
    let totalSalary = sal * 12
    return totalSalary
}
console.log("Employee Salary Problem ");
console.log(" ");
console.log("Yearly Salary : " + salary());
console.log()
console.log("------------------------------");
// 2. Student Pass or Fail

function checkResult(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let marks = 72;
console.log("Result : " + checkResult(marks));
console.log("------------------------------");

// 3. Food Bill

console.log("*** Food Bill ***");

function totalBill(item, price, quantity) {
    let total = price * quantity
    console.log(`Item: ${item}, Quantity: ${quantity}, Price: ${price}`);

    return total
}
let bill = totalBill("Burger", 180, 3)

console.log("Total Bill: " + bill + " rs ");
console.log("------------------------------");
console.log(" ");

// 4. Welcome Employee

function welcomeEmployee(name, department) {
    console.log(`Welcome ${name}`);
    console.log(`Department : ${department}`);
}

welcomeEmployee("Vishwa", "Development");
console.log("---------------------");

// 5. Shopping Discount

function shoppingDiscount(price, discount) {
    let finalAmt = price - discount
    return finalAmt
}
let final = shoppingDiscount(5000, 500)
console.log("Final Amount : " + final);
console.log("---------------------");

//  6. Company Login

function login(callback) {
    console.log("Login Successful");
    callback();
}

function loadDashboard() {
    console.log("Loading Dashboard...");
}


login(loadDashboard);
console.log("---------------------");

//  7. Food Delivery

function orderFood(callback) {
    console.log("Order Received");
    callback()
}

function prepareFood(callback) {
    console.log("Preparing Food ");
    callback()
}

function outForDelivery(callback) {
    console.log("Out for Delivery ");
    callback()
}

function deliverFood() {
    console.log("Food Delivered");
}

orderFood(function () {
    prepareFood(function () {
        outForDelivery(function () {
            deliverFood()
        })
    })
})
console.log("---------------------");

//  Task 8  Lucky Draw --  Generator Function

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


// 9. Employee Bonus -- currying
function bonus(salary) {
    return function (extra) {
        console.log("Total Salary :", salary + extra);
    };
}

bonus(50000)(5000);
console.log("----------------------------------");

// 10. Merge Employee Details  using spread operator
const employeePersonal = {
    name: "Rahul",
    age: 28
};

const employeeOffice = {
    empId: 101,
    department: "IT"
};

const employee = { ...employeePersonal, ...employeeOffice };

console.log(employee);
console.log("-----------------------------------");

// 11. Shopping Cart

const cart1 = ["Shirt", "Shoes"];
const cart2 = ["Watch", "Bag"];

const mergedCart = cart1.concat(cart2);
console.log(mergedCart);
console.log("-----------------------------------");


// 12. Student Marks - using rest operator
function student(name, ...marks) {
    const total = marks[0] + marks[1] + marks[2] + marks[3];
    const average = total / marks.length;

    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);
}

student("Vishwa", 90, 85, 88, 95);
console.log("-----------------------------------");


// 13. Product Details -- using Object Destructuring.

const product = {
    name: "Laptop",
    price: 75000,
    brand: "HP",
    stock: 25
};

const { name, price } = product;

console.log("Name :", name);
console.log("Price :", price);
console.log("-----------------------------------");

// 14. Customer Details -- using Array Destructuring.

const empl = [101, "Vishwa", "Chennai", 9876543210];

const [id, ename, ecity] = empl;

console.log("ID :", id);
console.log("Name :", ename);
console.log("City :", ecity);
console.log("-----------------------------------");

// 15. Add Product using push()

const cart = ["Mobile", "Laptop"];

cart.push("Headphone");

console.log(cart);
console.log("-----------------------------------");

// 16. Remove last Product using pop()

let carts = ["Mobile", "Laptop", "Headphone"];
carts.pop();
console.log(carts);
console.log("-----------------------------------");

//  17. Replace Employee using splice()

const names = ["Rahul", "Arun", "John", "David"];

names.splice(2, 1, "Naveen");

console.log(names);
console.log("-----------------------------------");

//  18. Search Product using includes()

const products = ["Mouse", "Keyboard", "Monitor", "Laptop"];

const p1 = products.includes("Laptop");

console.log(p1);
console.log("-----------------------------------");

// 19. Employee Ranking  Sorting salaries from lowest to highest

const salaries = [25000, 45000, 30000, 70000];

salaries.sort();

console.log(salaries);
console.log("-----------------------------------");

//  20. Reverse Chat Messages  using reverse()

const messages = ["Hi", "Hello", "How are you?", "Good Morning"];

console.log(messages);

messages.reverse();

console.log(messages);