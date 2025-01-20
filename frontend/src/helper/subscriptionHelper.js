export const createSubscription = async (planId) => {
    // Simulate API call to create subscription
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };
  
  export const cancelSubscription = async (subscriptionId)=> {
    // Simulate API call to cancel subscription
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  export const calculateTax = (amount) => {
    const taxRate = 0.18; // 18% tax rate
    const taxAmount = amount * taxRate;
    const total = amount + taxAmount;
    
    return {
      taxAmount: Number(taxAmount.toFixed(2)),
      total: Number(total.toFixed(2))
    };
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  export const simulateAsyncOperation = async () => {
    await delay(5000); // Delay for 2 seconds
  };
  