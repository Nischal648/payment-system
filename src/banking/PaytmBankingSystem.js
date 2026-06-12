const BankingSystem = require("./BankingSystem")

class PaytmBankingSystem extends BankingSystem{
    processPayment(amount){
        console.log(`paytm bank processing ${amount}`)
    } 
}