const PaymentGateway = require("./paymentGateway")
const PaytmBankingSystem = require("../banking/PaytmBankingSystem")

class PaytmGateway extends PaymentGateway{
    constructor(){
        //inject paytm banking system
        //super ->  is used in a child class to acess the parent class constrcutor and methods 
        // it helps reuse the parent class fucntionality instead of rewriting it     
        super(new PaytmBankingSystem());
    }


validatePayment(pr){
    console.log("paytm validation")

}
initiatePayment(pr){
    console.log("paytn initiaion")
}

confirmPayment(pr){
    console.log("paytm confirmation")

    //final call to the banking system
    this.bankingSystem.processPayment(pr.amount);
 }
}
module.exports = PaytmGateway