Sweet Shop Management System
A JavaScript-based sweet shop management system built with Test-Driven Development (TDD) using Jest. The system supports adding, deleting, viewing, searching, sorting, purchasing, and restocking sweets.
Features

Add Sweets: Add a new sweet with name, category, price, and quantity.
Delete Sweets: Remove a sweet by ID.
View Sweets: List all sweets in the inventory.
Search Sweets: Search by name, category, or price range.
Sort Sweets: Sort by name or price in ascending or descending order.
Purchase Sweets: Purchase a quantity of a sweet, reducing stock.
Restock Sweets: Increase the stock quantity of a sweet.

Setup

Clone the Repository:
git clone https://github.com/Yashparmar2604/Sweet-Shop.git
cd sweet-shop


Install Dependencies:
npm install


Run Tests:
npm test



Test Report
Run npm test to execute the test suite and generate a coverage report in the coverage/ directory. The tests cover all core functionalities with edge cases.
Implementation Details

Language: JavaScript (Node.js)
Testing Framework: Jest
TDD: Tests were written before implementation for each feature, following the three laws of TDD.
Git Workflow: Frequent commits with descriptive messages to reflect the TDD process.
AI Usage: AI tools (e.g., GitHub Copilot) were used for code suggestions in some cases, marked in commit messages (e.g., "AI-assisted test for searchSweets").

How to Use

Import the SweetShop class in a Node.js script:
const SweetShop = require('./src/sweetShop');
const shop = new SweetShop();


Example usage:
shop.addSweet({ name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 });
console.log(shop.viewSweets());
shop.purchaseSweet(1001, 5);
console.log(shop.searchSweets({ category: 'Nut-Based' }));


