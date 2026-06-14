//businees layer
//controller talks to service 
//service takls to gateway 
//keep controller clean


class PaymentService {
setGateway(paymentGateway){
    this.paymentGateway=paymentGateway
}
processPayment(PaymentRequest){
    if(!this.paymentGateway){
        throw new Error("gateway not set")
    }
    
    this.paymentGateway.processPayment(PaymentRequest);
}
}
module.exports = PaymentService