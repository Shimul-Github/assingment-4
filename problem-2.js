function checkName(input) {
    let preferredLetters = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    let covertedCase = preferredLetters.map(preferredLetters=>preferredLetters.toLowerCase());
    // console.log(covertedCase);
    // const lastLetterOfName = str.toLowerCase()[str.length - 1];
    // console.log(lastLetterOfName);
    // let convertToString = str.toString();
    // console.log(convertToString); 
    if(typeof str !== 'string'){
        console.log('its not a valid input')
    }  
}
checkName(salman);



// for (let i of preferredLetters) {
    //     covertedCase.pushpreferredLetters[i];
    //     if (covertedCase.includes(lastLetterOfName)) {
    //         return 'Good Name';
    //         break;
    //     } else {
    //         return 'Bad Name';
    //         break;
    //     }
    // }
    // // if(typeof str !== 'string'){
    // //     return 'invalid';
    // // }else if() {
    // //     for(let i = 0; i<preferredLetters.length; i++)
    // //     { elseif( covertedCase.includes(lastLetterOfName)){return 'Good Name';
    // //       break;
    // //     }else {
    // //         return 'Bad Name';
    // //         break;
    // //     }
    // // }

    // // }  