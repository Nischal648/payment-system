//enum of supported gateways
//used to avoid magic strings 
//object.freeze -> the object becomes read-only.
//enum -> collection of predefined constant values . It is used to avoid magic string
//prevent typo and improve code readabilty 
//in js we implement enums using object.freeze()


const GatewayType = Object.freeze({
PAYTM: "PAYTM",
RAZORPAY: "RAZORPAY"
})
module.exports = GatewayType;