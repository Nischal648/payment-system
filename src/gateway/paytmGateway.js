const PaymentGateway = require("./paymentGateway")
const PaytmBankingSystem = require("../banking/PaytmBankingSystem")

class PaytmGateway extends PaymentGateway{
    constructor(){
        super(new PaytmBankingSystem());
    }
}
