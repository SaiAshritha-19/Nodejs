const calculateInterest = async (principal, rate, time) => {
    return new Promise((resolve, reject) => {
        if (principal <= 0 || rate <= 0 || time <= 0) {
            reject("Principal amount, interest rate, and time should be positive numbers.");
        } else {
            const amount = principal * Math.pow((1 + rate / 100), time);
            const interest = amount - principal;
            resolve({ amount, interest });
        }
    });
};

export default calculateInterest;
