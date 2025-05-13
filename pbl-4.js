function validProposal(person1, person2) {
        let ageDiff = Math.abs(person1.age - person2.age);

    if (person1.gender !== person2.gender && ageDiff <= 7) {
        return true;
    }
else{
    return false;
} 
}


console.log(validProposal(
  { name: "Alice", gender: "female", age: 25 },
  { name: "Bob", gender: "male", age: 30 }
)); // true
