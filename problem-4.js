const object1 = { name: 'kolimuddin', birthYear: 1999, siteName: 'goggle', };
const object2 = { name: 'rahat' , birthYear: 2002, siteName: 'Facebook' };
const object3 = { name: 'toky' , birthYear: 200, siteName: 'Facebook' };
const object4 = { name: 'maisha' , birthYear: 2002 };
function password(obj) {
    
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
console.log(password(object4));