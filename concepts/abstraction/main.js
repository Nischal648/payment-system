class atm{
    constructor(balance,pin){
        //this will point to the current object of atm 
        this.balance = balance;
        this.pin = pin;
        console.log(this.balance,this.pin)
    }
    //public mehtod (the abstract interface)
    //this is th only method that user sees and interact with 
    withdrawMoney(amount,enterdPin){
        //this will call the private method #verify pin 
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
        console.log()
        //internal step 4 
        this.#dispenceCash(amount);
        //internal step 5
        this.#printRecipt(amount);
    }
    //#means creating a private method 
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
//creating an object 
const atm1 = new atm(10000,1234)
atm1.withdrawMoney(2000,1234);