// AM adding comments for better understanding
// ATM operations  ,, here since we are not using any conditional statements and loops , we can access one service at a time..  
// for login i have restricted for 3 attempts

let account = {
    name: "Vishwa",
    accNo: "1012254620",
    pin: 1234,
    balance: 50000
};

alert("===== WELCOME TO ATM =====");

// ================= PIN ATTEMPT 1 =================

let pin1 = prompt("Enter 4 Digit PIN");

let validPin1 =
    pin1.length === 4 &&
    !isNaN(pin1) &&
    Number(pin1) === account.pin;

alert(
    validPin1 ?
        "Login Successful" :
        "Invalid PIN"
);

// ================= PIN ATTEMPT 2 =================

let pin2 =
    validPin1 ?
        pin1 :
        prompt("Invalid PIN\n\nEnter PIN Again");

let validPin2 =
    pin2.length === 4 &&
    !isNaN(pin2) &&
    Number(pin2) === account.pin;

!validPin1
    ?
    alert(
        validPin2 ?
            "Login Successful" :
            "Invalid PIN"
    ) :
    "";

// ================= PIN ATTEMPT 3 =================

let pin3 =
    validPin1 || validPin2 ?
        pin2 :
        prompt("Invalid PIN\n\nLast Attempt");

let validPin3 =
    pin3.length === 4 &&
    !isNaN(pin3) &&
    Number(pin3) === account.pin;

(!validPin1 && !validPin2) ?
    alert(
        validPin3 ?
            "Login Successful" :
            "Card Blocked"
    ) : "";

// ================= LOGIN STATUS =================

let loginSuccess =
    validPin1 ||
    validPin2 ||
    validPin3;

// ================= ACCOUNT DETAILS =================

loginSuccess ? alert(`Welcome ${account.name}\n Account Number : ${account.accNo}`) : "";

// ================= SERVICE ATTEMPT 1 =================

let service1 =
    loginSuccess ?
        prompt(
            `=========== ATM MENU ===========

1. Balance Check
2. Withdraw
3. Deposit
4. Exit

Enter Your Choice :`) : "";

let validService1 =
    service1 === "1" ||
    service1 === "2" ||
    service1 === "3" ||
    service1 === "4";

// loginSuccess ? alert(validService1 ? "Service Selected" : "Invalid Option") : "";

// ================= SERVICE ATTEMPT 2 =================

let service2 =
    validService1 ?
        service1 :
        prompt(
            `Invalid Option

1. Balance Check
2. Withdraw
3. Deposit
4. Exit

Enter Choice Again :`
        );

let validService2 =
    service2 === "1" ||
    service2 === "2" ||
    service2 === "3" ||
    service2 === "4";

(!validService1 && loginSuccess) ?
    alert(
        validService2 ?
            "Service Selected" :
            "Invalid Option"
    ) : "";

// ================= SERVICE ATTEMPT 3 =================

let service3 =
    validService1 || validService2 ?
        service2 :
        prompt(
            `Last Attempt

1. Balance Check
2. Withdraw
3. Deposit
4. Exit

Enter Your Choice :`
        );

let validService3 =
    service3 === "1" ||
    service3 === "2" ||
    service3 === "3" ||
    service3 === "4";

(!validService1 && !validService2 && loginSuccess) ?
    alert(
        validService3 ?
            "Service Selected" :
            "Session Ended"
    ) : "";

// ================= FINAL SERVICE =================

let service =
    validService1 ?
        service1 :
        validService2 ?
            service2 :
            service3;

// ================= BALANCE CHECK =================

service === "1" ?
    alert(`Available Balance : ₹${account.balance}`) :
    "";

// ================= WITHDRAW =================

let withdrawAmount =
    service === "2" ? Number(prompt("Enter Withdrawal Amount")) : 0;

let canWithdraw = withdrawAmount <= account.balance;

account.balance = service === "2" && canWithdraw ? account.balance - withdrawAmount : account.balance;

service === "2" ?
    alert(
        canWithdraw ?
            `Withdrawal Successful

Available Balance : ₹${account.balance}` :
            "Insufficient Balance"
    ) :
    "";

// ================= DEPOSIT =================

let depositAmount =
    service === "3" ? Number(prompt("Enter Deposit Amount")) : 0;

account.balance =
    service === "3" ? account.balance + depositAmount : account.balance;

service === "3" ?
    alert(
        `Deposit Successful

Available Balance : ₹${account.balance}`
    ) : "";

alert(" Thanks For Using ATM")

// ================= EXIT =================

service === "4" ?
    alert("Thank You For Using ATM") : "";