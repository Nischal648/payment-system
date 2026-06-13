const PaymentGateway = require("./paymentGateway");
const razorpayBankingSystem = require("../banking/razorpayBankingSystem");

class RazorpayGateway extends PaymentGateway{
    constructor(){
        super()
            super(new razorpayBankingSystem());
    }
    validatePayment(pr){
        console.log("razorpay validation")
    }
    
    initiatePayment(pr){
        console.log("razorpay initiation")
    }

    confirPayment(pr){
        console.log("razorpay confirmation")
        this.bankingSystem.processPayment(pr.amount);

    }

}
module.exports = RazorpayGateway
