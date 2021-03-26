class Bank {
    static accountCounter = 0;
    
    constructor(code, address) {
        this.code = code;
        this.address = address;
    };

    static getAccounts(){
        console.log(`Total number of accounts are : ${this.accountCounter}`);
        console.log(Account.accounts);
    };
};

class Account extends Bank {    
    static accounts = [];

    constructor(code, address, type) {
        super(code, address);
        this.accountNumber = Math.floor((Math.random() * 1000000) + 1);
        this.accountBalance = 0;
        this.type = type;
    };

    deposit(amount) {
        this.accountBalance += amount;
        console.log(`Updated Balance : Rs. ${this.accountBalance}`);
    };

    withdraw(amount) {
        if(this.accountBalance > amount) {
            this.accountBalance -= amount;
            console.log(`Updated Balance : Rs. ${this.accountBalance}`);
        } else {
            console.log('Not Enough Balance');
        };
    };

    static createAccounts(data) {
        console.log('Account Created');
        Bank.accountCounter++;
        data.accountBalance = 0;
        data.transactionHistory = [];
        Account.accounts.push(data);
    };
};

class ATM extends Account {
    constructor(location, managedBy, code, address, type) {
        super(code, address, type );
        this.location = location;
        this.managedby = managedBy;
    };

    withdraw(amount) {
        const pin = prompt('Enter your PIN');

        Account.accounts.forEach(account => {
            if(parseInt(account.PIN) === parseInt(pin)){
                if(account.accountBalance > amount) {
                    this.accountBalance -= amount;
                    console.log(`Updated Balance : Rs. ${account.accountBalance}`);
                    ATMTransactions.modifies(amount, account.accountBalance, pin);
                } else {
                    console.log('Not Enough Balance');
                };
            };
        });
    };

    deposit(amount) {
        const pin = prompt('Enter your PIN');

        Account.accounts.forEach(account => {
            if(parseInt(account.PIN) === parseInt(pin)){
                account.accountBalance += amount;
                console.log(`Updated Balance : Rs. ${account.accountBalance}`);
                ATMTransactions.modifies(amount, account.accountBalance, pin);
            };
        });
    };

    checkBalance() {
        const pin = prompt('Enter your PIN');

        Account.accounts.forEach(account => {
            if(parseInt(account.PIN) === parseInt(pin)) {
                console.log(`Current Balance is: Rs. ${account.accountBalance}`);
            };
        });
    };
};

class ATMTransactions extends ATM{
    constructor(location, managedBy, code, address, type){
        super(location, managedBy, code, address, type);
    };

    static modifies(amount, accountBalance, pin){
        let transactionHistory = {
            TransactionID : Math.floor((Math.random() * 1000000) + 1),
            Date : new Date,
            Type : this.type,
            Amount : amount,
            AccountBalance : accountBalance,
        };

        Account.accounts.forEach((account) => {
            if(parseInt(account.PIN) === parseInt(pin)) {
                account.transactionHistory.push(transactionHistory);
            };
        });
    };
};

class Customer extends Account {
    constructor(name, customerAddress, dob, cardNumber, pin, code, address, type) {
        super(code, address, type);
        this.name = name;
        this.customerAddress = customerAddress;
        this.dob = dob;
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.createUser();
    };

    createUser(){
        let data = {
            Name: this.name,
            Address: this.customerAddress,
            DOB: this.dob,
            Card_Number: this.cardNumber,
            PIN: this.pin,
        };

        Account.createAccounts(data);
    };

    verifyPassword() {
        let pin = prompt('Verify Your PIN');

        if(parseInt(pin) === parseInt(this.pin)) {
            console.log(`HI! ${this.name}..Pin Match!`);
        } else {
            console.log(`Incorrect Pin!! Try Again.`);
        };
    };
};

class CheckingAccount extends Account {
    constructor(code, address, type) {
        super(code, address, type);
    };

    getCheckingBalance() {
        return this.accountBalance;
    };
};

class SavingAccount extends Account {
    constructor(code, address, type) {
        super(code, address, type);
    };

    getSavingBalance() {
        return this.accountBalance;
    };
};


const hdfc = new Bank('HDFC', 'Kanpur');

const SBIAccount = new Account('SBI', 'Kanpur', 'Savings');

const customer1 = new Customer('Jhon', 'Aarhus', '20/01/1999', '22512532', '2212', 'SBI', 'Aarhus', 'Savings');

const customer2 = new Customer('Edward', 'Norway', '02/03/1994', '24589532', '2355', 'HDFC', 'Norway', 'Checking');

const customer3 = new Customer('Nathan', 'Eddmunton', '03/11/1794', '24589532', '4465', 'BOI', 'Eddmunton', 'Savings');

const customer4 = new Customer('Simon', 'Calgary', '09/09/1798', '24589582', '6758', 'BOB', 'Calgary', 'Checking');

const atm = new ATM('Kanpur','HDFCKanpur', 'HDFC', 'Kanpur', 'Checking');


atm.deposit(600);
atm.checkBalance();
atm.withdraw(500);
Bank.getAccounts();