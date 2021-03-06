 /* constructor function that returns 'this' with keepContracts method.
 contacts is a private local variable of the constructor function */
 function MakeContacts() {

    let contacts = [];
    this.keepContacts = keepContacts;
 
    function keepContacts(name) {
      let aContact = contacts.find(contact => (contact.name === name) ? true : false);
      if (aContact !== undefined) {
        return aContact.phone;
      } else {
        contacts.push({
          name: name,
          phone: prompt("Please enter phone number: ")
        });
      }
    }
 
    
 
  }
  // test it
  const myContacts = new MakeContacts();
  myContacts.keepContacts("Bill");
  myContacts.keepContacts("Bob");
  console.log("should find number for bill: " + myContacts.keepContacts("Bill"));
 