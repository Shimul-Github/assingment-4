function checkName(str) {
    const preferredLetters = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    const covertedCase = [];
    const lastLetterOfName = str.toString()[str.length - 1];

    for (let i of preferredLetters) {
        covertedCase.pushpreferredLetters[i];
        if (covertedCase.includes(lastLetterOfName)) {
            return 'Good Name';
            break;
        } else {
            return 'Bad Name';
            break;
        }
    }
    // if(typeof str !== 'string'){
    //     return 'invalid';
    // }else if() {
    //     for(let i = 0; i<preferredLetters.length; i++)
    //     { elseif( covertedCase.includes(lastLetterOfName)){return 'Good Name';
    //       break;
    //     }else {
    //         return 'Bad Name';
    //         break;
    //     }
    // }

    // }    
}