
const PaytmGateway = require("../gateway/PaytmGateway");
const RazorpayGateway = require("../gateway/razporpayGateway");
const GatewayType = require("./gatewayType");

//singleton factory
//responsibility
//return the correct gateway object 
//client does not need to know 
//new PaytmGateway()
//new RazorpayGateway()
//factory creates them 

//singleton -> it prevents multiple objects from being created
//and make sure the entire application uses the shared instance 

class GatewayFactory{
    //the static varible belongs to the class itself , not to any object 
    static instance;

    static getInstance(){
        if(!GatewayFactory.instance){
            GatewayFactory.instance = new GatewayFactory();
        }
        return GatewayFactory.instance;
    }
//here i am passing the value  for selecting the gateway whether paytm and razorpay 

    getGateway(type){
        switch(type){
            case GatewayType.PAYTM:
                return new PaytmGateway();

            case GatewayType.RAZORPAY:
                return new RazorpayGateway();

            default:
                throw new Error("invalid gateway")
        }
    }
}
module.exports = GatewayFactory;