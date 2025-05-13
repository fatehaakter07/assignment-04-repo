

function calculateVAT(amount) {

    const numericAmount = parseFloat(amount);

    
    if (typeof numericAmount !== "number" || numericAmount < 0) {
        return "Invalid";
    }


    const vat = numericAmount * 0.075;

  
    return vat;
}


function validContact(contact) {
    if (typeof contact !== 'string') {
        return "Invalid" ;
    }

    if(contact.length === 11 && contact.startsWith("01") && /^\d+$/.test(contact)){

    return true;
}
    
    else{
        return false;
    }
}







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






function validProposal(person1, person2) {
        let ageDiff = Math.abs(person1.age - person2.age);

    if (person1.gender !== person2.gender && ageDiff <= 7) {
        return true;
    }
else{
    return false;
} 
}




function calculateSleepTime(times) {
  if (!Array.isArray(times) || typeof times === 'number') {
    return "Invalid";
  }

  let totalSeconds = 0;
  for (const second of times) {
   totalSeconds += second;
  }

  const hour = Math.floor(totalSeconds / 3600);
  const minute = Math.floor((totalSeconds % 3600) / 60);
  const second = totalSeconds % 60;

  return { hour, minute, second };
}


