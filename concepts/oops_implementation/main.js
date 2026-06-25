
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
    }
    //add money to account
    deposit(amount){
        this.#balance+=amount;
        console.log(`saving Account ${amount}`)
    };    
}

//withdraw money from account
withdraw(amount){
    //validation
    if(amount > this.#balance){
        console.log("saving account:insuffient balance")
    
    return;
   }
   this.#balance-=amount;
   console.log(
    `saving Account:withdraw ${amount}`
   );
}
//return current balance
getbalance(){
    return this.#balance;
}