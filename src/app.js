//application entrypoint
//simulates a payment request coming from frontend
const PaymentController = require("./controller/PaymentController");
const PaymentRequest = require("./models/PaymentRequest")
const GatewayType = require("./factory/gatewayType");
const controller = new PaymentController();

const paymentRequest = new PaymentRequest(
    "Nischal",
    "merchant",
    15000000000,
    "INR"
);

controller.handelPayment(
    GatewayType.PAYTM,
    paymentRequest
)