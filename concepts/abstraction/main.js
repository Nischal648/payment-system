class atm{
    constructor(balance,pin){
        this.balance = balance;
        this.pin = pin;
    }
    //public mehtod
    //user only access this method 
    withdrawMoney(amount,enterdPin){
        //internal step
        if(!this.#verifyPin(enterdPin)){
            console.log("invalid pin");
            return;
               }
        //internal step 2
        if(!this.#hasSufficientBalance(amount)){
            console.log("insufficient balance");
            return;
        }
        //internal step 3
        this.#deductBalance(amount);
        //internal step 4 
        this.#dispenceCash(amount);
        //internal step 5
        this.#printRecipt(amount);
    }
    //private methods hidden for users 
    #verifyPin(enteredPin){
        return this.pin === enteredPin;
    }
    #hasSufficientBalance(amount){
        return this.balance >= amount;
    }
    #deductBalance(amount){
        this.balance -=amount
    }
    #dispenceCash(amount){
        console.log(`Dispensing ${amount}`);
    }
    #printRecipt(amount){
        console.log(`withdrawn ${amount}`);
        console.log(`remainig balance ${this.balance}`)
    }
}

const atm1 = new atm(10000,1234)
atm1.withdrawMoney(2000,1234);