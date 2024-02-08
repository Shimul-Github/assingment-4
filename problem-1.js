function calculateMoney(ticketSale) {
    if (ticketSale >= 0) {
        const pricePerTicket = 120;
        const salaryForOneGuard = 500;
        const salaryPerStaff = 50;
        const totalIncome = ticketSale * pricePerTicket;
        const totalExpenditure = salaryForOneGuard + salaryPerStaff * 8;
        const savingsPerDay = totalIncome - totalExpenditure;
        return savingsPerDay;
    }
    else {
        return 'Invalid Number'
    }
}
// console.log(calculateMoney(10));
console.log(calculateMoney(-130));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
