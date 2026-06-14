//abstract class 

//every banking provider must impplement processPayment()
//example-> paytmBankingSystem , razorPatBankingSystem
class BankingSystem{
    processPayment(amount){
        throw new Error("processPayment() msut be implemented ")

    }
}
module.exports = BankingSystem;