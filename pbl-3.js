

function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let pass = 0;
    let fail = 0;

    for (let mark of marks) {
        if (typeof mark === 'number') {
            if (mark >= 50) {
                pass++;
            } else {
                fail++;
            }
        }
    }

if(pass > fail){
    return true;
}
else{
    return false;
}



}




console.log(willSuccess([60, 70, 80, 40, 30]));       // true
console.log(willSuccess([48, 45, 92, 100]));          // false
console.log(willSuccess([48, 48, 50, 50, 100]));      // true
console.log(willSuccess([1]));                        // false
console.log(willSuccess([90]));                       // true
console.log(willSuccess([90, 99, 87, 48, 34, 49]));   // false
console.log(willSuccess("100, 100"));                 // "Invalid"
console.log(willSuccess(90));                         // "Invalid"
