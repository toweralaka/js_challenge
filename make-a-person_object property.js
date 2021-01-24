var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  // this.firstName = firstAndLast.split(' ')[0];
  // this.lastName = firstAndLast.split(' ')[1];
  // this.fullName = this.firstName + " " + this.lastName;


  
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };
  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };
  this.setFullName = function() {
    let name = arguments;
    this.setFirstName(name[0].split(' ')[0]) ;
    this.setLastName(name[0].split(' ')[1]);
    // return "";
  };
  this.setFirstName = function() {
    let name = arguments[0];
    this.getFirstName = function() {
    return name;
  };
    // return "";
  };
  this.setLastName = function() {
    let name = arguments[0];
    this.getLastName = function() {
    return name;
  };
    // return "";
  };
  // return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.setFullName('pol poli'));
console.log(bob.getLastName());
