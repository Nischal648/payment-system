class  PaymentRequest {
    constructor(sender,receive,amount,currency){
        this.sender = sender;
        this.receive = receive;
        this.amount = amount;
        this.currency = currency;

    }

}

module.exports = PaymentRequest 