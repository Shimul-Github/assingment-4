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
function checkName(input) {
    input = input.toLowerCase();
    let preferredLetters = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    let covertedCase = preferredLetters.map(preferredLetters=>preferredLetters.toLowerCase());
    const lastLetterOfName = input[input.length - 1];
    if(typeof input !== 'string' || isNaN(input) === false){
        return `'Error: Not a string'`;
    }else{ for(let i of covertedCase){
        if(covertedCase.includes(lastLetterOfName)){
            return `'good name'`
        }else{
           return `'bad name'`
        }
    }
    }
}
function deleteInvalids(arr){
    // console.log(typeof arr);
    if (Array.isArray(arr) !== true) {
        return `'Invalid Array'`;
    }
    const newarr = [];
    for (let index of arr) {
        // console.log(index);
        if (typeof index !== 'number' || isNaN(index) === true) {
            continue;
        }
        else {
            newarr.push(index);
        }
    }
    return newarr;
}

function password(obj){
    
    if (obj.hasOwnProperty('name', 'birthYear', 'siteName') !== true) {
        return `'invalid'`;
    } else if (obj.birthYear.toString().length < 4) {
        return `'invalid'`;
    }
    else 
          { 
           const first = obj.siteName[0];
           const second = obj.siteName.slice(1);
            return (`${first.toUpperCase().concat(second)}#${obj.name}@${obj.birthYear}`);
    }
}
function monthlySavings(arr, number){
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