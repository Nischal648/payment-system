const BankingSystem = require("./BankingSystem");

class razorpayBankingSystem extends BankingSystem{
    processPayment(amount){
        console.log(`razorpay bank processing ${amount}`);
        return true;
    }
}
module.export = razorpayBankingSystem;