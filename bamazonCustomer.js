const mysql = require('mysql');
const inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

console.log('Current items in bamazon database');
connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;
    for (var i=0; i < res.length; i++){
        console.log(res[i]);
    }
})
inquirer.prompt([
    {
        type: "input",
        name: "productChoice",
        message: "What item would you like to purchase? (type the ID number)"
    },
    {
        type: "input",
        name: "purchaseAmount",
        message: "How many would you like to purchase?"
    }
]).then(answers => {
    console.log(answers.productChoice, answers.purchaseAmount);
        "UPDATE products SET ? WHERE ?",
        [
            {
                id: answers.productChoice
            },
            {
                stock_quantity: (answers.purchaseAmount - stock_quantity)
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(`${res.affectedRows} purchased!\n`);
            connection.end();
        }
})