
//this is an abstract class it defines what bank account should be able to do 

class bank_account{
    deposit(amount){
        throw new Error("deposit() must be implemeted");
    }
    withdraw(amount){
        throw new Error("withdraw() must be implemeted");
    }
    getBalance(){
        throw new Error("getbalance() must be implemeted");
    }
}

//inheritance + encapsulation
//saving account inherit from bankaccount

// so saving account IS-A bankaccount
//and we will keep #balance as a private 
//so that nobody from outisde this class can modify 

class saving_account extends bank_account{
    //private field encapsulation
    #balance
    constructor(initialBalance){
        super();
        this.#balance = initialBalance;
        console.log(`initial balance ${initialBalance}`)
    }
    //add money to account
    deposit(amount){
        console.log(`you amount in deposit is ${amount}`)
        this.#balance+=amount;
        console.log(`saving Account ${amount}`)
    };    

//withdraw money from account
        withdraw(amount){
    //validation
    if(amount > this.#balance){
        console.log("saving account:insuffient balance");
    
    return;
   }
   this.#balance-=amount;
   console.log(
    `saving Account:withdraw ${amount}`
   );
}
//return current balance
getbalance() {
    return this.#balance;
}
}
//inheritance + polymorphism
//currentAccount IS-A bank account

class current_account extends bank_account{
   #balance;
   constructor(initialBalance){
    super();
    this.#balance=initialBalance;
   }
   deposit(amount){
    
    if(this.#balance - amount <-5000){
        console.log("current draft limit reached ")
   
    return;
     };
     this.#balance-=amount;
     console.log(`current account: withdrawn ${amount}`)
}
    getbalance(){
        return this.#balance

    }
}
//polymorphism
//atm does not know -> savingAccount and currentaccount 
//atm only knows this objects supports :
//withdraw(),getbalance()

//that is the power of abstraction 

class atm{
    withdrawMoney(account,amount){
        console.log("processing withdrawal")
        account.withdraw(amount);
        console.log("remaining balance",account.getBalance());
    }
    depositMoney(account,amount){
            console.log("processing withdrawal")
            account.deposit(amount);
            console.log("updated balane",account.getBalance());
    }
}

//main program 
//create saving account 
const saving  = new saving_account(10000);
console.log("depositing money into saving account")
 saving.deposit(100)
 saving.withdraw(100)

//create current account 
const current = new current_account(100000);

//create atm
const atm1 = new atm();

//deposit into the saving account
saving.deposit("saving",2000);

//withdraw from saving account
saving.withdraw(current,1000);

//withdraw beyond overdraft limit
atm1.withdrawMoney(current,10000)