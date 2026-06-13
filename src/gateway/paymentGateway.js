//base  payment gateway
//all gateway must follow this sequence
//1-> validatte , 2 ->initiate , 3->confirm
//example of template method pattern
class PaymentGateway{
    constructor(bankingSystem){
        this.bankingSystem = bankingSystem;
    }
    validatePayment(PaymentRequest){
        throw new Error("must be implemented")
    }

    initiatePayment(PaymentRequest){
        throw new Error("must implement")
    }
    confirmPayment(PaymentRequest){
         throw new Error("must implement")
    }

    processPayment(PaymentRequest){
        this.validatePayment(PaymentRequest);
        this.initiatePayment(PaymentRequest);
        this.confirmPayment(PaymentRequest);
    }

}

module.export = PaymentGateway;