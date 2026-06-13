//enum of supported gateways
//used to avoid magic strings 
const GatewayType = Object.freeze({
PAYTM: "PAYTM",
RAZORPAY: "RAZORPAY"
})
module.exports = GatewayType;