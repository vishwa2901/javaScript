// CAR RENTAL SYSTEM

// Registration
const regName = prompt("Register - Enter Your Name:");
const regPassword = prompt("Register - Enter Password:");

alert("Registration Successful! Welcome " + regName);

// Login
const loginName = prompt("Login - Enter Username:");
const loginPassword = prompt("Login - Enter Password:");

let loginStatus = loginPassword === regPassword;

alert(loginStatus ? "Login Successful! Welcome Back " + loginName : "Invalid Password");

// Customer Details

const name = prompt("Enter Customer Name:");
const license = prompt("Enter License Number:");
const phone = prompt("Enter Phone Number:");

// Show Cars
let selectedCar = Number(prompt(
    `AVAILABLE CARS

1. Swift  - ₹2000/day
2. Duster - ₹3000/day
3. XUV300 - ₹3500/day
4. Crysta - ₹5000/day

Enter Car Number (1-4):`
));

// Car Name
let carName =
    selectedCar === 1 ? "Swift" :
        selectedCar === 2 ? "Duster" :
            selectedCar === 3 ? "XUV300" :
                "Crysta";

// Rent Per Day
let rentPerDay =
    selectedCar === 1 ? 2000 :
        selectedCar === 2 ? 3000 :
            selectedCar === 3 ? 3500 :
                5000;

// Days
let days = Number(prompt("Enter Number of Rental Days:"));

// Bill Calculation
let rentAmount = rentPerDay * days;
let gst = rentAmount * 18 / 100;
let finalAmount = rentAmount + gst;

// Display Bill
document.write("<h2>CAR RENTAL BILL</h2>");
document.write("Customer Name : " + name + "<br>");
document.write("Customer License number : " + license + "<br>");
document.write("Customer Phone number : " + phone + "<br>");

document.write("Car Name : " + carName + "<br>");
document.write("Rent Per Day : ₹" + rentPerDay + "<br>");
document.write("Days : " + days + "<br><br>");

document.write("Rent Amount : ₹" + rentAmount + "<br>");
document.write("GST (18%) : ₹" + gst + "<br>");
document.write("<b>Total Amount : ₹" + finalAmount + "</b>");