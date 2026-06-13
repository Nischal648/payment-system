//entry point of the payment flow 
//receives request from client 
//choose gateway
//delegates work to service


const PaymentService = require("../service/PaymentService");
const GatewayFactory = require ("../factory/GatewayFactory") ;

class PaymentController{
    constructor(){
        this.paymentService = new PaymentService();
   }
   handelPayment(gatewayType,paymentService){
    const paymentGateway = 
          GatewayFactory
                .getInstance()
                .getGateway(gatewayType);

                this.paymentService.setGateway(paymentGateway);
                this.paymentService.processPayment(PaymentRequest);
   }
}
module.exports = PaymentController;