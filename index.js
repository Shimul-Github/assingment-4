function calculateMoney(number) {
    // console.log(number);
    if(number>=0){
    const pricePerTicket = 120;
    const salaryForOneGuard = 500;
    const salaryPerStaff    = 50;
    const totalIncome = number * pricePerTicket;
    const totalExpenditure = salaryForOneGuard + salaryPerStaff * 8;
    const savingsPerDay = totalIncome - totalExpenditure;
    return savingsPerDay;
    }
    else{
        return 'Please input a positive number as a number of ticket sale'
    }
    
}
// console.log(calculateMoney(5));

function checkName(str) {
    
}
// console.log(checkName('utshAyieouwk'));




const mixedArray = [1,NaN, 2, 12, 0, -1, undefined, 'jashim', true,'NaN1','1jashim' ];
const mixedArray1 = {num: [ 1 , 2 , 3 ]};
const mixedArray2 = [ 1 , 2 , -3 ];
const mixedArray3 = ['1' , {num:2} , NaN ];
const mixedArray4 = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// console.log(Array.isArray(mixedArray));
function deleteInvalids(arr) {
    // console.log(typeof arr);
    if (Array.isArray(arr)!==true){
        return 'Invalid Array';
    }
    const newarr=[];
    for(let index of arr){
        // console.log(index);
        if(typeof index !== 'number' || isNaN(index) === true)
        {
            continue;
        }
           
        else{
            newarr.push(index);
        } 
    }
    

    return newarr;
}
// deleteInvalids(mixedArray2);
// console.log(deleteInvalids(mixedArray));
// console.log(deleteInvalids(mixedArray1));
// console.log(deleteInvalids(mixedArray2));
// console.log(deleteInvalids(mixedArray3));
// console.log(deleteInvalids(mixedArray4));


const object1 ={
    name:'kolimuddin',
    birthYear: 1990,
    siteName : 'goggle',
};

function password(obj) {

    // const lengthOfValue = obj.birthYear;
    // console.log(obj.birthYear.toString().length);

    // console.log(obj);
    // console.log(typeof obj);
    const passwordString ='';
    if(obj.hasOwnProperty('name', 'birthYear', 'siteName') !== true )
    {
        return `'invalid'`;
    } else if(obj.birthYear.toString().length < 4){
        return `'invalid'`;
    } 
    else{
        for (let key in obj) {
            return (`${obj.siteName}#${obj.name}@${obj.birthYear}`); 
                
              }

    }
    

}
// password(object1);
// console.log(password(object1));

// const paymentInfo1 =[100][1000,3000,3500];
const paymentInfo =[1000,3000,3500];
const livingExpenditure = 2000;
function monthlySavings(arr, livingCost) {
    // console.log(Array.isArray(arr), typeof livingCost);
    
    if(Array.isArray(arr) !== true || typeof livingCost !== 'number'){
        console.log(`'invalid input'`)
    } 
    else{
        
        // console.log(`'valid input'`)
    }


    let taxAmountSum = 0;
    let income = 0;
     
    let nonTaxAmout = 0;
    for(let index of arr){
        income = income + index;
        
        if( index >= 3000){
            taxAmountSum += index;   
        }
        else{
            nonTaxAmout += index;
        }
               
    }
    // console.log(totalSum);
    // console.log(taxAmountSum);
    // console.log(nonTaxAmout);
    let netExpenditure = taxAmountSum * 20 / 100 + livingCost;
    let savings = income - netExpenditure;
    if (savings < 0){
        return 'earn more';
    }else{
        return  savings;

    }

    
    
    
        
        
    }
console.log(monthlySavings(paymentInfo, livingExpenditure));
      
