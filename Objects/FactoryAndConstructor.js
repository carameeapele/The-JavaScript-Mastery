// let address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// };

//Factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address = createAddress('a', 'b', 'c');
console.log(address);

//Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const anotherAddress = new Address('a', 'b', 'c');
console.log(anotherAddress);