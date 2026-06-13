//application entrypoint
//simulates a payment request coming from frontend
const PaymentController = require("./controller/PaymentController");
const PaymentRequest = require("./models/PaymentRequest")
const GatewayType = require("./factory/gatewayType");
const PaymentRequest = require("./models/PaymentRequest");

const controller = new PaymentController();

const PaymentRequest = new PaymentRequest(
    "Nischal",
    "merchant",
    15000000000,
    "INR"
);

controller.handelPayment(
    GatewayType.PAYTM,
    PaymentRequest
)