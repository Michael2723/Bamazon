USE Bamazon;

 CREATE TABLE Products (
   ItemID INTEGER(10) AUTO_INCREMENT NOT NULL,
   ProductName VARCHAR(30) NOT NULL,
   DepartmentName VARCHAR(30) NOT NULL,
   Price DECIMAL(10, 2),
   StockQuantity INTEGER(10),
   PRIMARY KEY(ItemID)
);

INSERT INTO Products 
	(ProductName, DepartmentName, Price, StockQuantity)
VALUES 
	  ("White Sox Authentic Hat", "MLB On Field Collection", 34.99, 100),
    ("White Sox Alternate Black Flex Base Authentic Custom Jersey", "MLB On Field Collection", 278.99, 100),
    ("Cleveland Cavaliers 16-17 On Court Short Sleeve Shooter", "NBA On Court Collection", 60.00, 95),
    ("LeBron James Authentic Jersey", "NBA On Court Collection", 300.00, 65),
    ("Paul Rabil Authentic Jersey", "MLL On Field Collection", 125.00, 85),
    ("Warrior Pregame Shoes", "Warrior Pregame", 44.95, 55),
    ("Chicago Fire 2017 Secondary Authentic Team Jersey", "MLS On Field Collection", 119.00, 98),
    ("Chicago Fire Antigua Black/Gray Executive Backpack", "Chicago Fire Bags", 119.99, 26),
    ("Philadelphia Union 2016/17 Authentic Primary Custom Jersey", "MLS On Field Collection", 149.99, 100),
    ("Chicago Bears Navy Blue Custom Elite Jersey", "NFL On Field Collection", 299.99, 100);
    
SELECT * from Products;

UPDATE Products SET Price = 12.50 WHERE ItemID = 11;

CREATE TABLE Departments (
	DepartmentID INTEGER(10) AUTO_INCREMENT NOT NULL,
    DepartmentName VARCHAR(30) NOT NULL,
    TotalSales DECIMAL(10, 2),
    PRIMARY KEY(DepartmentID)
);

INSERT INTO Departments
	(DepartmentName, TotalSales)
VALUES
	("MLB On Field Collection", 0.00),
    ("NBA On Court Collection", 0.00),
    ("MLL On Field Collection", 0.00),
    ("Warrior Pregame", 0.00);
    ("MLS On Field Collection", 0.00);
    ("Chicago Fire Bags", 0.00);
    ("NFL On Field Collection", 0.00);
    
DROP TABLE Departments;
    
SELECT * from Departments;

DELETE from Departments WHERE DepartmentName is NULL;