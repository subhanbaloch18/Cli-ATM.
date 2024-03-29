#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000; // Dollar.
let myPin = 1000;

console.log("Welcome to s2bl ATM, How can we help you?");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Please enter your pincode",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Verification successful!");


let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "Please select an option",
    type: "list",
    choices: ["fast cash", "withdraw", "check balance"],
  },
]);
console.log(operationAns);

if (operationAns.operation === "fast cash") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "Please select a amount you want to withdraw",
      type: "list",
      choices: ["5000", "10000", "25000", "60000"],
    },
  ]);

  if (amountAns.amount < myBalance) {
    myBalance -= amountAns.amount;
    console.log(`withdraw successful!!!
    Your remaining account balance is: ${myBalance} 
    Thank you for using s2bl ATM.`)}
    else {
      console.log(`Withdraw unsuccessful!!! Insufficient balance in your account.`)
    }
  
} else if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "Please enter a amount to withdraw",
      type: "number",
    },
  ]);

  if (amountAns.amount > myBalance) {
    console.log("Withdraw unsuccesful!!!,Insufficient balance in your account");
  } else {
    myBalance -= amountAns.amount;
    console.log(
      `withdraw successful!!!
      Your remaining account balance is: ${myBalance} 
      Thank you for using s2bl ATM.`
    );
  }
} else if (operationAns.operation === "check balance") {
  console.log(`Your current balance in your account is: ${myBalance} 
    Thank you for using s2bl ATM.`);
} else {
  console.log("Incorrect pincode!! Try again");
}
}else{
  console.log("Incorrect Pincode. Please try again")
};
