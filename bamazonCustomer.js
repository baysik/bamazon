const mysql = require('mysql');
const inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.query("SELECT * FROM products", function(err, res){
    for (var i=0; i < res.length; i++) {
        console.log(res[i])
    }
    if (err) throw err;
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
        let chosenItem;
        for (var i=0; i < res.length; i++){
            if (res[i].id == answers.productChoice){
                chosenItem = res[i];
            }
        }
        if (answers.purchaseAmount < chosenItem.stock_quantity) {
            let difference = chosenItem.stock_quantity - answers.purchaseAmount
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: difference
                    },
                    {
                        id: answers.productChoice
                    }
                ],
                function (err, res) {
                    if (err) throw err;
                    let finalPrice = chosenItem.price * answers.purchaseAmount
                    console.log(`\n********************************************\n\n${answers.purchaseAmount} ${chosenItem.product_name}(s) will be $${finalPrice}!\n\n********************************************\n`);
                    connection.end();
                }
            )
        } else {
            console.log(`\n********************************************\n\nInsufficient quantity! Please try again.\n\n********************************************\n`)
            connection.end();
        }
    })
})