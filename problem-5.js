const paymentInfo = 100;
const livingCost = [ 900 , 2700 , 3400];
function monthlySavings(arr, number) {
    if(Array.isArray(arr) !== true || typeof number !== 'number'){
        return 'invalid input'
    }
    let totalIncome = 0;
    let totalTax = 0;
        for(let i = 0; i < arr.length; i++){
            totalIncome += arr[i];
            let x = arr[i];
            if(x < 3000){
               continue;
            }else{
                totalTax += arr[i] * 20 / 100 ;
            }
        }
            let totalExpenditure = number + totalTax;
            let savings = totalIncome -totalExpenditure;

            if (savings < 0) {
                    return `'earn more'`;
                } else {
                    return savings;
                }    
}
console.log(monthlySavings(paymentInfo, livingCost))
// monthlySavings();