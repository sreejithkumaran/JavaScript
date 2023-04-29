function BankAccount(cName, cbalance = 0){
    this.customerName = cName;
    this.accountNumber = Date.now();
    this.balance = cbalance;

    this.deposit = function(amount){
        this.balance += amount;
    };

    this.withdraw = function(amount){
        this.balance -=amount;
    };
}

let account = BankAccount('Sreejith');
console.log('balance : '+balance);