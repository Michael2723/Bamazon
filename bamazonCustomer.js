function bamazonCust() {
// use mysql npm through the mysqlconnect.js file
var connect = require('./mysqlconnect.js');
var inquirer = require('inquirer');
	
var prompt = inquirer.createPromptModule();

    function displayProducts() {
		
	connect.connection.query('SELECT * FROM Products', function(err, data) {

		if (err) throw err;

		console.log('\nBamazon Authentic Sports Shop. \n');

		var i;
		var data_length = data.length;
		for (i = 0; i < data_length; i++) {

			console.log('  ' + data[i].ItemID + ' "' + data[i].ProductName + '" FORMAT: ' + data[i].DepartmentName + ' - PRICE: $' + data[i].Price + ' - Qty: ' + data[i].StockQuantity + '\n');
		} 

		selectProduct();
			
		}); 

	} 

function selectProduct() {
		
	prompt([{
		name: 'id',
		type: 'input',
		message: 'What is the ID of the Product you would like to buy?',
		validate: function(value) {

			if (isNaN(value) == false) {

				return true;

			} else {

				console.log('\n\nPlease enter id number.\n');
				return false;

			} 

		} 
	}, {
		name: 'amount',
		type: 'input',
		message: 'How many would you like to buy?',
		validate: function(value) {

			if (isNaN(value) == false) {

				return true;

			} else {

				console.log('\n\nPlease enter a quantity.\n');
				return false;

			} 

		} 
	
	}]).then(function(answer) {

		purchaseProduct(answer);
		
	});  

} 

function purchaseProduct(selected_item) {

	selected_item_int = parseInt(selected_item.amount);
		
	var query_select = 'SELECT * FROM Products WHERE ?';

       connect.connection.query(query_select, {ItemID: selected_item.id}, function(err_select, data_select) {

		if (err_select) throw err_select;
            
        if (data_select[0].StockQuantity < selected_item_int) {

        	console.log('\nSorry. You selected to purchase more than we have in stock. Please select a lower number.\n');

        	selectProduct();

        } else {

        	var new_quantity = data_select[0].StockQuantity - selected_item_int;

        	var total_price = data_select[0].Price * selected_item_int;

        	var query_update = 'UPDATE Products p, Departments d SET p.StockQuantity = ?, d.TotalSales = d.TotalSales + ? WHERE p.ItemID = ? AND d.DepartmentName = ?';

        	connect.connection.query(query_update, [new_quantity, total_price, data_select[0].ItemID, data_select[0].DepartmentName], function(err_update, data_update) {

				if (err_update) throw err_update;

        	});

        	console.log('\nThank you for shoppping with us. Total price is $' + total_price + '\n');

        	displayProducts();

        } 

       });

	} 

	displayProducts();
	
} 

bamazonCust();