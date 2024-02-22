import calculateInterest from './interest.js';

const main = async () => {
    try {
        const principal = 1000;
        const rate = 5; // 5%
        const time = 2; // 2 years

        const { amount, interest } = await calculateInterest(principal, rate, time);
        console.log(`Principal: $${principal}`);
        console.log(`Interest Rate: ${rate}%`);
        console.log(`Time Period: ${time} years`);
        console.log(`Total Amount: $${amount.toFixed(2)}`);
        console.log(`Interest Earned: $${interest.toFixed(2)}`);
    } catch (error) {
        console.error("Error:", error);
    }
};

main();
