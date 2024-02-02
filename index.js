// Module package: CORE     tayyor sozlangan bo'ladi

// setTimeout(function(){
//     console.log("ishga tushdi")
// },5000);

// let number = 0;
// setInterval(function(){
//     console.log("hisob", number);
//     number++
// }, 0);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log('******************');

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Shukurullo`);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);






// Module package: EXTERNAL        har birini sozlash kerak

// const moment = require('moment');
// const time = moment().format("YYYY-MM-DD");
// console.log(time);

// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000);


// const inquirer = require("inquirer"); 
// inquirer
//     .prompt([{type: 'input', name: 'raqam', message: "raqamni kiriting? "}])
//     .then(answer => {
//         console.log("man kiritgan raqam qiymati:",answer.raqam);
//     })
//     .catch(err => console.log(err));



// const validator = require("validator");    
// // const test = validator.isEmail('foobar.com');
// const test = validator.isInt("ab");
// console.log('tets:', test);




// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log("random:", random)


// const chalk = require('chalk');
// const log = console.log;

// // log(chalk.blue('Hello') + random + chalk.red('!'));
// log(chalk.red(`uuid creates ${random}`));









// Module package: FILE

// console.log(require("module").wrapper); // bu syntax larni qayerdan kelayotganini (syntaxni) check qiladi

// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log("natija;", natija);
// console.log("***********");

// const natija2 = calculate.kopaytirish(70, 20);
// console.log("natija2;", natija2);
// console.log("***********");

// const natija3 = calculate.ayrish(70, 20);
// console.log("natija3;", natija3);

// console.log(arguments); // izlash tartibi

const Account = require("./account");
Account.tellMeAboutClass();   //static
Account.tellMeTime();

console.log("================")

const myAccount = new Account("Simon", 200000, 352162578475847);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// bugatti chiron 2,4mln usd
myAccount.withrawMoney(24000000);

// ferrari 400000 usd
myAccount.withrawMoney(400000);
myAccount.makeDeposit(200000)






























