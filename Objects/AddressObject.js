// street
// city
// zipCode
// showAddress

let address = {
    street: 'a',
    cty: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);