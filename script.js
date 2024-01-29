var person = {
    name: "Neha",
    age: 21,
    occupation: "Student"
};
function printPersonDetails(person) {
    for (var property in person) {
        if (person.hasOwnProperty(property)) {
            console.log(property + ": " + person[property]);
        }
    }
}
printPersonDetails(person);