/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated implementation of a banking system.
 *              It incorporates multiple classes and features such as account creation,
 *              transaction processing, and balance management.
 */

class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }
}

class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.accounts = [];
  }

  openAccount(account) {
    this.accounts.push(account);
  }
}

class Account {
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      const transaction = new Transaction('withdrawal', amount);
      this.transactions.push(transaction);
    } else {
      throw new Error('Insufficient funds');
    }
  }

  getTransactions() {
    return this.transactions;
  }
}

class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.timestamp = new Date();
  }
}

// Example usage:

const bank = new Bank('MyBank');

const customer1 = new Customer('John Doe', '123 Main St');
const customer2 = new Customer('Jane Smith', '456 Broad St');

const account1 = new Account('001', 1000);
const account2 = new Account('002', 5000);

customer1.openAccount(account1);
customer2.openAccount(account2);

bank.addCustomer(customer1);
bank.addCustomer(customer2);

account1.deposit(500);
account1.withdraw(200);
account2.deposit(1000);
account2.withdraw(500);

console.log(`${customer1.name} has ${account1.balance} in account ${account1.accountNumber}`);
console.log(`${customer2.name} has ${account2.balance} in account ${account2.accountNumber}`);

const transactions1 = account1.getTransactions();
const transactions2 = account2.getTransactions();

console.log('Transactions for account ' + account1.accountNumber);
transactions1.forEach((transaction) => {
  console.log(`Type: ${transaction.type}, Amount: ${transaction.amount}, Timestamp: ${transaction.timestamp}`);
});

console.log('Transactions for account ' + account2.accountNumber);
transactions2.forEach((transaction) => {
  console.log(`Type: ${transaction.type}, Amount: ${transaction.amount}, Timestamp: ${transaction.timestamp}`);
});

// ... More code ...

// ... More code ...

// ... More code ...

// ... More code ...

// Continue to add more functionality to the banking system
// such as interest calculation, account types, etc.

// ... More code ...

// ... More code ...