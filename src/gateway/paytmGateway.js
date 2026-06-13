const PaymentGateway = require("./paymentGateway")
const PaytmBankingSystem = require("../banking/PaytmBankingSystem")

class PaytmGateway extends PaymentGateway{
    constructor(){
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
    this.bankingSystem.processPayment(pr.amount);
 }
}
module.exports = PaytmGateway