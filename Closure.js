function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: $${amount}`);
            } else {
                console.log("Deposit amount must be positive");
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log("Invalid withdrawal amount");
            }
        },
        getBalance: function() {
            return `Current balance: $${balance}`;
        }
    };
}

const myAccount = createBankAccount(1000);

// Using the methods
myAccount.deposit(500);   // Deposited: $500
console.log(myAccount.getBalance()); // Current balance: $1500

myAccount.withdraw(200);  // Withdrew: $200
console.log(myAccount.getBalance()); // Current balance: $1300

myAccount.withdraw(5000); // Invalid withdrawal amount
