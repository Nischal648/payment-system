const PaytmGateway = require("../gateway/PaytmGateway");
const RazorpayGateway = require("../gateway/razporpayGateway");
const GatewayType = require("./gatewayType");

class GatewayFactory{
    static instance;

    static getInstance(){
        if(!GatewayFactory.instance){
            GatewayFactory.instance = new GatewayFactory();
        }
        return GatewayFactory.instance;
    }

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