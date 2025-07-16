# 🍬 Sweet Shop Management System

A JavaScript-based sweet shop inventory management system built using **Node.js** and **Test-Driven Development (TDD)** with **Jest**.

This system allows users to manage sweets by performing operations such as adding, deleting, viewing, searching, sorting, purchasing, and restocking. The development process strictly follows the **three laws of TDD** and clean coding practices.

---

## ✅ Features

### 1. Core Operations
- **Add Sweets:** Add a new sweet with a name, category, price, and quantity.
- **Delete Sweets:** Remove a sweet from the inventory by its unique ID.
- **View Sweets:** List all sweets currently in stock.

### 2. Search & Sort
- **Search Sweets:** Search by name, category, or price range (min–max).


### 3. Inventory Management
- **Purchase Sweets:** Reduce the stock quantity if enough stock is available.
- **Restock Sweets:** Increase the stock quantity for a sweet by its ID.

---

## 🚀 Setup & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/Yashparmar2604/Sweet-Shop.git
cd Sweet-Shop
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Tests
```bash
npm test
```

---

## 🧪 Test Report

- All features were implemented using **TDD**.
- Test cases were written **before** implementation, strictly following the **three laws of TDD**:
  1. Write a failing test before writing production code.
  2. Write only enough of a test to fail.
  3. Write only enough production code to make the test pass.
- Edge cases and validation checks are included in the test suite.
- To view test coverage, run:
```bash
npm test -- --coverage
```

---

## 🛠 Implementation Details

| Property       | Description                                  |
|----------------|----------------------------------------------|
| **Language**   | JavaScript (Node.js)                         |
| **Testing**    | Jest                                          |
| **Design**     | Modular, clean, readable code                |
| **TDD**        | Fully followed for every feature             |
| **Git Usage**  | Frequent and meaningful commits              |
| **AI Tools**   | AI tools (e.g., Copilot) used for suggestions (marked in commits) |

---

## 📦 How to Use

```js
const { SweetShop } = require('./src/sweetShop');
const shop = new SweetShop();

// Add sweets
shop.addSweet("Kaju Katli", "Nut-Based", 50, 20);

// View all sweets
console.log(shop.viewSweets());

// Purchase 5 units of sweet with ID 1
shop.purchaseSweet(1, 5);

// Search sweets by category
console.log(shop.searchSweets({ category: "Nut-Based" }));

// Restock sweet
shop.restockSweet(1, 10);
```

---



## 📘 License

This project is for educational purposes and developed as part of the Kata: Sweet Shop Management System assignment.

---

## 🙌 Acknowledgment

Created for the **Kata: Sweet Shop Management System** by **Incubyte**, showcasing TDD and clean code principles using Node.js.