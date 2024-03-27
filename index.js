#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`\t"Welcome to the cli ATM!"\n`);
let myBalance = 10000; //Dollar
// console.log(`Your Current Balance is $${myBalance}`);
let myPin = 1234;
console.log(`My Pin ${myPin}`);
let answerPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }
]);
if (answerPin.pin === myPin) {
    console.log(`\t"Correct Pin"\n`);
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operations == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "How much do you want to withdraw?",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`\tYour remaining Balance Is: $${myBalance}\n`);
        }
        else {
            console.log(`\t"Insufficient Balance"\n`);
        }
        ;
    }
    else if (operationAns.operations == "Check Balance") {
        console.log(`\tYour Balance Is: $${myBalance}\n`);
    }
    else if (operationAns.operations == "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "How much amount you want to fast cash: ",
                type: "list",
                choices: [
                    1000, 2000, 4000, 10000
                ]
            }
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log("You have successfully completed your transaction.\n");
        console.log(`\tYour remaining Balance is: ${myBalance}\n`);
    }
}
else {
    console.log(`"Incorrect Pin"\n`);
}
;
