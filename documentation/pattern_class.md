# Design Patterns Used in Payment Gateway Project

| Class / Component | Pattern | Purpose |
|------------------|----------|---------|
| `GatewayFactory` | Factory Pattern | Creates the appropriate payment gateway object (`PaytmGateway`, `RazorpayGateway`) without exposing object creation logic to the client. |
| `GatewayFactory` | Singleton Pattern | Ensures only one factory instance exists throughout the application. |
| `PaymentGateway` | Template Method Pattern | Defines the common payment workflow: Validate → Initiate → Confirm. Subclasses implement the specific steps. |
| `PaytmGateway` / `RazorpayGateway` | Strategy-like Behavior | Different gateway implementations can be swapped at runtime while following the same interface. |
| `PaymentGateway → BankingSystem` | Composition | A payment gateway contains and uses a banking system to process transactions. |
| `PaymentRequest` | DTO (Data Transfer Object) | Transfers payment data between layers without containing business logic. |
| `Controller → Service` | Layered Architecture | Separates request handling from business logic for better maintainability and scalability. |

---

# Pattern Details

## 1. Factory Pattern

**Used In:** `GatewayFactory`

### Problem
The client should not be responsible for creating gateway objects directly.

### Solution
The factory creates the correct gateway object based on the gateway type.

```javascript
const gateway =
    GatewayFactory
        .getInstance()
        .getGateway(GatewayType.PAYTM);
```

### Benefit
- Loose coupling
- Easier to add new gateways
- Centralized object creation

---

## 2. Singleton Pattern

**Used In:** `GatewayFactory`

### Problem
Only one factory instance should exist.

### Solution

```javascript
static getInstance() {
    if (!GatewayFactory.instance) {
        GatewayFactory.instance = new GatewayFactory();
    }

    return GatewayFactory.instance;
}
```

### Benefit
- Single source of object creation
- Saves memory
- Consistent behavior

---

## 3. Template Method Pattern

**Used In:** `PaymentGateway`

### Problem
Every payment gateway follows the same high-level flow.

### Solution

```javascript
processPayment(paymentRequest) {
    this.validatePayment(paymentRequest);
    this.initiatePayment(paymentRequest);
    this.confirmPayment(paymentRequest);
}
```

Subclasses implement the details.

### Benefit
- Reuse common workflow
- Prevent code duplication
- Enforce processing order

---

## 4. Strategy-Like Behavior

**Used In:** `PaytmGateway`, `RazorpayGateway`

### Problem
Different payment providers have different implementations.

### Solution

```javascript
GatewayFactory.getGateway(type);
```

Returns the appropriate strategy implementation.

### Benefit
- Easily switch gateways
- Open for extension
- Closed for modification

---

## 5. Composition

**Used In:** `PaymentGateway → BankingSystem`

### Problem
A gateway needs banking functionality.

### Solution

```javascript
class PaymentGateway {
    constructor(bankingSystem) {
        this.bankingSystem = bankingSystem;
    }
}
```

### Benefit
- Better flexibility than inheritance
- Easy dependency replacement
- Follows "has-a" relationship

---

## 6. DTO (Data Transfer Object)

**Used In:** `PaymentRequest`

### Problem
Data must move through multiple layers.

### Solution

```javascript
const paymentRequest =
new PaymentRequest(
    "Nischal",
    "Amazon",
    500,
    "INR"
);
```

### Benefit
- Standardized data structure
- Cleaner APIs
- Easier validation

---

## 7. Layered Architecture

**Flow**

```text
Controller
    ↓
Service
    ↓
Gateway
    ↓
Banking System
```

### Responsibility

#### Controller
Receives requests and delegates work.

#### Service
Contains business logic.

#### Gateway
Handles payment provider logic.

#### Banking System
Communicates with the bank.

### Benefit
- Separation of concerns
- Easier testing
- Better scalability
- Easier maintenance

---

# Complete Payment Flow

```text
app.js
  ↓
PaymentController
  ↓
GatewayFactory (Singleton + Factory)
  ↓
PaytmGateway / RazorpayGateway
  ↓
PaymentService
  ↓
PaymentGateway.processPayment()
  ↓
validatePayment()
  ↓
initiatePayment()
  ↓
confirmPayment()
  ↓
BankingSystem.processPayment()
  ↓
Payment Success
```