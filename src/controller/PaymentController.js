//entry point of the payment flow 
//receives request from client 
//choose gateway
//delegates work to service

//singleton pattern -> it prevents multiple objects from being created
//and make sure the entire application uses the shared instance 

 //this keyword -> refers to the current object and access its properties and methods  


const PaymentService = require("../service/PaymentService");
const GatewayFactory = require ("../factory/GatewayFactory") ;

class PaymentController{
    constructor(){
        //create an object of the payment service 
        this.paymentService = new PaymentService();
   }
   handelPayment(gatewayType,PaymentRequest){
     // Singleton + Factory Pattern
    const paymentGateway = 
          GatewayFactory
                .getInstance()
                .getGateway(gatewayType);

                this.paymentService.setGateway(paymentGateway);
                this.paymentService.processPayment(PaymentRequest);
   }
}
module.exports = PaymentController;