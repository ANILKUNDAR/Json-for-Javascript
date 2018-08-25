var user = {
    first_name: "Sammy",
    last_name : "Shark",
    online    : true,
    full_name : function() {
       return this.first_name + " " + this.last_name;
    }
};
console.log(user)
//answer 
//{ first_name: 'Sammy',
// last_name: 'Shark',
// online: true,
//full_name: [Function: full_name] }

console.log(user.full_name())// answer:sammy shark