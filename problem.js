
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
console.log(checkName('199'));
 
